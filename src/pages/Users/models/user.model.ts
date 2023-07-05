
export type User = {
	id?: number,
	userName: string,
	password: string
	role: string
}

export const emptyUser: User = {
	userName: "",
	password: "",
	role: ""
};