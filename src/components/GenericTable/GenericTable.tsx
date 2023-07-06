import { RowData, TableColumn, TableProps } from "@/models";
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
	Chip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { APMButton } from "../Buttons";
import { ConfirmDelete, DeleteButton, EditButton } from ".";
import { t } from "i18next";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { useContext, useEffect, useState } from "react";
import { DrawerFormContext, DrawerFormContextType } from "@/contexts/drawerFormContext";
import { SnackAlert } from "../SnackAlert";
import useConfirmDelete from "@/hooks/useConfirmDelete.hook";

export default function GenericTable<T>({
	columns,
	title,
	addTitle,
	actionForGetAll,
	actionForDelete,
	messageDelete,
	createForm,
	editForm,
}: TableProps<T>) {
	const { rows, setRows, setReload, reload, setRowForEdit, snackAlert } = useContext(
		GenericTableContext
	) as GenericTableContextType;

	const { openDrawer } = useContext(DrawerFormContext) as DrawerFormContextType;
	const [formMode, setFormMode] = useState<"create" | "edit">("create");
	const confirmDelete = useConfirmDelete();

	const handleOnDelete = (id: number) => {
		confirmDelete.open();
		confirmDelete.setIdToDelete(id);
	};
	const onDelete = () => {
		actionForDelete(confirmDelete.idToDelete)
			.then(() => {
				setReload(true);
				snackAlert.showDeletedOk();
			})
			.catch((err) => {
				snackAlert.showDeletedError();
			});
	};
	useEffect(() => {
		actionForGetAll()
			.then((result: any) => {
				setRows(result.data as RowData[]);
				setReload(false);
			})
			.catch((err: any) => {
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
	const renderRow = (row: RowData, col: TableColumn) => {
		if (Array.isArray(row[col.id]))
			return row[col.id].map((item: any, key: number) => (
				<Chip key={key} sx={{ mr: 1 }} size="small" label={item} variant="filled" />
			));
		if (col.id == "action")
			return (
				<Stack justifyContent={"center"} direction="row" spacing={1}>
					<EditButton onClick={() => handleOnEdit(row)} />
					<DeleteButton onClick={() => handleOnDelete(row.id)} />
				</Stack>
			);
		return row[col.id];
	};
	return (
		<>
			<Paper elevation={1} sx={{ borderRadius: "10px", boxShadow: "none" }}>
				<Typography sx={{ display: "inline-flex", width: "85%" }} p={3} variant="h6">
					{title}
				</Typography>
				{createForm ? (
					<APMButton startIcon={<AddIcon />} onClick={() => handleOnAdd()}>
						{addTitle}
					</APMButton>
				) : (
					""
				)}

				<TableContainer>
					<Table>
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
							{rows.length > 0 ? (
								rows.map((row) => (
									<TableRow
										hover
										key={row.id}
										sx={{ borderBottomWidth: 2, "&:last-child td, &:last-child th": { border: 0 }, height: "75px" }}
									>
										{columns.map((column) => (
											<TableCell key={column.id} align={column.align || "left"}>
												{renderRow(row, column)}
											</TableCell>
										))}
									</TableRow>
								))
							) : (
								<TableRow hover>
									<TableCell align={"center"} colSpan={6}>
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
			<ConfirmDelete
				handleConfirm={onDelete}
				isOpen={confirmDelete.isOpen}
				open={confirmDelete.open}
				close={confirmDelete.close}
				messageDelete={messageDelete ?? ""}
			/>
		</>
	);
}
