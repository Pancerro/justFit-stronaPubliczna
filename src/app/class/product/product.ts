export class Product {
    private _active: boolean;
    private _avabileClasses: string;
    private _contract: boolean;
    private _description: string;
    private _durationInMonths: number;
    private _id: number;
    private _name: string;
    private _price: number;


    constructor(active: boolean, avabileClasses: string, contract: boolean, description: string, durationInMonths: number, id: number, name: string, price: number) {
        this.active = active;
        this.avabileClasses = avabileClasses;
        this.contract = contract;
        this.description = description;
        this.durationInMonths = durationInMonths;
        this.id = id;
        this.name = name;
        this.price = price;
    }
    public get active(): boolean {
        return this._active;
    }
    public set active(value: boolean) {
        this._active = value;
    }

    public get avabileClasses(): string {
        return this._avabileClasses;
    }
    public set avabileClasses(value: string) {
        this._avabileClasses = value;
    }

    public get contract(): boolean {
        return this._contract;
    }
    public set contract(value: boolean) {
        this._contract = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public get durationInMonths(): number {
        return this._durationInMonths;
    }
    public set durationInMonths(value: number) {
        this._durationInMonths = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
}
