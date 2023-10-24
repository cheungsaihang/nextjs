"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactUsSchema = z.object({
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

type ContactUsSchema = z.infer<typeof contactUsSchema>;

export default function ContactUs(){
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        reset
    } = useForm<ContactUsSchema>({
        resolver: zodResolver(contactUsSchema),
    });

    const onSubmit = (data:ContactUsSchema) => {
        alert("Submit Success");
        reset();
        return false;
    }

    return (    
        <div className="max-w-2xl w-full mx-auto pt-5 px-2">
            <h2 className="font-bold text-xl mb-5">Contact Us</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="block text-slate-500 ml-1 mt-3">Name</label>
                    <input {...register('name')} className="border rounded w-full p-1 text-slate-600" />
                    {errors.name?.message && <p className="text-red-500 text-xs ml-1 mt-1">{errors.name?.message}</p>}

                    <label className="block text-slate-500 ml-1 mt-3">Email</label>
                    <input {...register('email')} className="border rounded w-full p-1 text-slate-600" />
                    {errors.email?.message && <p className="text-red-500 text-xs ml-1 mt-1">{errors.email?.message}</p>}

                    <label className="block text-slate-500 ml-1 mt-3">Comments</label>
                    <textarea {...register('comment')} className="border rounded w-full h-36 p-1 text-slate-600" />
                    {errors.comment?.message && <p className="text-red-500 text-xs ml-1 mt-1">{errors.comment?.message}</p>}

                    <input type="submit" value="Submit" className="rounded px-5 py-1 block mx-auto bg-blue-500 text-white mt-3 hover:bg-blue-400" />
                </form>
            </div>
        </div>
    );
}