import { Chip } from "@mui/material";

type ChipScheduleType = {
	size: "small" | "medium";
	initialTime?: number;
	endTime?: number;
	handleDelete: any;
};

function ChipSchedule({ size, initialTime, endTime, handleDelete }: ChipScheduleType) {
	return (
		<Chip onDelete={() => handleDelete()} size={size} label={`${initialTime}hs - ${endTime}hs`} variant="filled" />
	);
}
export default ChipSchedule;
