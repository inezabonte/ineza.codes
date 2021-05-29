import { format, parseISO } from "date-fns";

export function convertDate(date, displayFormat) {
	return format(new Date(parseISO(date)), displayFormat);
}
