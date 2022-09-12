import { dates } from "./Dates"

export function getFutureDate(date: string): Date {
  const value = dates.setDate(date).years(1).date
  dates.reset
  return value
}
