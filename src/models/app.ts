export type VscSnippet = {
  prefix: string | string[];
  body: string | string[];
  description?: string;
};

export type VscSnippetDict = Record<string, VscSnippet>;

export type XSnippet = Omit<VscSnippet, "prefix"> & { name: string };

export type XSnippetDict = Record<string, XSnippet>;
