/**
 * Helper for working with dates
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
import moment from "moment"

const localOffset = moment().utcOffset() * 60

const getDateTime = (unixTimeStamp, offset) => {
  const amountToSubtract = localOffset - offset
  const convertedTimeStamp = unixTimeStamp - amountToSubtract
  return moment.unix(convertedTimeStamp)
}

// Functions to Export
const formatDateFromUtcTimestamp = (unixTimeStamp, offset) => {
  const dt = getDateTime(unixTimeStamp, offset)
  return dt.format()
}

const formatLocalDateFromTimestamp = (unixTimeStamp, offset) => {
  const dt = getDateTime(unixTimeStamp, offset)
  return dt.format("MM/DD/YYYY")
}

const formatLocalTimeFromTimestamp = (unixTimeStamp, offset) => {
  const dt = getDateTime(unixTimeStamp, offset)
  return dt.format("hh:mm:ss A")
}


// Define Library Export
const DateHelper = {
  formatDateFromUtcTimestamp,
  formatLocalDateFromTimestamp,
  formatLocalTimeFromTimestamp
}

// Default export
export default DateHelper
