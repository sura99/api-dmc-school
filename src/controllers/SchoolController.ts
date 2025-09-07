import prisma from "../db"

export default {
    list: async () => {
        try {
            const schools = await prisma.school.findMany({
                where: {
                    status : {
                        //notIn: ["0"],
                        in: ["1"]
                    }
                },
                include:{
                    schoolmis:true,
                    onetp6s:true,
                    onetm3s:true,
                    nts:true,
                }
            })
            return schools
        } catch (error) {
            return "can not fetch schools" + error
        }
    },  //end function list

    show: async ({params} : {params : {id: string}}) => {
        try {
            const school = await prisma.school.findMany({
                where: {
                    id : parseInt(params.id),
                },
                include: {
                    schoolmis:true,
                    onetp6s:true,
                    onetm3s:true,
                    nts:true,
                },
                orderBy: {
                    id: "desc"
                }
            })
            return school

        } catch (error) {
            return error
        }
    }, // end function show

    smis_code: async ({params}: {
        params: {smis_code : string}
    }) => {
        try {
            const smis_code = prisma.school.findMany({
                where : {
                    smis_code : parseInt(params.smis_code)
                },
                include: {
                    schoolmis:true,
                    onetp6s:true,
                    onetm3s:true,
                    nts:true,
                }
            })
            return smis_code

        } catch (error) {
            return error
        }
    }, // end function show
}