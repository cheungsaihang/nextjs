"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useLoginHooks, { TLoginSchema, loginSchema } from "./hooks";

export default function Login(){
    const { 
        register,
        handleSubmit, 
        formState: { errors },
        reset
    } = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema),
    });
    const loginHooks = useLoginHooks();

    const onSubmit = async (data:TLoginSchema) => {
        await loginHooks.handleLogin(data);
        reset();
        return false;
    }

    return (    
        <div className="max-w-2xl w-full mx-auto py-5 px-5 rounded border">
            <h2 className={"font-bold text-xl mb-5"}>Login</h2>
            {
                loginHooks.loginStatus == 'fail' && (
                    <div className="bg-red-50 py-1 px-3 rounded text-red-900">Login Fail !!</div>
                )
            }
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="block text-slate-500 ml-1 mt-3">Login</label>
                    <input {...register('username')} className="border rounded w-full p-1 text-slate-600" />
                    {errors.username?.message && <p className="text-red-500 text-xs ml-1 mt-1">{errors.username?.message}</p>}

                    <label className="block text-slate-500 ml-1 mt-3">Password</label>
                    <input {...register('password')} className="border rounded w-full p-1 text-slate-600" />
                    {errors.password?.message && <p className="text-red-500 text-xs ml-1 mt-1">{errors.password?.message}</p>}
                  
                    <input type="submit" value={loginHooks.isLogging ? "Logging..." : "Login"} disabled={loginHooks.isLogging} className="rounded px-5 py-1 block mx-auto bg-blue-500 text-white mt-3 hover:bg-blue-400" />
                </form>
            </div>
        </div>
    );
}
