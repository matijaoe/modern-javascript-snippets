const SYMBOL = "⚡";

export const replaceSymbol = (str: string) => str.replace(` ${SYMBOL}`, "");
export const addSymbol = (str: string) => `${str} ${SYMBOL}`;
