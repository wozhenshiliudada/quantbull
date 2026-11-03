import assert from 'node:assert/strict'
import { test } from 'node:test'

import { getYesterdayString } from './accessControl.js'

for (const { currentTime, availableDate } of [
  { currentTime: '2026-11-03T12:00:00Z', availableDate: '2026-11-02' },
  { currentTime: '2026-01-01T12:00:00Z', availableDate: '2025-12-31' },
  { currentTime: '2024-03-01T12:00:00Z', availableDate: '2024-02-29' },
]) {
  test(`daily reports default to ${availableDate} at ${currentTime}`, ({ mock }) => {
    mock.timers.enable({ apis: ['Date'], now: Date.parse(currentTime) })

    assert.equal(getYesterdayString(), availableDate)
  })
}
