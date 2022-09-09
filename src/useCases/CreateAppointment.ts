import { Appointment } from "../entities/Appointment"
import { AppointmentInterface } from "../interfaces/AppointmentInterface"

interface request extends AppointmentInterface {}

type response = Appointment

export class CreateAppointment {
  async execute({ customer, startsAt, endsAt }: request): Promise<response> {
    const appointment = new Appointment({
      customer,
      startsAt,
      endsAt
    })
    return appointment
  }
}
