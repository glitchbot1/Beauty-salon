import { useEffect, useState } from "react"
import { OrderCard } from './components/OrderCard';
import { OrderApi } from '../../api';
import {OrderDto } from "../../common/interfaces/OrderInterfaces";

export function OrderPage(){
    const [orders, setOrders] = useState<OrderDto[]>([]);
    useEffect(() =>{
        OrderApi.getAll().then(setOrders);
    }, [])
    return(
        <div>
            <h1>Записи</h1>
            {orders.map(order => 
                <OrderCard 
                    key={order.id} 
                    order={order}
                     
                     />
            )}
        </div>
    );
}