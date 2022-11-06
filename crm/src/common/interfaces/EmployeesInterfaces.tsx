export interface StaffDto extends FullName {
    id: number;
    fullName: string;
    position: string;
    startWorkDate: string;
    photo: string;
    role: Role;
}
 enum Role {
    Admin = 'admin',
    Teacher = 'teacher'
}

interface FullName {
    firstName: string;
    patronymic: string;
    surName: string;
}