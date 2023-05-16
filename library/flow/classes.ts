export class Flow{
    steps : Step[];
    constructor(name : string, tableName : string)
    {
        this.steps = this.buildSteps()
    }
    buildSteps(): Step[] {
        return [];
    }
}

export class Step {
    constructor() {
        
    }
}