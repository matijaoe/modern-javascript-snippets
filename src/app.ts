import { javascript, typescript } from "./snippets/app.ts";
import {
  convertToVscSnippet,
  groupSnippets,
  logTables,
  writeSnippetFile,
} from "./utils/app.ts";

const javascriptVscArray = javascript.map(convertToVscSnippet);
const typescriptVscArray = typescript.map(convertToVscSnippet);

// Log tables for every section of every language
logTables("JavaScript", javascriptVscArray);
logTables("TypeScript", typescriptVscArray);

// Create single snippet object
const snippetJavascript = groupSnippets(javascriptVscArray);
const snippetTypescript = groupSnippets(typescriptVscArray);

// Single snippet files
writeSnippetFile("javascript", snippetJavascript);
writeSnippetFile("typescript", snippetTypescript);
