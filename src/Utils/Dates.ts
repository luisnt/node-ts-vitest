import { add, parseISO } from "date-fns";

interface DatesProps {
  date: Date;
}

export class Dates {
  constructor(private props: DatesProps = { date: new Date() }) {}

  set date(value: Date | string) {
    if (typeof value === "object") {
      this.props.date = value;
      return;
    }

    this.props.date = parseISO(value);
  }

  set days(value: number) {
    const date = this.props.date;
    this.props.date = add(date, { days: value });
    return this;
  }

  set months(value: number) {
    const date = this.props.date;
    this.props.date = add(date, { months: value });
    return this;
  }

  set years(value: number) {
    const date = this.props.date;
    this.props.date = add(date, { years: value });
    return this;
  }

  get day() {
    return this.props.date.getDate();
  }

  get month() {
    return this.props.date.getMonth() + 1;
  }

  get year() {
    return this.props.date.getFullYear();
  }

  get date() {
    return this.props.date;
  }

  get nextDay() {
    const date = this.props.date;
    this.props.date = add(date, { days: 1 });
    return this;
  }

  get nextMonth() {
    const date = this.props.date;
    this.props.date = add(date, { months: 1 });
    return this;
  }

  get nextYear() {
    const date = this.props.date;
    this.props.date = add(date, { years: 1 });
    return this;
  }

  get priorDay() {
    const date = this.props.date;
    this.props.date = add(date, { days: -1 });
    return this;
  }

  get priorMonth() {
    const date = this.props.date;
    this.props.date = add(date, { months: -1 });
    return this;
  }

  get priorYear() {
    const date = this.props.date;
    this.props.date = add(date, { years: -1 });
    return this;
  }

  toString(locale: string = "en-US"): string {
    return this.props.date.toLocaleString(locale, {});
  }

  get toStringUs(): string {
    return this.toString();
  }

  get toStringBr(): string {
    return this.toString("pt-BR");
  }
}

export const dates = new Dates();
