import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "full";
  background?: "white" | "gray" | "primary" | "dark";
  padding?: "sm" | "md" | "lg" | "xl";
}

export default function Section({
  children,
  className = "",
  containerSize = "lg",
  background = "white",
  padding = "lg",
}: SectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    primary: "bg-primary text-white",
    dark: "bg-gray-900 text-white",
  };

  const paddingClasses = {
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16",
    lg: "py-16 sm:py-24",
    xl: "py-24 sm:py-32",
  };

  return (
    <section
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
