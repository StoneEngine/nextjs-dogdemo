export type actionFunction = (
    prevState: any,
    formdata: FormData
) => Promise<{ message: string }>;