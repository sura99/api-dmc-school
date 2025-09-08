import prisma from "../db"

export default {
    list: async () => {
        try {
            const ccts = await prisma.cct.findMany()
            return ccts

        } catch (error) {
            return "cant fetch CCT Database" + error
        }
    },  // end function list

    show: async ({params}:{params : {id : string}}) => {
         try {
            const ccts = await prisma.cct.findMany({
                where:{
                    id: parseInt(params.id)
                },
                // include: {
                //     school:true
                // }
            })
            return ccts

        } catch (error) {
            return "can not fetch CCT Database" + error
        }
    }, // end function show
    smis_code: async ({params}:{params : {smis_code: string}}) => {
        try {
            const smis_code = await prisma.cct.findMany({
                where: {
                    smis_code: parseInt(params.smis_code)
                }
            })
            return smis_code

        } catch (error) {
            return "can not fetch CCT smis_code" + error
        }
    } // end function smis_code
}