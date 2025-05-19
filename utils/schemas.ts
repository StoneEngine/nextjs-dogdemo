import { z, ZodSchema } from 'zod'

// const profileSchema = z.string().min(2, { message: "อักขระต้องมีอย่างน้อย 2 ตัว" })

export const profileSchema = z.object({
    firstName: z.string().min(2, { message: "ชื่อ ต้องมีอย่างน้อย 2 ตัว" }),
    lastName: z.string().min(2, { message: "นามสกุล ต้องมีอย่างน้อย 2 ตัว" }),
    userName: z.string().min(2, { message: "username ต้องมีอย่างน้อย 2 ตัว" }),

})

const validateImage = () => {
    const maxFileSize = 1024 * 1024
    return z.instanceof(File).refine((file) => {
        return file.size <= maxFileSize
    }, 'File size must be less than 1MB')
}

export const imageSchema = z.object({
    image:validateImage()
})


export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
    const result = schema.safeParse(data)
    if (!result.success) {
        const errors = result.error?.errors.map((error) => error.message)
        throw new Error(errors.join(','))

    }
    return result.data
}