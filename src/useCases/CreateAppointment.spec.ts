import { CreateAppointment } from "./CreateAppointment";
import { Appointment } from "./../entities/Appointment";
import { getFutureDate } from "./../Utils/get-future-date"

describe("Create Appointment", () => {
  test("it should be able to create an appointment", () => {
    const createAppointment = new CreateAppointment();

    const startsAt = getFutureDate("2022-08-10")
    const endsAt = getFutureDate("2022-08-11")

    expect(
      createAppointment.execute({
        customer: "John Doe",
        startsAt,
        endsAt
      })
    ).resolves.toBeInstanceOf(Appointment);
  });
});
