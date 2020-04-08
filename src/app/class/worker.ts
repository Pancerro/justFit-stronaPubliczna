export class Worker {
    id:number;
    firstName:string;
    surName:string;
    email:string;
    username:string;
    password:string;
    phoneNumber:string;
    specialization:string;
    workingHours:string;
    constructor(id: number,firstName: string,surName: string,email: string,username: string,password: string,phoneNumber: string,specialization: string,workingHours: string){
        this.id=id;
        this.firstName=firstName;
        this.surName=surName;
        this.email=email;
        this.username=username;
        this.password=password;
        this.phoneNumber=phoneNumber;
        this.specialization=specialization;
        this.workingHours=workingHours;
    }
}
