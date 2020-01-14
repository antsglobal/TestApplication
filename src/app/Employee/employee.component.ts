import {Component} from "@angular/core"

@Component({
    selector:'my-emp',
    templateUrl:'./employee.component.html',
    styleUrls:['./employee.component.css']
})

export class EmployeeComponent{
    firstName:String = "Prakash";
    lastName:string = "Bhol";
    age:number = 25;
    gender:string = "Male";

    name:string = "Prakash";

    showDetails:boolean = false;

    getFullName(): String{
        return this.firstName+" "+this.lastName;
    }
    
    toggleDetails(): void{
        this.showDetails = !this.showDetails;
    }

}