import { evaluateTex, Scope } from "../src/index";
import { number } from "mathjs";

function evaluate(texStr: string, scope?: Scope) {
  return number(evaluateTex(texStr).evaluated);
}

test("evaluates sqrt", () => {
  expect(evaluate("\\sqrt{25}")).toStrictEqual(5);
});

test("evaluates log", () => {
  expect(evaluate("\\log(100)")).toStrictEqual(4.605170185988092);
  expect(evaluate("\\log(128, 2)")).toStrictEqual(7);
  expect(evaluate("\\log(2500, 50)")).toStrictEqual(2);
});

test("evaluates sin", () => {
  expect(evaluate("\\sin{0.5 * \\pi}")).toStrictEqual(1);
});

test("evaluates sinh", () => {
  expect(evaluate("\\sinh{0}")).toStrictEqual(0);
});

test("evaluates cosh", () => {
  expect(evaluate("\\cosh{0}")).toStrictEqual(1);
});

test("evaluates tanh", () => {
  expect(evaluate("\\tanh{0}")).toStrictEqual(0);
});
