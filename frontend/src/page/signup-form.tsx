import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import logo from "@/assets/logo.jpg"
import google from "@/assets/google.png"
import pic2 from "@/assets/pic2.jpg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
    >
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left side: Form */}
      <div className="flex flex-col gap-4 overflow-y-hidden overflow-x-hidden md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium text-xl">
            <div className=" flex items-center justify-center">
              <img src={logo} alt="Logo" className="size-8"/>
            </div>
            Long Chau
          </a>
        </div> 
            <div className="flex flex-1 items-center justify-center">
          <div className="border border-black p-9 rounded-2xl bg-white shadow-md">
          <form className={cn("flex flex-col gap-6 w-full max-w-xs", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Create your new account</h1>
              <p className="text-muted-foreground text-sm text-balance">
                Enter your details below to sign up
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="John Doe" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" className="w-full">
                Sign up
              </Button>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-background text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <Button variant="outline" className="w-full">
                <img src={google} className="size-4" alt="google" />
                Sign up with Gmail
              </Button>
            </div>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
          <Link to="/" className="underline underline-offset-4">
                  Sign in
            </Link>
            </div>
          </form>
        </div>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="bg-muted relative hidden lg:block">
        <img
          src={pic2}
          alt="pic2"
          className=" h-full w-full object-cover"
        />
      </div>
    </div>
    </motion.div>
  )
}
