import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
const list = async (req,res) => {
    try {
        const clients = await prisma.client.findMany()
        res.render('clients/list',{clients})
    } catch (error) {
        res.sendStatus(500)
    }
}

export default {list}