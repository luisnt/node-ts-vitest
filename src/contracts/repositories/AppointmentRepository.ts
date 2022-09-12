import { AppointmentProps } from "../entities/AppointmentProps"

export interface AppointmentsRepository {
  create(props: AppointmentProps): Promise<void>
}
