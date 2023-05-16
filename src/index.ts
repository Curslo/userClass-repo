import { Prisma } from "@prisma/client";
import { Flow } from "../library/flow";

const express = require("express");
const app = express();

app.get("/", (request, response) => {
    const flow = new Flow('propertyRegestration', 'property')
    response.json(flow)
});

app.get('/database', (req, res) => { 
    const database = Prisma.dmmf.datamodel.models;
    const tableRelation = database.find((table) => {
        return table.name === 'property'
    })
    res.json(tableRelation)
})

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});