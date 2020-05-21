export class Worker {
    private id: number;
    private firstName: string;
    private surName: string;
    private email: string;
    private username: string;
    private password: string;
    private phoneNumber: string;
    private specialization: string;
    private workingHours: string;
    constructor(id: number, firstName: string, surName: string, email: string, username: string, password: string, phoneNumber: string, specialization: string, workingHours: string) {
        this.id = id;
        this.firstName = firstName;
        this.surName = surName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.specialization = specialization;
        this.workingHours = workingHours;
    }
    public getId():number {
        return this.id;
    }
    public getFirstName():string {
        return this.firstName;
    }
    public getSurname():string {
        return this.surName;
    }
    public getEmail():string {
        return this.email;
    }
    public getNumber():string {
        return this.phoneNumber;
    }
    public getSpecialization():string {
        return this.specialization;
    }
    public getWorkingHour():string {
        return this.workingHours;
    }
}