import { Props } from "@/models";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

export default function GenericTable({ rows, columns }: Props) {
	return (
		<TableContainer>
			<Table sx={{ minWidth: 650 }}>
				<TableHead>
					<TableRow>
						{columns.map((column) => (
							<TableCell key={column.id} align={column.align || "left"}>
								{column.label}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							{columns.map((column) => (
								<TableCell key={column.id} align={column.align || "left"}>
									{row[column.id]}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
