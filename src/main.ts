//Create a User interface to serve all users
interface IUser {
    name: string;
    email: string;
    password: string;
    avater: File;
    phoneNumber: number;
    //Methods that all users have in common are create/signUp(), login(), updateProfile(), deleteProfile()
    signUp: () => void;
    login: () => void;
    updateProfile: () => void;
    deleteProfile: () => void;
}

//Create a Tenant interface to serve all tenants
interface ITenants {
    name: string;
    email: string;
    password: string;
    avater: File;
    phoneNumber: number;

    //Additional fields for the tenants that are unique from the user
    location: string;
    tokenNumber : number;
    propertyID : number|string;
    propertyDescription: string;
    propertyOwner: string;
    //Usual methods for every user
    signUp: () => void;
    login: () => void;
    updateProfile: () => void;
    deleteProfile: () => void;
    //Unique methods for tenants only
    payRent: () => void;
    payElectricity: () => void;
    payGarbage: () => void;
    waterBill : () => void;
}

//Create a Landlord interface
interface ILandlord {
    name: string;
    email: string;
    password: string;
    avater: File;
    phoneNumber: number;
    //Unique Landlord's field
    propertyName: string;
    propertyType : string;
    propertPrice : number;
    propertyDescription: string;
    propertyLocation : string;
    //Usual methods for all Users
    signUp: () => void;
    login: () => void;
    updateProfile: () => void;
    deleteProfile: () => void;
    //Unique methods for the Landlord
    rejectPayments: () => void;
    removeTenant: () => void;
    addTenant: () => void;
}

//Craete class User
export class User implements IUser {
    name: string;
    email: string;
    password: string;
    avater: File;
    phoneNumber: number;
    //The constructor object
    constructor(name: string, email: string, password: string, avater: File, phoneNumber: number) {
        this.name = name,
            this.email = email,
            this.password = password,
            this.avater = avater,
            this.phoneNumber = phoneNumber
    }
    //Default methods for all users
    signUp(): void {

    }
    login(): void {

    }
    updateProfile() : void {

    }
    deleteProfile() : void {

    }
}

//Create class Tenants
export class Teanants extends User implements ITenants {
    //Inherited fields fron the User class
    name: string;
    email: string;
    password: string;
    avater: File;
    phoneNumber: number;
    //Additional unique fields
    propertyID : number|string;
    location: string;
    tokenNumber : number;
    propertyDescription: string;
    propertyOwner: string;
    //The constructor object
    constructor (name: string, email: string, password: string, avater: File, location: string, 
        propertyDescription: string, phoneNumber: number, propertyOwner: string, tokenNumber : number, 
        propertyID : number|string) {
            //Inherited fields fron the User class
            super(name, email, password,avater, phoneNumber),
            //Additional unique fields
            this.location = location,
            this.tokenNumber = tokenNumber,
            this.propertyDescription = propertyDescription,
            this.phoneNumber = phoneNumber,
            this.propertyOwner = propertyOwner,
            this,propertyID = propertyID
        }
        //Adiitional unique methods for Tenants only
        payRent() : void {
            //Initiate rent payment based on the preffered mode of payment for a specific tenant
        }
        payElectricity() : void {
            //Initiate electricity payment based on the token number and mode of payment ie MPesa, Credit card etc
        }
        payGarbage() : void {
            //Initiate garbage payment to the garbage collectors paybill
        }
        waterBill() : void {
            //Initiate water bill payment to a particular paybill
        }
}

//Create class Landlord
export class Landlord extends User implements ILandlord {
    //Inherited fields fron the User class
    name: string;
    email: string;
    password: string;
    avater: File;
    phoneNumber: number;
    //Additional unique fields
    propertyName: string;
    propertyType : string;
    propertPrice : number;
    propertyDescription: string;
    propertyLocation : string;
    //The constructor object
    constructor(name: string, email: string, password: string, avater: File, phoneNumber: number,
        propertyName: string, propertyType : string, propertPrice : number, propertyDescription: string, propertyLocation : string) {
            //Inherited fields fron the User class
            super(name, email, password, avater, phoneNumber),
            //Additional unique fields
            this.propertyName = propertyName,
            this.propertyType = propertyType,
            this.propertPrice = propertPrice,
            this.propertyDescription = propertyDescription,
            this.propertyLocation = propertyLocation
        }
        //Additional unique methods for landlord only
        rejectPayments() : void {
            //For the landlord to reject payments, the tenant(s) has to pay the rent
        }
        removeTenant() : void {
            //Remove a tenant from the landlords property after tenant has migrated
        }
        addTenant(): void {
            //Add tenant to a particular property
        }
}