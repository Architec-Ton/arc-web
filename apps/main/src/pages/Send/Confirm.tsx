import { useMemo } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { Address } from "@ton/core";

import { trimAddress, useSendTransaction, useTonWallet } from "@arc/sdk";
import { ArrowCircleUp2Icon } from "@arc/ui/icons/arrow-circle-up-2";
import { List } from "@arc/ui/list";
import { ListItem } from "@arc/ui/list-item";

import { useCreateSendJettonTransfer } from "@/api/node/useGenerateSend";
import { useAssetDetails } from "@/api/stonFi/useAssetDetails";
import { ShowMainButton } from "@/components/MainButton";
import { usePincodeModal } from "@/components/Pincode/usePincodeModal";
import { formatToNano } from "@/utils/format";
import { isNativeAddress, NATIVE_TON_ADDRESS } from "@/utils/isNativeAddress";
import { isValidAddress } from "@/utils/isValidAddress";

const comment = false;

export const Confirm = ({
  assetAddress,
  toAddress,
  amount,
}: {
  assetAddress: string;
  toAddress: string;
  amount: string;
}) => {
  const navigate = useNavigate();

  const activeWallet = useTonWallet();
  const { data: asset } = useAssetDetails(assetAddress);

  const canSend = useMemo(
    () => isValidAddress(toAddress) && isValidAddress(assetAddress) && !Number.isNaN(Number(amount) && !!activeWallet),
    [toAddress, assetAddress, amount, activeWallet],
  );

  const { data: transfer, isFetching: isTransferFetching } = useCreateSendJettonTransfer({
    toAddress,
    fromAsset: assetAddress,
    amount: !Number.isNaN(Number(amount)) ? formatToNano(amount, asset?.asset.decimals).toString() : "",
  });

  const send = useSendTransaction();
  const { promptPincode, PincodeModalComponent } = usePincodeModal();

  const handleSend = async () => {
    if (canSend) {
      let mnemonics: string[] | null;

      try {
        mnemonics = await promptPincode("decode");

        if (mnemonics) {
          if (isNativeAddress(assetAddress)) {
            send.mutate(
              {
                publicKey: activeWallet!.publicKey,
                mnemonics,
                walletVersion: activeWallet!.walletVersion,

                value: formatToNano(amount, asset?.asset.decimals),
                to: Address.parse(toAddress),
              },
              {
                onError: (error) => {
                  toast.error(
                    error instanceof Error ? error.message : "We couldn't send the transaction. Please try again.",
                    {
                      id: "error-send-transaction",
                    },
                  );
                },
              },
            );
          } else {
            if (!transfer) {
              toast.error("We couldn't send the transaction. Please try again.", {
                id: "error-send-transaction",
              });
              return;
            }

            send.mutate(
              {
                publicKey: activeWallet!.publicKey,
                mnemonics,
                walletVersion: activeWallet!.walletVersion,

                value: BigInt(transfer.value),
                to: Address.parse(transfer.to),
                body: transfer.body,
                mode: transfer.mode,
              },
              {
                onError: (error) => {
                  toast.error(
                    error instanceof Error ? error.message : "We couldn't send the transaction. Please try again.",
                    {
                      id: "error-send-transaction",
                    },
                  );
                },
              },
            );
          }
          navigate(`/`);
          return;
        }

        console.error("No mnemonics provided");
      } catch (error) {
        console.error("Error unhashing or sending:", error);
      }
    }
  };

  const averageFee = assetAddress === NATIVE_TON_ADDRESS ? 0.0055 : 0.037;

  return (
    <ShowMainButton
      hidden={!canSend || (!isTransferFetching && !transfer && !isNativeAddress(assetAddress))}
      onClick={handleSend}
      title="Confirm"
      loading={isTransferFetching}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-2">
          <ArrowCircleUp2Icon className="bg-accent flex h-8 w-8 items-center justify-center rounded-full stroke-white p-1" />

          <h2 className="text-title-2 text-text font-medium">Send to {trimAddress(toAddress)}</h2>
        </div>

        <div className="bg-separator -mx-4 my-4 h-0.5 w-[calc(100%+2rem)]" />

        <List>
          <ListItem leftTopText="Recipient" rightTopText={trimAddress(toAddress)} withSeparator />
          <ListItem leftTopText="Currency" rightTopText={asset?.asset.symbol} withSeparator />
          {!Number.isNaN(Number(amount)) && (
            <ListItem leftTopText="Amount" rightTopText={Number(amount)} withSeparator />
          )}
          <ListItem leftTopText="Commision" rightTopText={`~ ${averageFee} TON`} withSeparator />
          {comment && <ListItem leftTopText="Comment" rightTopText="In process" withSeparator />}
        </List>

        {!canSend && (
          <div className="text-negative text-headline p-2">Please enter valid address, asset and amount</div>
        )}
        {!isTransferFetching && !transfer && !isNativeAddress(assetAddress) && (
          <div className="text-negative text-headline p-2">Error when create transaction body</div>
        )}
        {PincodeModalComponent}
      </div>
    </ShowMainButton>
  );
};
