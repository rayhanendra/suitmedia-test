import moment from "moment";
moment.locale("id");

export function momentFormat(date, format) {
  return moment(date).format(format);
}
