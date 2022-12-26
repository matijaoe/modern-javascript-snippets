export type VscSnippet = {
  prefix: string | string[];
  body: string | string[];
  description?: string;
};
// name: { prefix: string | [], body: string | string[], description?: string }
export type VscSnippetDict = Record<string, VscSnippet>;

export type XSnippet = Omit<VscSnippet, "prefix"> & { name: string };

// prefix: { name: string, body: string | string[], description?: string }
export type XSnippetDict = Record<string, XSnippet>;
