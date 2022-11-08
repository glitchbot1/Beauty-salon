export interface OrderDto {
  id: number;
  customer: userCustomer;
  visitDate: string;
  status: string;
  master: useMasters;
  service:useServices,
}
interface userCustomer {
  id:number;
  firstName: string;
  patronymic: string;
  surName: string;
  fullName: string;
  phone: string;
}
interface useMasters {
  id:number;
  firstName: string;
  patronymic: string;
  surName: string;
  fullName: string;
  position: string;
}
interface useServices {
  id:number,
  description: string;
  name: string;
  price: number;
  photo: string;
}
