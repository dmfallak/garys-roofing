import { z } from "zod";

export const quoteSchema = z.object({
  // Personal Information
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your property address"),
  city: z.string().min(2, "Please enter your city"),

  // Project Details
  serviceType: z.array(z.string()).min(1, "Please select at least one service"),
  propertyType: z.enum(["residential", "commercial"], {
    message: "Please select a property type",
  }),
  projectDescription: z.string().min(20, "Please provide more details about your project"),

  // Timing
  urgency: z.enum(["emergency", "within-week", "within-month", "flexible"], {
    message: "Please select a timeframe",
  }),
  preferredContactMethod: z.enum(["email", "phone", "either"], {
    message: "Please select a contact preference",
  }),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
