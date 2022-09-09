import { AppointmentInterface } from "../interfaces/AppointmentInterface"

interface AppointmentProps extends AppointmentInterface {}

export class Appointment {
  constructor(private props: AppointmentProps) {
    const { startsAt, endsAt } = props

    if (startsAt <= new Date()) {
      throw new Error("Invalid start date")
    }

    if (endsAt <= startsAt) {
      throw new Error("Invalid end date")
    }

    // this.props
  }

  get customer() {
    return this.props.customer
  }
  get startAt() {
    return this.props.startsAt
  }
  get endAt() {
    return this.props.endsAt
  }
}
