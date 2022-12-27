export const timers = {
  si: {
    name: "setInterval",
    body: "setInterval(() => {\n\t$0\n}, ${1:delay})",
  },
  st: {
    name: "setTimeout",
    body: "setTimeout(() => {\n\t$0\n}, ${1:delay})",
  },
  sim: {
    name: "setImmediate",
    body: "setImmediate(() => {\n\t$0\n})",
  },
  nt: {
    name: "process nextTick",
    body: "process.nextTick(() => {\n\t$0\n})",
  },
};
