import { format, parseISO } from "date-fns";

export function convertDate(date: string, displayFormat: string) {
  return format(new Date(parseISO(date)), displayFormat);
}
