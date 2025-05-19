"use server";
//S5OkRnQQvpaTNCkt
import { imageSchema, profileSchema, validateWithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from '@/utils/db'
import { redirect } from "next/navigation";


const getAuthUser = async () => {
    const user = await currentUser()
    if (!user) {
        throw new Error("You must login!!!");
    }
    if (!user.privateMetadata.hasProfile) redirect('/profile/create')

    return user

}

const renderError = (error: unknown): { message: string } => {
    return {
        message: error instanceof Error ? error.message : 'An Error!!!'
    }
}
export const createProfileAction = async (prevState: any, formdata: FormData) => {
    try {
        const user = await currentUser()
        if (!user) throw new Error("Please Login");

        const rawData = Object.fromEntries(formdata)
        const validateField = validateWithZod(profileSchema, rawData)

        // console.log('validated', validateField);
        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validateField
            }
        })
        const client = await clerkClient()
        await client.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true
            }
        })

        // return { message: "Create Profile Success!!!" };
    } catch (error) {
        // console.log(error);
        return renderError(error)
    }
    redirect('/')

};

export const createLandmarkAction = async (prevState: any, formdata: FormData): Promise<{ message: string }> => {
    try {
        const user = await getAuthUser()
        if (!user) throw new Error("Please Login");

        const rawData = Object.fromEntries(formdata)
        const file = formdata.get('image') as File
        
        const validatedFile = validateWithZod(imageSchema, { image: file })
        console.log('validated', validatedFile);
        // const validateField = validateWithZod(profileSchema, rawData)



        return { message: "Create Landmark Success!!!" };
    } catch (error) {
        // console.log(error);
        return renderError(error)
    }
    // redirect('/')

};