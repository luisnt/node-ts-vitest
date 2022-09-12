import { Appointment } from "./Appointment";
import { dates } from "./../Utils/Dates"

test("create an appointment", () => {
  const startsAt = dates.years(1).date
  const endsAt = dates.days(1).date

  const appointment = new Appointment({
    customer: "John Cool", // John Doe
    startsAt,
    endsAt
  })

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual("John Cool")
})

test.skip("Can't create an appointment with end date before start date", () => {
  dates.years = 1
  const startsAt = dates.date
  dates.days = 1
  const endsAt = dates.date

  expect(() => {
    return new Appointment({
      customer: "John Cool", // John Doe
      startsAt,
      endsAt
    })
  }).toThrow()
})

test.skip("Can't create an appointment with start date before now", () => {
  dates.years = 1
  const startsAt = dates.date
  dates.days = 1
  const endsAt = dates.date

  expect(() => {
    return new Appointment({
      customer: "John Cool", // John Doe
      startsAt,
      endsAt
    })
  }).toThrow()
})
