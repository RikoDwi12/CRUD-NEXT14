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

export const updateContact = async (
    id: string,
    prevSate: any,
    formData: FormData
  ) => {
    const validatedFields = ContactSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
  
    if (!validatedFields.success) {
      return {
        Error: validatedFields.error.flatten().fieldErrors,
      };
    }
  
    try {
      await prisma.contact.update({
        data: {
          name: validatedFields.data.name,
          phone: validatedFields.data.phone,
        },
        where: { id },
      });
    } catch (error) {
      return { message: "Failed to update contact" };
    }
  
    revalidatePath("/kontak");
    redirect("/kontak");
  };