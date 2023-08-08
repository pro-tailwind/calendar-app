import { today, getDayOfWeek, getLocalTimeZone } from '@internationalized/date'

const localTimezone = getLocalTimeZone()
const currentDay = today(localTimezone)

// Mocking calendar dates
export function makeCalendarAvailabilities(weeks, options) {
  const weekDay = getDayOfWeek(currentDay, 'en-US')
  const offset = 1 - weekDay
  const nextMonday =
    weekDay === 1
      ? currentDay.add({ days: offset })
      : currentDay.add({ days: offset }).add({ weeks: 1 })

  const output = []

  if (options?.includeToday) {
    output.push({ startTime: currentDay.toString(), endTime: currentDay.toString() })
  }

  let i = 0
  while (i < weeks) {
    const weekOffset = i * 7
    output.push(
      ...[0, 2, 3].map((d) => ({
        startTime: nextMonday.add({ days: weekOffset + d }).toString(),
        endTime: nextMonday.add({ days: weekOffset + d }).toString(),
      }))
    )
    i++
  }
  return output
}
