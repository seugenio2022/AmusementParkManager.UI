import { AxiosResponse } from "axios";

export interface TableColumn {
	id: string;
	label: string;
	align?: "left" | "right" | "center";
}

export interface RowData {
	[key: string]: any;
}

export interface TableProps<T> {
	columns: TableColumn[];
	title: string;
	onAdd: (event: React.KeyboardEvent | React.MouseEvent) => void
	addTitle: string
	actionForGetAll: any//() => Promise<AxiosResponse<T[], any>>
	actionForDelete: (id: number) => Promise<AxiosResponse<any, any>>
	createForm?: any
	editForm: any,
	messageDelete?: string
}