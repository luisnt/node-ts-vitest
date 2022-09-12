import { dates, Dates } from "./Dates"

const day = 12
const month = 9
const year = 2022
const hour = 17
const minute = 36

const CURRENT_DATE = {
  current: { day, month, year, hour, minute },
  prior: { day: day - 1, month: month - 1, year: year - 1 },
  next: { day: day + 1, month: month + 1, year: year + 1 },
  prior7: { day: day - 7, month: month - 7, year: year - 7 },
  next7: { day: day + 7, month: 4, year: year + 7 }
}

describe("Values of class utility Dates", () => {
  test("it should be able to current day", () => {
    const result: number = dates.setDate(new Date()).day
    const value: number = CURRENT_DATE.current.day
    expect(value).toEqual(result)
  })

  test("it should be able to current month", () => {
    const result: number = dates.setDate(new Date()).month
    const value: number = CURRENT_DATE.current.month
    expect(value).toEqual(result)
  })

  test("it should be able to current year", () => {
    const result: number = dates.setDate(new Date()).year
    const value: number = CURRENT_DATE.current.year
    expect(value).toEqual(result)
  })

  test("it should be able to current date", () => {
    const date: Date = new Date()
    const result: Date = dates.setDate(date).date
    const value: Date = date
    expect(value).toEqual(result)
  })

  test("it should increases date with on day", () => {
    const result: number = dates.setDate(new Date()).nextDay.day
    const value: number = CURRENT_DATE.next.day
    expect(value).toEqual(result)
  })

  test("it should increases date with on month", () => {
    const result: number = dates.setDate(new Date()).nextMonth.month
    const value: number = CURRENT_DATE.next.month
    expect(value).toEqual(result)
  })

  test("it should increases date with on year", () => {
    const result: number = dates.setDate(new Date()).nextYear.year
    const value: number = CURRENT_DATE.next.year
    expect(value).toEqual(result)
  })

  test("it should decrease the date by one day", () => {
    const result: number = dates.setDate(new Date()).priorDay.day
    const value: number = CURRENT_DATE.prior.day
    expect(value).toEqual(result)
  })

  test("it should decrease the date by one month", () => {
    const result: number = dates.setDate(new Date()).priorMonth.month
    const value: number = CURRENT_DATE.prior.month
    expect(value).toEqual(result)
  })

  test("it should decrease the date by one year", () => {
    const result: number = dates.setDate(new Date()).priorYear.year
    const value: number = CURRENT_DATE.prior.year
    expect(value).toEqual(result)
  })

  test("it should increases date with on 7 day", () => {
    const value: number = CURRENT_DATE.next7.day
    const result: number = dates.setDate(new Date()).days(7).day
    expect(value).toEqual(result)
  })

  test("it should increases date with on 7 month", () => {
    const value: number = CURRENT_DATE.next7.month
    const result: number = dates.setDate(new Date()).months(7).month
    expect(value).toEqual(result)
  })

  test("it should increases date with on 7 year", () => {
    const value: number = CURRENT_DATE.next7.year
    const result: number = dates.setDate(new Date()).years(7).year
    expect(value).toEqual(result)
  })

  test("it should decreases date with on 7 day", () => {
    const value: number = CURRENT_DATE.prior7.day
    const result: number = dates.setDate(new Date()).days(-7).day
    expect(value).toEqual(result)
  })

  test("it should decreases date with on 7 month", () => {
    const value: number = CURRENT_DATE.prior7.month
    const result: number = dates.setDate(new Date()).months(-7).month
    expect(value).toEqual(result)
  })

  test("it should decreases date with on 7 year", () => {
    const value: number = CURRENT_DATE.prior7.year
    const result: number = dates.setDate(new Date()).years(-7).year
    expect(value).toEqual(result)
  })

  test("it should be able to return the same date of constructor", () => {
    const date: Date = new Date()
    const dates = new Dates({ date })
    const value = date.toISOString()
    const result: Date = dates.date.toISOString()
    expect(value).toEqual(result)
  })

  test("it should be able to return the same date defined in the data property", () => {
    const { year, month, day, hour, minute } = CURRENT_DATE.current
    const date = new Date(year, month, day, hour, minute)
    const value = date.toISOString()
    const result = dates.setDate(date).date.toISOString()
    expect(value).toEqual(result)
  })

  test("It should be able to return the same date defined in the date property of type string", () => {
    const { year, month, day, hour, minute } = CURRENT_DATE.current
    const dayValue = day <= 9 ? `0${day}` : day
    const monthValue = month <= 9 ? `0${month}` : month
    const dateStr = `${year}-${monthValue}-${dayValue} ${hour}:${minute}` // "2022-09-12 17:36"
    const monthIndex = month - 1
    const value = new Date(year, monthIndex, day, hour, minute).toISOString()
    const result = dates.setDate(dateStr).date.toISOString()
    expect(value).toEqual(result)
  })
})
