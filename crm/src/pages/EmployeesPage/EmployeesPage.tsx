import React, { useMemo, useEffect, useState } from 'react';
import { EmployeesApi } from '../../api';
import { StaffDto } from "../../common/interfaces/EmployeesInterfaces"
import { EmployeeCard } from './components/EmployeeCard';

export function EmployeesPage() {
    const [employees, setEmployees] = useState<StaffDto[]>([]);

    useEffect(() => {
        EmployeesApi.getAll().then(setEmployees);
    }, []);
    
    return (
        <>
            <h1>Сотрудники</h1>

            {employees.map(employee => 
                <EmployeeCard 
                    key={employee.id} 
                    employee={employee} 
                     />
            )}
        </>
    );
}