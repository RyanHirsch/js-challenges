import { sort } from "../quick-sort";

describe("Quick Sort", () => {
  describe("Integer sorting", () => {
    it("Sorts a single item", () => {
      const items = [1];
      const result = sort(items);
      expect(result).toEqual(items);
    });

    it("sorts a two item array", () => {
      const expected = [1, 2];
      const result = sort([2, 1]);
      expect(result).toEqual(expected);
    });

    it("sorts a large item array", () => {
      const items = [...Array(60)].map(() => Math.floor(Math.random() * 1000));
      const result = sort(items);
      expect(result).toEqual(items.sort((a, b) => a - b));
    });
  });
});
