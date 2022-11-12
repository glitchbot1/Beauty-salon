
// import { OrderCard } from './components/OrderCard';

import {OrderDto } from "../../common/interfaces/OrderInterfaces";
import styles from  "./module/OrderPage.module.css";
import { Button, Checkbox, Form, Input, Select, DatePicker, Table, TableColumnProps,Switch,Modal  } from 'antd';
import React, { useEffect, useState } from 'react';
import { OrderApi } from "../../api";
import {OrderStatus} from "../../common/enums/OrderStatus"
import { useForm } from "antd/lib/form/Form";

const {confirm} = Modal;
interface OrderFromProps{
    order?:OrderDto;
    onCreate:(data:any) => void;
    onEdit:(data:any) => void;
}
function OrderForm({order, onCreate,onEdit}: OrderFromProps){
    const isCreate = !order;
    const [form] = useForm();
    const handleSubmit = (data:any) =>{
        if(isCreate){
            onCreate(data);
        }
        else{
            onEdit(data);
        }
    };
    useEffect(()=>{
        form.setFieldsValue({
            name: order?.customer?.firstName,
            phone: order?.customer?.phone,
        })
    },[order])
    return(
            <Form form={form} onFinish={handleSubmit}>
                <Form.Item name="name"  label="Имя клиента">
                    <Input/>
                </Form.Item>
                <Form.Item name="phone" label="Номер телефона" required>
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
                <Form.Item>
                    <Button type='primary' onClick={() => form.submit}>{isCreate ? 'Добавить' : 'Сохранить'}</Button>
                </Form.Item>
            </Form>
    )
}


export function OrderPage(){


  
    
    const [orders, setOrders] = useState<OrderDto[]>([]);
    const [status, setStatus] = useState(OrderStatus.Opened);
    const[editableOrder, setEditableOrder] = useState();
    const removeOrder = (orderId:number) =>{
        confirm({
            title:'Удалить?',
            onOk: ()=>{
                OrderApi.remove(orderId).then(()=> setOrders(orders.filter(o => o.id !== orderId))
                    );
            }
        })
      
    }
    const create = (data:any) => {
        OrderApi.create(data).then((createOrder) => setOrders(orders.concat(createOrder)))
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
                return row.customer ? `${row.customer.firstName} ${row.customer.surName}` : ''
            }
        },
        {
            
            title: 'Мастер',
            key:'master',
            render:(row:OrderDto)=>{
                return `${row.master?.fullName} `
            }
        },
        {
            title: 'Услуга',
            key:'master',
            render:(row:OrderDto)=>{
                return `${row.service?.name} `
            }
        },
        {
            title:'',
            key:'actions',
            render:(row) =>(
                <> 
                     <button onClick={() => setEditableOrder(row)}>Редактировать</button>
             <button onClick={() => removeOrder(row.id)}>Удалить</button>
             </>
        )
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

            <OrderForm order={editableOrder} onCreate={create} onEdit={() => {}} />
            
        </div>
    );
}