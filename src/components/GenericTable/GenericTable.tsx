import { RowData, TableProps } from "@/models";
import {
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Typography,
	Stack,
	Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { APMButton } from "../Buttons";
import { DeleteButton, EditButton } from ".";
import { t } from "i18next";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { useContext, useEffect, useState } from "react";
import { DrawerFormContext, DrawerFormContextType } from "@/contexts/drawerFormContext";
import { SnackAlert } from "../SnackAlert";
import { useSnackAlert } from "@/hooks";

export default function GenericTable<T>({
	columns,
	title,
	addTitle,
	actionForGetAll,
	actionForDelete,
	createForm,
	editForm,
}: TableProps<T>) {
	const { rows, setRows, setReload, reload, setRowForEdit, snackAlert } = useContext(
		GenericTableContext
	) as GenericTableContextType;

	const { openDrawer } = useContext(DrawerFormContext) as DrawerFormContextType;
	const [formMode, setFormMode] = useState<"create" | "edit">("create");

	const handleOnDelete = (id: number) => {
		if (confirm("borrar?")) {
			actionForDelete(id)
				.then(() => {
					setReload(true);
					snackAlert.showDeletedOk();
				})
				.catch((err) => {
					snackAlert.showDeletedError();
				});
		}
	};

	useEffect(() => {
		actionForGetAll()
			.then((result) => {
				setRows(result.data as RowData[]);
				setReload(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [reload]);

	const handleOnEdit = (data: RowData) => {
		setFormMode("edit");
		setRowForEdit(data);
		openDrawer();
	};

	const handleOnAdd = () => {
		setFormMode("create");
		openDrawer();
	};

	return (
		<>
			<Paper elevation={2}>
				<Typography sx={{ display: "inline-flex", width: "85%" }} p={3} variant="h6">
					{title}
				</Typography>
				<APMButton startIcon={<AddIcon />} onClick={() => handleOnAdd()}>
					{addTitle}
				</APMButton>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										sx={{ borderBottom: "1px solid rgba(189, 200, 240, 0.082)" }}
										key={column.id}
										align={column.align || "left"}
									>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.length > 0 ? (
								rows.map((row) => (
									<TableRow hover key={row.id} sx={{ height: "75px" }}>
										{columns.map((column) => (
											<TableCell
												sx={{ borderBottom: "1px solid rgba(189, 200, 240, 0.082)" }}
												key={column.id}
												align={column.align || "left"}
											>
												{column.id == "action" ? (
													<Stack justifyContent={"center"} direction="row" spacing={1}>
														<EditButton onClick={() => handleOnEdit(row)} />
														<DeleteButton onClick={() => handleOnDelete(row.id)} />
													</Stack>
												) : (
													row[column.id]
												)}
											</TableCell>
										))}
									</TableRow>
								))
							) : (
								<TableRow hover>
									<TableCell sx={{ borderBottom: "1px solid rgba(189, 200, 240, 0.082)" }} align={"center"} colSpan={6}>
										{t("noData")}
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
			{formMode == "create" ? createForm : editForm}

			<SnackAlert isOpen={snackAlert.open} onClose={snackAlert.closeSnackAlert} message={snackAlert.message} />
		</>
	);
}
