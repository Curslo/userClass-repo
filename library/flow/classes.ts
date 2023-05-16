import { Field, Defination } from "./types";

//Create Class Flow
export class Flow{
    //steps will use the type Step[] as defined in types.d.ts
    steps : Step[];
    //Define object constructor
    constructor(name : string, tableName : string)
    {
        this.steps = this.buildSteps()
    }
    //Define the buidSteps() method.
    //The method returns an array of objects
    buildSteps(): Step[] {
        return [];
    }
}

//Create class Step
export class Step {
    title: string;
    tableName: string;
    populate?: boolean;
    isMultiple?: boolean;
    fields: Field[];
    definations: Defination[];
    constructor(title: string, tableName: string,
        fields: Field[], definations: Defination[],
        populate?: boolean, isMultiple?: boolean) {
            this.title = title,
            this.tableName = tableName,
            this.fields = fields,
            this.definations = definations,
            this.populate = populate,
            this.isMultiple = isMultiple
            
    }
}