import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe("iThe getCompletedTodos selector", () => {
  it("Return only completed todos", () => {
    const fakeTodos = [
      {
        text: "Say Hello",
        isCompleted: true,
      },
      {
        text: "Say Goodbye",
        isCompleted: false,
      },
      {
        text: "Climb Mount Everest",
        isCompleted: false,
      },
    ];

    const expected = [
      {
        text: "Say Hello",
        isCompleted: true,
      },
    ];

    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
