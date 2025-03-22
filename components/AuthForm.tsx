"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

type FormType = "sign-in" | "sign-up"

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === 'sign-up' 
      ? z.string().min(3, "Name must be at least 3 characters")
      : z.string().optional(),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(3, "Password must be at least 3 characters"),
  })
}

interface AuthFormProps {
  type: FormType
}

const AuthForm = ({ type }: AuthFormProps) => {
  const router = useRouter()
  const formSchema = authFormSchema(type)

  // Correctly typed form with conditional fields
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        toast.success(" Account Created Successfully Please sign in.");
        router.push("/sign-in");

        console.log('signin', values)
        // After successful sign-in, navigate to dashboard or home
      } else {
        toast.success("Signed in successfully");
        console.log('sign-in', values)
        // After successful sign-up, navigate to sign-in
        router.push('/')
      }
    } catch(error) {
      console.log(error);
      toast.error(`There was an error: ${error}`)
    }
  }

  const isSignIn = type === "sign-in"
  
  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">MoackWise</h2>
        </div>
        
        <h3>{isSignIn ? "Sign In" : "Create Account"}</h3>
        <p className="text-sm text-primary-300">
          {isSignIn ? "Sign in to start practicing mock interviews" : "Sign up to start your mock interview journey"}
        </p>
      
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full mt-4 form">
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your Email" type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your password" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="btn w-full">
              {isSignIn ? "Sign In" : "Create Account"}
            </Button>
          </form>
        </Form>
        
        <p className="text-center">
          {isSignIn ? "No account?" : "Already have an account?"}
          <Link 
            href={isSignIn ? "/sign-up" : "/sign-in"} 
            className="font-bold text-user-primary ml-1 hover:text-blue-700"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default AuthForm