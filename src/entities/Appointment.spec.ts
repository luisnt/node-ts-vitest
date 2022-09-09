import { Appointment } from "./Appointment";

test("create an appointment", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() + 1);
  endsAt.setDate(endsAt.getDate() + 2);

  const appointment = new Appointment({
    customer: "John Cool", // John Doe
    startsAt,
    endsAt
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("John Cool");
});

test("Can't create an appointment with end date before start date", () => {
  const startsAt = new Date();
  const endsAt = new Date();
  startsAt.setDate(startsAt.getDate() + 2);
  endsAt.setDate(endsAt.getDate() + 1);

  expect(() => {
    return new Appointment({
      customer: "John Cool", // John Doe
      startsAt,
      endsAt
    });
  }).toThrow();
});

test("Can't create an appointment with start date before now", () => {
  const startsAt = new Date();
  const endsAt = new Date();
  endsAt.setDate(startsAt.getDate() - 1);

  expect(() => {
    return new Appointment({
      customer: "John Cool", // John Doe
      startsAt,
      endsAt
    });
  }).toThrow();
});
