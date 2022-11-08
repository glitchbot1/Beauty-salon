import { API_PATH } from "../constants";
import { HttpService } from "../services/HttpServices";
import { OrderDto } from "../common/interfaces/OrderInterfaces"
import {OrderStatus} from "../common/enums/OrderStatus"
class OrderApi extends HttpService{
    constructor(){
        super(`${API_PATH}/orders`)
    }
    
    getAll(status:OrderStatus){
        return this.get(`?status=${status}`);
    }
    remove(orderId:number){
        return this.delete(`${orderId}`);
    }
    create(){
        return this.post('', {});
    }
    closeOrder(orderId:number){
        // return this.patch(`close/${orderId}`);
    }
}
export default new  OrderApi();