import { AppointmentProps } from "../contracts/entities/AppointmentProps"

export class Appointment {
  constructor(private props: AppointmentProps) {
    const { startsAt, endsAt } = props

    if (startsAt <= new Date()) {
      throw new Error("Invalid start date")
    }

    if (endsAt <= startsAt) {
      throw new Error("Invalid end date")
    }
  }

  get customer() {
    return this.props.customer
  }
  get startsAt() {
    return this.props.startsAt
  }
  get endsAt() {
    return this.props.endsAt
  }
}
