//Define the interface for Field
export interface Field {
    type: InputType;
    label: string;
    placeholder?: string;
    id: string;
    name: string;
    className?: string;
    options?: Option;
  }
  
  //Define types for Option
  export type Option = {
    tableName: string;
    fields: string[];
    values: [];
  };
  
  //Define types for Select
  export type Select = {
    tableName: string;
  };
  export type InputType =
    | 'text'
    | 'email'
    | 'radio'
    | 'checkbox'
    | 'radio'
    | 'number'
    | 'date'
    | 'select'
    | 'file';
  

    //Define types for Step
  export type Step = {
    title: string;
    tableName: string;
    populate?: boolean;
    isMultiple?: boolean;
    fields: Field[];
    definations: Defination[];
  };

  //Define intarface Flow
  export interface Flow {
    steps: Step[];
  }

  //Define types for Defination[]
  export type Defination = {label : string, value : string}

  