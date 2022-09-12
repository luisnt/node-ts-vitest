import { add, parseISO } from "date-fns"

interface DatesProps {
  date: Date
}

export class Dates {
  constructor(private props: DatesProps = { date: new Date() }) {}

  get reset() {
    this.props.date = new Date()
    return this
  }

  setDate(value: Date | string): Dates {
    if (typeof value === "object") {
      this.props.date = value
      return this
    }

    this.props.date = parseISO(value)
    return this
  }

  days(value: number): Dates {
    const date = this.props.date
    this.props.date = add(date, { days: value })
    return this
  }

  months(value: number): Dates {
    const date = this.props.date
    this.props.date = add(date, { months: value })
    return this
  }

  years(value: number): Dates {
    const date = this.props.date
    this.props.date = add(date, { years: value })
    return this
  }

  get day(): Number {
    return this.props.date.getDate()
  }

  get month(): Number {
    return this.props.date.getMonth() + 1
  }

  get year(): Number {
    return this.props.date.getFullYear()
  }

  get date() {
    return this.props.date
  }

  get nextDay() {
    const date = this.props.date
    this.props.date = add(date, { days: 1 })
    return this
  }

  get nextMonth() {
    const date = this.props.date
    this.props.date = add(date, { months: 1 })
    return this
  }

  get nextYear() {
    const date = this.props.date
    this.props.date = add(date, { years: 1 })
    return this
  }

  get priorDay() {
    const date = this.props.date
    this.props.date = add(date, { days: -1 })
    return this
  }

  get priorMonth() {
    const date = this.props.date
    this.props.date = add(date, { months: -1 })
    return this
  }

  get priorYear() {
    const date = this.props.date
    this.props.date = add(date, { years: -1 })
    return this
  }

  toString(locale: string = "en-US"): string {
    return this.props.date.toLocaleString(locale, {})
  }

  get toStringUs(): string {
    return this.toString()
  }

  get toStringBr(): string {
    return this.toString("pt-BR")
  }
}

export const dates = new Dates()
