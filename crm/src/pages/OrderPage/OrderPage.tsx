
// import { OrderCard } from './components/OrderCard';

import {OrderDto } from "../../common/interfaces/OrderInterfaces";
import styles from  "./module/OrderPage.module.css";
import { Button, Checkbox, Form, Input, Select, DatePicker, Table, TableColumnProps,Switch,Modal  } from 'antd';
import React, { useEffect, useState } from 'react';
import { OrderApi } from "../../api";
import {OrderStatus} from "../../common/enums/OrderStatus"

const {confirm} = Modal;

function OrderForm(){
    return(
            <Form>
                <Form.Item name="name"  label="Имя клиента">
                    <Input/>
                </Form.Item>
                <Form.Item name="phone" label="Номер телефона">
                    <Input/>
                </Form.Item>
                <Form.Item name="masterId" label="Мастер" >
                    <Select>
                        <Select.Option>Имя</Select.Option>
                    </Select>
                
                </Form.Item>
                <Form.Item name="servicesId" label="Услуга" >
                    <Select>
                        <Select.Option>Услуга</Select.Option>
                    </Select>
                
                </Form.Item>
                <Form.Item name="visitDate" label="Дата визита" >
                    <DatePicker />
                </Form.Item>
            </Form>
    )
}


export function OrderPage(){


  
    
    const [orders, setOrders] = useState<OrderDto[]>([]);
    const [status, setStatus] = useState(OrderStatus.Opened);
    const removeOrder = (orderId:number) =>{
        confirm({
            title:'Удалить?',
            onOk: ()=>{
                OrderApi.remove(orderId).then(()=> setOrders(orders.filter(o => o.id !== orderId))
                    );
            }
        })
      
    }
    const columns:TableColumnProps<OrderDto>[] =[
        {
            title:'Дата визита',
            dataIndex: 'visitDate',
            key:'visitDate',
    
        },
        {
            title: 'Клиент',
    
            key:'customer',
            render:(row:OrderDto)=>{
                return `${row.customer.firstName} ${row.customer.surName}`
            }
        },
        {
            title: 'Мастер',
            key:'master',
            render:(row:OrderDto)=>{
                return `${row.master.fullName} `
            }
        },
        {
            title: 'Услуга',
            key:'master',
            render:(row:OrderDto)=>{
                return `${row.service.name} `
            }
        },
        {
            title:'',
            key:'actions',
            render:(row) => <button onClick={() => removeOrder(row.id)}>Удалить</button>
        }
    ];



    useEffect(()=>{
        OrderApi.getAll(status).then(setOrders);
    },[status])
  
    return(
        <div className={styles.order__card}>

            <h1>Записи на услугу</h1>
                <Switch checked={status === OrderStatus.Opened }
                    onChange={(checked)=> setStatus(checked ? OrderStatus.Opened : OrderStatus.Closed)} />
            <Table columns={columns} dataSource={orders} />

            <OrderForm />
            {/* {orders.map(order => 
                <OrderCard 
                    key={order.id} 
                    order={order}
                    onClick={()=>console.log('work')}
                     />
                    

            )
            } */}
        </div>
    );
}