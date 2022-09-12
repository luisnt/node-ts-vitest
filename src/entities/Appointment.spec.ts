import { Appointment } from "./Appointment"
import { dates } from "./../Utils/Dates"
import { getFutureDate } from "./../Utils/get-future-date"

test("create an appointment", () => {
  const startsAt = getFutureDate("2022-08-10")
  const endsAt = getFutureDate("2022-08-11")

  const appointment = new Appointment({
    customer: "John Cool", // John Doe
    startsAt,
    endsAt
  })

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual("John Cool")
})

test("Can't create an appointment with end date before start date", () => {
  const startsAt = getFutureDate("2022-08-10")
  const endsAt = getFutureDate("2022-08-09")

  expect(() => {
    return new Appointment({
      customer: "John Cool", // John Doe
      startsAt,
      endsAt
    })
  }).toThrow()
})

test("Can't create an appointment with start date before now", () => {
  const startsAt = dates.reset.days(-1).date
  const endsAt = dates.reset.days(3).date
  expect(() => {
    return new Appointment({
      customer: "John Cool", // John Doe
      startsAt,
      endsAt
    })
  }).toThrow()
})
