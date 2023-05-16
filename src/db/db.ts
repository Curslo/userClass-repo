import { User } from "../main"

const db = {
    users : [
        {
            id : 1,
            name : 'Peter',
            email : 'peter@google.com',
            password : 'Peter123',
            avater : "",
            phoneNumber : '0112345678',
            user : 'Tenant',
            location : 'Nairobi',
            tokenNumber : '10293847566574839201',
            propertyDescription : 'Bedsitter',
            propertyOwner : 'John'
        },
        {
            id : 2,
            name : 'John',
            email : 'jihn@google.com',
            password : 'John123',
            avater : "",
            phoneNumber : '0142305612',
            user : 'Landlord',
            propertyName : 'Amani',
            propertyType : ['Bedsitters', '1 BedRoom'],
            propertyPrice : 5500,
            propertyDescription : 'Bedsitters and 1 Bedrooms',
            propertyLocation : 'Nairobi'
        },
        {
            id : 3,
            name : 'Caro',
            email : 'caro@google.com',
            password : 'Caro123',
            avater : "",
            phoneNumber : '9876543210',
            user : 'Tenant',
            location : 'Nairobi',
            tokenNumber : '10293847566554839201',
            propertyDescription : '1 BedRooom',
            propertyOwner : 'John'
        },
        {
            id : 4,
            name : 'Grace',
            email : 'grace@google.com',
            password : 'Grace123',
            avater : "",
            phoneNumber : '0112342678',
            user : 'Tenant',
            location : 'Mombasa',
            tokenNumber : '10292847566574839201',
            propertyDescription : 'Bedsitter',
            propertyOwner : 'Nimrod'
        },
        {
            id : 5,
            name : 'Nimrod',
            email : 'Nimrod@google.com',
            password : 'nimrod123',
            avater : "",
            phoneNumber : '0142345612',
            user : 'Landlord',
            propertyName : 'Angaza',
            propertyType : 'Bedsitters',
            propertyPrice : 5500,
            propertyDescription : 'Bedsitters',
            propertyLocation : 'Mombasa'
        },
    ]
}

export default db