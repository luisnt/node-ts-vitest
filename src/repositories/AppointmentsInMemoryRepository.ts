import { AppointmentProps } from "../contracts/entities/AppointmentProps"
import { AppointmentsRepository } from "../contracts/repositories/AppointmentRepository"

export class AppointmentsInMemoryRepository implements AppointmentsRepository {
  public items: AppointmentProps[] = []
  async create(appointment: AppointmentProps): Promise<void> {
    this.items.push(appointment)
  }
}
