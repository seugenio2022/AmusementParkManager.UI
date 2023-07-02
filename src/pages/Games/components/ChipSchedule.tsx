import { Chip } from "@mui/material";

type ChipScheduleType = {
	size: "small" | "medium";
	initialTime?: number;
	endTime?: number;
};

function ChipSchedule({ size, initialTime, endTime }: ChipScheduleType) {
	return <Chip size={size} label={`${initialTime}hs - ${endTime}hs`} variant="filled" />;
}
export default ChipSchedule;
