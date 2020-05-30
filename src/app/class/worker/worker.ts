export class Worker {
    public id: number;
    public firstName: string;
    public surName: string;
    public email: string;
    private username: string;
    private password: string;
    public phoneNumber: string;
    public specialization: string;
    public workingHours: string;
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
}