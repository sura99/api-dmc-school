import prisma from "../db"

export default {
    list: async () => {
        try {
            const schoolmis = prisma.schoolmis.findMany()
            return schoolmis
        } catch (error) {
            return "can not fetch schoolmis =>" + error
        }
    }, // end function list

    show: async ({params}: {params: {id: string}}) => {
        try {
            const schoolmis = prisma.schoolmis.findMany({
                where: {
                    id: parseInt(params.id)
                }
            })
            return schoolmis

        } catch (error) {
            return "can not fetch schoolmis =>" + error
        }
    }, // end function show

    smis_code: async ({params}: {params : { smis_code : string}}) => {
        try {
            const smis_code = await prisma.schoolmis.findMany({
                where: {
                    smis_code: parseInt(params.smis_code)
                }
            })
            return smis_code
        } catch (error) {
            return "can not fetch schoolmis =>" + error
        }
    }  // end function smis_code
}