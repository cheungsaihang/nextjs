import { z } from "zod";

export const contactUsSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email(),
    comment: z.string().min(1, { message: "Comment is required" }),
}).refine((data) => data.name != "test",{
    message: "Don't use test as name",
    path:["name"]
}).refine((data) => data.email != "text@gmail.com",{
    message: "Invalid email format",
    path:["email"]
});

export type TContactUsSchema = z.infer<typeof contactUsSchema>;
