"use client"

import AuthLayout from "@/components/auth/AuthLayout"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { forgotPasswordSchema, type ForgotPasswordFormData } from "@/lib/auth-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle, Loader2 } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState("")

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(data: ForgotPasswordFormData) {
    try {
      setIsLoading(true)
      // In a real application, you would make an API call here
      console.log("Forgot password data:", data)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success message
      setSubmittedEmail(data.email)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Forgot password error:", error)
      // Handle error (show toast, etc.)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email and we'll send you a link to reset your password"
      backTo={{
        label: "Back to sign in",
        href: "/auth/login",
      }}
    >
      {isSubmitted ? (
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
          <h3 className="text-lg md:text-xl font-medium mb-3">Check your email</h3>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            We&apos;ve sent a password reset link to <span className="font-medium">{submittedEmail}</span>
          </p>
          <p className="text-gray-600 text-sm">
            Didn&apos;t receive the email? Check your spam folder or{" "}
            <button
              type="button"
              className="text-primary hover:underline font-medium"
              onClick={() => {
                setIsSubmitted(false)
                form.reset()
              }}
            >
              try again
            </button>
          </p>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm font-medium">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="h-11 text-base"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-11 text-base font-medium mt-8"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending reset link...
                </>
              ) : (
                "Send reset link"
              )}
            </Button>
          </form>
        </Form>
      )}
    </AuthLayout>
  )
}

