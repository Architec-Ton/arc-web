export const formatDate = (date: Date | undefined, detailed: boolean = true, lang: string = "en-US") => {
  if (!date) return "";

  const now = new Date();
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  const isToday = date.toDateString() === now.toDateString();
  const isYesterday = date.toDateString() === yesterday.toDateString();

  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  if (isToday) {
    return detailed ? `Today, ${date.toLocaleTimeString(lang, options)}` : "Today";
  } else if (isYesterday) {
    return detailed ? `Yesterday, ${date.toLocaleTimeString(lang, options)}` : "Yesterday";
  } else {
    return detailed
      ? `${date.toLocaleDateString(lang, { day: "numeric", month: "long" })}, ${date.toLocaleTimeString(lang, options)}`
      : date.toLocaleDateString(lang, { day: "numeric", month: "long" });
  }
};

export const formatTokenValue = (value: number | bigint | undefined, lang: string = "en-US") => {
  if (value === undefined) return "N/A";
  if (Number.isNaN(value)) return "N/A";

  let amount;

  if (value < 0.01) {
    // Для маленьких значений используем maximumSignificantDigits
    amount = new Intl.NumberFormat(lang, {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumSignificantDigits: 6,
      useGrouping: true,
    }).format(value);
  } else {
    // Для остальных значений используем maximumFractionDigits
    amount = new Intl.NumberFormat(lang, {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      useGrouping: true,
    }).format(value);
  }

  return amount;
};

export const formatCurrency = (price: number | undefined, lang: string = "en-US") => {
  if (price === undefined) return "N/A";
  if (Number.isNaN(price)) return "N/A";

  let value;

  if (price < 0.01) {
    // Для маленьких значений используем maximumSignificantDigits
    value = new Intl.NumberFormat(lang, {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumSignificantDigits: 2,
      useGrouping: true,
    }).format(price);
  } else {
    // Для остальных значений используем maximumFractionDigits
    value = new Intl.NumberFormat(lang, {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      useGrouping: true,
    }).format(price);
  }

  return value;
};

export const formatFromNano = (value: string | bigint | number | undefined, decimals: number = 9) => {
  if (value === undefined) return "N/A";

  let bigValue: bigint;

  if (typeof value === "string") {
    bigValue = BigInt(value);
  } else if (typeof value === "number") {
    bigValue = BigInt(Math.round(value));
  } else {
    bigValue = value;
  }

  const divisor = BigInt(10) ** BigInt(decimals);
  const beforeDecimal = bigValue / divisor;
  const afterDecimal = bigValue % divisor;

  const beforeDecimalStr = beforeDecimal.toString();
  const afterDecimalStr = afterDecimal.toString().padStart(decimals, "0");

  const numValue = Number(beforeDecimalStr + "." + afterDecimalStr);

  return numValue;
};

export const formatToNano = (value: string | number | undefined, decimals: number = 9): bigint => {
  if (value === undefined) return BigInt(0);

  let strValue: string;

  if (typeof value === "number") {
    if (Number.isNaN(value)) return BigInt(0);
    strValue = value.toString();
  } else {
    strValue = value;
  }

  strValue = strValue.replace(",", ".");

  const [integerPart, fractionalPart = ""] = strValue.split(".");
  const paddedFractionalPart = fractionalPart.padEnd(decimals, "0").slice(0, decimals);
  const wholePart = `${integerPart}${paddedFractionalPart}`;

  return BigInt(wholePart);
};
