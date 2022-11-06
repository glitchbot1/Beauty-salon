export interface OrderDto {
  id: number;
  createdDate: string;
  customer: userCustomer;
  visitDate: string;
  status: string;
  // master:string,
  // services:string,
}
interface userCustomer {
  customer: {
    firstName: string;
    patronymic: string;
    surName: string;
    fullName: string;
    phone: string;
  };
}
