
import {Component} from '@angular/core'

@Component({
    selector:'emp-list',
    templateUrl:'./employeeList.component.html',
    styleUrls:['./employeeList.component.css']
})

export class EmployeeListComponent
{
    employees: any[];
    constructor(){
       this.employees =[
            {firstName:'Prakash',lastName:'Bhol',age:26,gender:'Male',dob:'1992/10/10'},
            {firstName:'Anoop',lastName:'Kumar',age:25,gender:'Male',dob:'1993/10/10'},
            {firstName:'Laxmi',lastName:'Rai',age:28,gender:'Female',dob:'1990/10/10'},
            {firstName:'Vijay',lastName:'Reddy',age:29,gender:'Male',dob:'1989/10/10'},
            {firstName:'Sunita',lastName:'Roy',age:24,gender:'Female',dob:'1996/10/10'}
         ]
    }

    getEmployeeList(): void {
        this.employees =[
            {firstName:'Prakash',lastName:'Bhol',age:26,gender:'Male',dob:'1992/10/10'},
            {firstName:'Anoop',lastName:'Kumar',age:25,gender:'Male',dob:'1993/10/10'},
            {firstName:'Laxmi',lastName:'Rai',age:28,gender:'Female',dob:'1990/10/10'},
            {firstName:'Vijay',lastName:'Reddy',age:29,gender:'Male',dob:'1987/10/10'},
            {firstName:'Sunita',lastName:'Roy',age:24,gender:'Female',dob:'1996/10/10'},
            {firstName:'Sudhakaer',lastName:'Kumar',age:28,gender:'Male',dob:'1990/10/10'}
         ]
    }

    trackByEmpName(index:number,employee:any): string{
        return employee.firstName;
    }
   
}