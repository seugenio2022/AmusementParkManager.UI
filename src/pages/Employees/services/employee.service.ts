import axios from "axios";
import { Employee } from "../models";

class EmployeeService {
	ENV = "http://localhost:8080"
	url = `${this.ENV}/employee`

	create(employee: Employee) {
		return axios.post(`${this.url}/create`, employee)
	}
	update(employee: Employee) {
		return axios.put(`${this.url}/edit`, employee)
	}
	delete(id: number) {
		return axios.delete(`${this.url}/delete?id=${id}`)
	}

	getAll() {
		return axios.get<Employee[]>(`${this.url}/getAll`)
	}
}

export const employeeService = new EmployeeService()