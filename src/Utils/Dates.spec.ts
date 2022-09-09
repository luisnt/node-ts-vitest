import { dates, Dates } from "./Dates";

describe("Values of class utility Dates", () => {
  test("it should be able to current day", () => {
    const result: number = dates.day;
    const value: number = 9;
    expect(value).toEqual(result);
  });

  test("it should be able to current month", () => {
    const result: number = dates.month;
    const value: number = 9;
    expect(value).toEqual(result);
  });

  test("it should be able to current year", () => {
    const result: number = dates.year;
    const value: number = 2022;
    expect(value).toEqual(result);
  });

  test("it should be able to current date", () => {
    const date = new Date();
    dates.date = date;
    const result: string = dates.date;
    const value: string = date;
    expect(value).toEqual(result);
  });

  test("it should increases date with on day", () => {
    dates.date = new Date();
    const result: number = dates.nextDay.day;
    const value: number = 10;
    expect(value).toEqual(result);
  });

  test("it should increases date with on month", () => {
    dates.date = new Date();
    const result: number = dates.nextMonth.month;
    const value: number = 10;
    expect(value).toEqual(result);
  });

  test("it should increases date with on year", () => {
    dates.date = new Date();
    const result: number = dates.nextYear.year;
    const value: number = 2023;
    expect(value).toEqual(result);
  });

  test("it should decrease the date by one day", () => {
    dates.date = new Date();
    const result: number = dates.priorDay.day;
    const value: number = 8;
    expect(value).toEqual(result);
  });

  test("it should decrease the date by one month", () => {
    dates.date = new Date();
    const result: number = dates.priorMonth.month;
    const value: number = 8;
    expect(value).toEqual(result);
  });

  test("it should decrease the date by one year", () => {
    dates.date = new Date();
    const result: number = dates.priorYear.year;
    const value: number = 2021;
    expect(value).toEqual(result);
  });

  test("it should be able to return the same date of constructor", () => {
    const date = new Date();
    const dates = new Dates({ date });
    const value = date.toISOString();
    const result: Date = dates.date.toISOString();
    expect(value).toEqual(result);
  });

  test("it should be able to return the same date defined in the data property", () => {
    const date = new Date();
    const dates = new Dates();
    date.date = date;
    const value = date.toISOString();
    const result = dates.date.toISOString();
    expect(value).toEqual(result);
  });

  test("It should be able to return the same date defined in the date property of type string", () => {
    const date = new Date(2022, 11, 21, 17, 36);
    const dateStr = "2022-12-21 17:36";
    const dates = new Dates();
    dates.date = dateStr;
    const value = date;
    const result = dates.date;
    console.log({ date, dateStr, dates, result, value });

    expect(value).toEqual(result);
  });

  test("it should increases date with on 7 day", () => {
    dates.date = new Date();
    dates.days = 7;
    const value: number = 16;
    const result: number = dates.day;
    expect(value).toEqual(result);
  });

  test("it should increases date with on 7 month", () => {
    dates.date = new Date();
    dates.months = 7;
    const value: number = 4;
    const result: number = dates.month;
    expect(value).toEqual(result);
  });

  test("it should increases date with on 7 year", () => {
    dates.date = new Date();
    dates.years = 7;
    const value: number = 2029;
    const result: number = dates.year;
    expect(value).toEqual(result);
  });

  test("it should decreases date with on 7 day", () => {
    dates.date = new Date();
    dates.days = -7;
    const value: number = 2;
    const result: number = dates.day;
    expect(value).toEqual(result);
  });

  test("it should decreases date with on 7 month", () => {
    dates.date = new Date();
    dates.months = -7;
    const value: number = 2;
    const result: number = dates.month;
    expect(value).toEqual(result);
  });

  test("it should decreases date with on 7 year", () => {
    dates.date = new Date();
    dates.years = -7;
    const value: number = 2015;
    const result: number = dates.year;
    expect(value).toEqual(result);
  });
});
