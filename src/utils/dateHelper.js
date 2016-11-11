import moment from 'moment';

export function getFormattedDate(date, parseDateTime = false) {
  if(parseDateTime) {
    date = new moment(date);
  }
  return date.format('h:mm a [-] D MMM YYYY');
}
