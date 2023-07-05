
export type User = {
	id?: number,
	userName: string,
	password: string
}

export const emptyUser: User = {
	userName: "",
	password: ""
};