"use server";

import { z } from "zod";
import { prisma} from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"; 

const ContactSchema = z.object({
    name : z.string().min(6),
    phone : z.string().min(11),
})
export const saveContact = async (prevState:any, fromData : FormData) => {
    const Valitedfields = ContactSchema.safeParse(Object.fromEntries(fromData.entries()));

    if(!Valitedfields.success){
        return {
            Error : Valitedfields.error.flatten().fieldErrors
        }
    }
    try {
        await prisma?.contact.create({
            data : {
                name : Valitedfields.data.name,
                phone : Valitedfields.data.phone,
            }
        })

    } catch (error) {
        return {message : 'Failed to create contacts'}
    }
    revalidatePath('/kontak')
    redirect('/kontak') 

}