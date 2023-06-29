export type Schedule = {
	id: number,
	hourInterval: HourInterval
}
type HourInterval = {
	initialHour: number
	finishHour: number
}