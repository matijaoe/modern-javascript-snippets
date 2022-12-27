import { XSnippetDefinition } from "../../models/app.ts";

export const testing: XSnippetDefinition = {
  meta: {
    title: "Testing",
  },
  snippets: {
    desc: {
      name: "describe",
      body: "describe('${1:description}', () => {\n\t$0\n})",
    },
    cont: {
      name: "context",
      body: "context('${1:description}', () => {\n\t$0\n})",
    },
    it: {
      name: "test (synchronous)",
      body: "it('${1:description}', () => {\n\t$0\n})",
    },
    ita: {
      name: "test (asynchronous)",
      body: "it('${1:description}', async () => {\n\t$0\n})",
    },
    itc: {
      name: "test (callback)",
      body: "it('${1:description}', (done) => {\n\t$0\n\tdone()\n})",
    },
    bf: {
      name: "before test suite",
      body: "before(() => {\n\t$0\n})",
    },
    bfe: {
      name: "before each test",
      body: "beforeEach(() => {\n\t$0\n})",
    },
    aft: {
      name: "after test suite",
      body: "after(() => {\n\t$0\n})",
    },
    afe: {
      name: "after each test",
      body: "afterEach(() => {\n\t$0\n})",
    },
  },
};
