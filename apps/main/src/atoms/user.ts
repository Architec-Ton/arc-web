import { type UUID } from "crypto";

import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai/vanilla";

import { StorageKeys } from "@/const/storageKeys";

export interface UserWallet {
  id: UUID;
  network: string;
  address: string;
  publicKey?: string;
  privateKey?: string;
}

export const userWalletsAtom = atomWithStorage<UserWallet[]>(StorageKeys.UserWallets, [], undefined, {
  getOnInit: true,
});

export const activeUserWalletIdAtom = atomWithStorage<UUID | undefined>(
  StorageKeys.ActiveUserWalletId,
  undefined,
  undefined,
  { getOnInit: true },
);

export const activeUserWalletAtom = atom<UserWallet | undefined>((get) => {
  const userWallets = get(userWalletsAtom);
  const activeUserWalletId = get(activeUserWalletIdAtom);

  return userWallets.find((wallet) => wallet.id === activeUserWalletId);
});

// user: in our backend, has wallets

// wallets of user = [wallet1, wallet2, wallet3]
// wallet: {connectionType, network, address, publickKey, privateKey}

export const authTokenAtom = atom<string | null>(null);
