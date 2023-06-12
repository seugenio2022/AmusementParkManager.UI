export interface TableColumn {
	id: string;
	label: string;
	align?: "left" | "right";
}

export interface RowData {
	[key: string]: any;
}

export interface Props {
	rows: RowData[];
	columns: TableColumn[];
}