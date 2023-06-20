import { SnackAlertType, useSnackAlert } from "@/hooks";
import { RowData } from "@/models";
import { createContext, useState } from "react";

export type GenericTableContextType = {
	rows: RowData[];
	setRows: (newRows: RowData[]) => void;
	reload: boolean;
	setReload: (reload: boolean) => void;
	rowForEdit: RowData;
	setRowForEdit: (row: RowData) => void;
	snackAlert: SnackAlertType;
};

export const GenericTableContext = createContext<GenericTableContextType | null>(null);

function GenericTableContextProvider({ children }: any) {
	const [rows, setAllRows] = useState<RowData[]>([]);
	const [reload, setReload] = useState<boolean>(false);
	const [rowForEdit, setRowForEdit] = useState<RowData>({});
	const snackAlert = useSnackAlert();

	const setRows = (rows: RowData[]) => {
		setAllRows(rows);
	};

	return (
		<GenericTableContext.Provider
			value={{
				rows,
				setRows,
				setReload,
				reload,
				rowForEdit,
				setRowForEdit,
				snackAlert,
			}}
		>
			{children}
		</GenericTableContext.Provider>
	);
}
export default GenericTableContextProvider;
