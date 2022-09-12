import { getFutureDate } from "./get-future-date"
describe("test for get-future-date function", () => {
  test("increases date with one year", () => {
    const date = new Date()
    const year = date.getFullYear()
    const nextYear = year + 1
    const resultYear = getFutureDate(`${year}-08-10`).getFullYear()
    expect(nextYear).toEqual(resultYear)
  })
})
