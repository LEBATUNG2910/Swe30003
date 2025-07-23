import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import google from "@/assets/google.png"
import logo from "@/assets/logo.jpg"
import pic1 from "@/assets/pic1.jpg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) 
{
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.5 }}
    >
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left side: Form */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center ">
              <img src={logo} alt="Logo" className="size-6" />
            </div>
            Long Chau
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="border border-black p-18 rounded-2xl bg-white shadow-md">
          <form className={cn("flex flex-col gap-6 w-full max-w-xs", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Sign in to your account</h1>
              <p className="text-muted-foreground text-sm text-balance">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" className="w-full">
                <Link to="/home">
                Sign in
                </Link>
              </Button>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-background text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <Button variant="outline" className="w-full">
                <img src={google} className="size-4" alt="google" />
                Sign in with Gmail
              </Button>
            </div>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
          <Link to="/signup-form" className="underline underline-offset-4">
                  Sign up
            </Link>
            </div>
          </form>
        </div>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="bg-muted relative hidden lg:block">
        <img
          src={pic1}
          alt="pic1"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
    </motion.div>
  )
}
