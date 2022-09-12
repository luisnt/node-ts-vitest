import { Appointment } from "../entities/Appointment"
import {
  AppointmentRequest,
  AppointmentResponse
} from "../contracts/useCases/AppointmentData"

export class CreateAppointment {
  async execute({
    customer,
    startsAt,
    endsAt
  }: AppointmentRequest): Promise<AppointmentResponse> {
    const appointment = new Appointment({
      customer,
      startsAt,
      endsAt
    })
    return appointment
  }
}
