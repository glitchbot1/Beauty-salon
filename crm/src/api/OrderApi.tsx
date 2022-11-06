import { API_PATH } from "../constants";
import { HttpService } from "../services/HttpServices";
import { OrderDto } from "../common/interfaces/OrderInterfaces"

class OrderApi extends HttpService{
    constructor(){
        super(`${API_PATH}/orders`)
    }
    getAll(): Promise<OrderDto[]>{
        return this.get('');
    }
    create(){
        return this.post('', {});
    }
    closeOrder(orderId:number){
        // return this.patch(`close/${orderId}`);
    }
}
export default new  OrderApi();