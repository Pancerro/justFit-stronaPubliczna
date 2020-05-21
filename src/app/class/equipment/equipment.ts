export class Equipment {
    public availability: boolean;
    public broken: boolean;
    public classification:string;
    public equipmentName: string;
    public id:number;
    public specification: string;
    constructor(availability:boolean,broken:boolean,classification:string,equipmentName:string,id:number,specification:string){
        this.availability=availability;
        this.broken=broken;
        this.classification=classification;
        this.equipmentName=equipmentName;
        this.id=id;
        this.specification=specification;
    }

}
