export class Worker {
    private _id: number;
    private _firstName: string;
    private _surName: string;
    private _email: string;
    private _username: string;
    private _password: string;
    private _phoneNumber: string;
    private _specialization: string;
    private _workingHours: string;

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
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }

    public get surName(): string {
        return this._surName;
    }
    public set surName(value: string) {
        this._surName = value;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    public get phoneNumber(): string {
        return this._phoneNumber;
    }
    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    public get specialization(): string {
        return this._specialization;
    }
    public set specialization(value: string) {
        this._specialization = value;
    }

    public get workingHours(): string {
        return this._workingHours;
    }
    public set workingHours(value: string) {
        this._workingHours = value;
    }
}