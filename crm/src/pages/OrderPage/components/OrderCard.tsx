import React from "react";
import { OrderDto } from "../../../common/interfaces/OrderInterfaces";
interface OrderCardProps {
  order: OrderDto;
}

export function OrderCard(props: OrderCardProps) {
  const { createdDate,visitDate, customer } = props.order;

  return (
    <div className="order-card">
      {/* <div className="employee-card__date">{createdDate}</div> */}
      <div className="employee-card__visit-date">{visitDate}</div>
      {/* <div className="employee-card__visit-date">{customer}</div> */}
         {customer.customer.firstName}
         console.log({customer.customer.firstName});
    </div>
  );
}
