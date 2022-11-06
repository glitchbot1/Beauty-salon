import { API_PATH } from "../constants";
import { HttpService } from "../services/HttpServices";
import { StaffDto } from "../common/interfaces/EmployeesInterfaces"



class EmployeesApi extends HttpService {
    constructor() {
        super(`${API_PATH}/staff`);
    }
    getAll(): Promise<StaffDto[]> {
        return this.get('');
    }
}
export default new EmployeesApi();