import { Paper, Stack, TextField, Typography } from "@mui/material";
type PaperReportType = {
	title: string;
	data: string | number;
	description: string;
	children: React.ReactNode;
};

function PaperReport({ title, data, description, children }: PaperReportType) {
	return (
		<Paper
			sx={{
				p: 2,
				display: "flex",
				flexDirection: "column",
				height: 400,
				textAlign: "center",
			}}
		>
			<Typography height={"80px"} component="h2" variant="h6" color="primary" gutterBottom>
				{title}
			</Typography>
			<Typography component="p" variant="h4" pb={2}>
				{data}
			</Typography>
			<Typography height={"80px"} color="text.secondary">
				{description}
			</Typography>
			<Stack direction={"column"}>{children}</Stack>
		</Paper>
	);
}
export default PaperReport;
