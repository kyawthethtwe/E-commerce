import { z } from "zod"

export const checkoutFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  address: z.string().min(5, "Address is too short"),
  city: z.string().min(2, "City is too short"),
  state: z.string().min(2, "State is too short"),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code"),
  country: z.string().min(2, "Country is too short"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
})

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>

