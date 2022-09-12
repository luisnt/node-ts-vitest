import { AppointmentProps } from "../contracts/entities/AppointmentProps"
import { AppointmentsRepository } from "../contracts/repositories/AppointmentRepository"

export class AppointmentsInMemoryRepository implements AppointmentsRepository {
  async create(appointment: AppointmentProps): Promise<void> {}
  async save(appointment: AppointmentProps): Promise<void> {}
}
