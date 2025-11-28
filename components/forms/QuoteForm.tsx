"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "@/lib/validation/quoteSchema";
import Button from "@/components/ui/Button";

const serviceOptions = [
  "Roof Installation",
  "Roof Repair",
  "Roof Inspection",
  "Emergency Service",
  "Eavestrough",
  "Soffit & Fascia",
];

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send quote request");

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Personal Information */}
      <div>
        <h3 className="mb-4 font-heading text-xl font-semibold text-gray-900">
          Contact Information
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address *
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number *
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City *
            </label>
            <input
              {...register("city")}
              type="text"
              id="city"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Property Address *
            </label>
            <input
              {...register("address")}
              type="text"
              id="address"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div>
        <h3 className="mb-4 font-heading text-xl font-semibold text-gray-900">Project Details</h3>

        {/* Service Type */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            What services do you need? *
          </label>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {serviceOptions.map((service) => (
              <label key={service} className="flex items-center gap-2">
                <input
                  {...register("serviceType")}
                  type="checkbox"
                  value={service}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-700">{service}</span>
              </label>
            ))}
          </div>
          {errors.serviceType && (
            <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
          )}
        </div>

        {/* Property Type */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Property Type *</label>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <label className="flex items-center gap-2">
              <input
                {...register("propertyType")}
                type="radio"
                value="residential"
                className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">Residential</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                {...register("propertyType")}
                type="radio"
                value="commercial"
                className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">Commercial</span>
            </label>
          </div>
          {errors.propertyType && (
            <p className="mt-1 text-sm text-red-600">{errors.propertyType.message}</p>
          )}
        </div>

        {/* Project Description */}
        <div className="mb-6">
          <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
            Project Description *
          </label>
          <textarea
            {...register("projectDescription")}
            id="projectDescription"
            rows={6}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Please describe your roofing project in detail..."
          />
          {errors.projectDescription && (
            <p className="mt-1 text-sm text-red-600">{errors.projectDescription.message}</p>
          )}
        </div>
      </div>

      {/* Timing & Preferences */}
      <div>
        <h3 className="mb-4 font-heading text-xl font-semibold text-gray-900">
          Timing & Preferences
        </h3>

        {/* Urgency */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">When do you need this done? *</label>
          <select
            {...register("urgency")}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="">Select timeframe...</option>
            <option value="emergency">Emergency - As soon as possible</option>
            <option value="within-week">Within a week</option>
            <option value="within-month">Within a month</option>
            <option value="flexible">Flexible - Just planning ahead</option>
          </select>
          {errors.urgency && <p className="mt-1 text-sm text-red-600">{errors.urgency.message}</p>}
        </div>

        {/* Preferred Contact Method */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            How would you prefer we contact you? *
          </label>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <label className="flex items-center gap-2">
              <input
                {...register("preferredContactMethod")}
                type="radio"
                value="email"
                className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">Email</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                {...register("preferredContactMethod")}
                type="radio"
                value="phone"
                className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">Phone</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                {...register("preferredContactMethod")}
                type="radio"
                value="either"
                className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">Either</span>
            </label>
          </div>
          {errors.preferredContactMethod && (
            <p className="mt-1 text-sm text-red-600">{errors.preferredContactMethod.message}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
          {isSubmitting ? "Submitting..." : "Request Free Quote"}
        </Button>
      </div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="rounded-lg bg-green-50 p-4 text-green-800">
          <p className="font-medium">Quote request submitted successfully!</p>
          <p className="mt-1 text-sm">
            We'll review your request and get back to you within 24 hours with a detailed quote.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="rounded-lg bg-red-50 p-4 text-red-800">
          <p className="font-medium">Failed to submit quote request</p>
          <p className="mt-1 text-sm">Please try again or call us directly at (519) 555-1234</p>
        </div>
      )}
    </form>
  );
}
