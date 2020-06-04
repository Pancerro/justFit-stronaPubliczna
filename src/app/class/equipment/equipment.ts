export class Equipment {
    private _availability: boolean;
    private _broken: boolean;
    private _classification: string;
    private _equipmentName: string;
    private _id: number;
    private _specification: string;

    constructor(availability: boolean, broken: boolean, classification: string, equipmentName: string, id: number, specification: string) {
        this.availability = availability;
        this.broken = broken;
        this.classification = classification;
        this.equipmentName = equipmentName;
        this.id = id;
        this.specification = specification;
    }
    public get availability(): boolean {
        return this._availability;
    }
    public set availability(value: boolean) {
        this._availability = value;
    }

    public get broken(): boolean {
        return this._broken;
    }
    public set broken(value: boolean) {
        this._broken = value;
    }

    public get classification(): string {
        return this._classification;
    }
    public set classification(value: string) {
        this._classification = value;
    }

    public get equipmentName(): string {
        return this._equipmentName;
    }
    public set equipmentName(value: string) {
        this._equipmentName = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get specification(): string {
        return this._specification;
    }
    public set specification(value: string) {
        this._specification = value;
    }
}
