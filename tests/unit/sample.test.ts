import { ok, err } from "../../src/utils/result";

function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}

(() => {
  const r1 = ok(1);
  const r2 = err(new Error("fail"));

  assert(r1.ok === true && r1.value === 1, "ok() did not behave as expected");
  assert(r2.ok === false && r2.error instanceof Error, "err() did not behave as expected");
})();
