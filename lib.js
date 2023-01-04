import("./pkg/").then((lib) => {
    // lib is the wasm library you can now use.
    console.log(`2 + 2 = ${lib.add(2, 2)}`);
  });