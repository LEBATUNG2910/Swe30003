import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import logo from "@/assets/logo.jpg"
import google from "@/assets/google.png"
import pic1 from "@/assets/pic1.jpg"
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
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className=" flex size-6 items-center justify-center">
              <img src={logo} alt="Logo" className="size-6" />
            </div>
            Long Chau
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <form className={cn("flex flex-col gap-6 w-full max-w-xs", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Create a new account</h1>
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
  Already have an account?{" "}
  <Link to="/" className="underline underline-offset-4">
    Sign in
  </Link>
</div>
          </form>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="bg-muted relative hidden lg:block">
        <img
          src={pic1}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
    </motion.div>
  )
}
