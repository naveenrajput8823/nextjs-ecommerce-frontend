"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  User,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { toast } from "react-toastify";

// ==========================================
// Zod Validation Schema
// ==========================================

const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, "Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name cannot exceed 50 characters"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),

    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// ==========================================
// TypeScript Type
// ==========================================

type RegisterFormData = z.infer<typeof registerSchema>;

// ==========================================
// Component
// ==========================================

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // ==========================================
  // Submit
  // ==========================================

  const onSubmit = async (data: RegisterFormData) => {
    try {
      console.log("Data to Register:", data);
      const { confirmPassword, ...submitData } = data;
      const response = await fetch("/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();
      console.log(result);
      
      toast.success("Account created successfully! Having id :" + result.user.id);
      // await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Registration failed:"+ error.message);
      }
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">

      {/* ==========================================
          Background Decoration
      ========================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      {/* ==========================================
          Register Container
      ========================================== */}

      <div className="relative w-full max-w-md">

        {/* ==========================================
            Register Card
        ========================================== */}

        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl sm:p-10">

          {/* ==========================================
              Logo
          ========================================== */}

          <div className="mb-7 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/20">
              <User className="h-7 w-7 text-white" />
            </div>
          </div>

          {/* ==========================================
              Heading
          ========================================== */}

          <div className="mb-7 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Create an account
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Sign up to get started with your account
            </p>
          </div>

          {/* ==========================================
              Form
          ========================================== */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >

            {/* ========================================
                Name
            ======================================== */}

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Full name
              </label>

              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  autoComplete="name"
                  {...register("name")}
                  className={`w-full rounded-xl border bg-white/5 py-3.5 pl-12 pr-4 text-sm text-white outline-none placeholder:text-slate-600 transition
                    ${errors.name
                      ? "border-red-500/70 focus:border-red-500"
                      : "border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    }`}
                />
              </div>

              {errors.name && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* ========================================
                Email
            ======================================== */}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Email address
              </label>

              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  {...register("email")}
                  className={`w-full rounded-xl border bg-white/5 py-3.5 pl-12 pr-4 text-sm text-white outline-none placeholder:text-slate-600 transition
                    ${errors.email
                      ? "border-red-500/70 focus:border-red-500"
                      : "border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    }`}
                />
              </div>

              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* ========================================
                Password
            ======================================== */}

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  {...register("password")}
                  className={`w-full rounded-xl border bg-white/5 py-3.5 pl-12 pr-12 text-sm text-white outline-none placeholder:text-slate-600 transition
                    ${errors.password
                      ? "border-red-500/70 focus:border-red-500"
                      : "border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    }`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((previous) => !previous)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-slate-300"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* ========================================
                Confirm Password
            ======================================== */}

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Confirm password
              </label>

              <div className="relative">
                <LockKeyhole
                  className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="••••••••"
                  autoComplete="new-password"
                  {...register("confirmPassword")}
                  className={`w-full rounded-xl border bg-white/5 py-3.5 pl-12 pr-12 text-sm text-white outline-none placeholder:text-slate-600 transition
                    ${errors.confirmPassword
                      ? "border-red-500/70 focus:border-red-500"
                      : "border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    }`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      (previous) => !previous
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-slate-300"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* ========================================
                Terms
            ======================================== */}

            <div className="flex items-start gap-2 pt-1">
              <input
                id="terms"
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 accent-blue-600"
              />

              <label
                htmlFor="terms"
                className="text-xs leading-5 text-slate-400"
              >
                I agree to the{" "}
                <a
                  href="/terms"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* ========================================
                Register Button
            ======================================== */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-500 hover:to-violet-500 hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  Create account
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>

          {/* ==========================================
              Divider
          ========================================== */}

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />

            <span className="text-xs text-slate-500">
              OR
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* ==========================================
              Google
          ========================================== */}

          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="#4285F4"
                d="M23.49 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h6.45a5.51 5.51 0 0 1-2.4 3.62v3.01h3.89c2.28-2.1 3.55-5.2 3.55-8.66Z"
              />

              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.07 7.94-2.91l-3.89-3.01c-1.08.72-2.46 1.15-4.05 1.15-3.12 0-5.76-2.11-6.71-4.95H1.27v3.1A12 12 0 0 0 12 24Z"
              />

              <path
                fill="#FBBC05"
                d="M5.29 14.28A7.22 7.22 0 0 1 4.91 12c0-.79.14-1.56.38-2.28v-3.1H1.27A12 12 0 0 0 0 12c0 1.93.46 3.76 1.27 5.38l4.02-3.1Z"
              />

              <path
                fill="#EA4335"
                d="M12 4.77c1.76 0 3.34.61 4.58 1.81l3.43-3.43C17.94 1.18 15.24 0 12 0A12 12 0 0 0 1.27 6.62l4.02 3.1C5.24 6.88 7.88 4.77 12 4.77Z"
              />
            </svg>

            Continue with Google
          </button>

          {/* ==========================================
              GitHub
          ========================================== */}

          <button
            type="button"
            className="mt-3 flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <svg
              className="h-5 w-5 fill-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" />
            </svg>

            Continue with GitHub
          </button>

          {/* ==========================================
              Login Link
          ========================================== */}

          <p className="mt-7 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Sign in
            </a>
          </p>
        </div>

        {/* ==========================================
            Footer
        ========================================== */}

        <p className="mt-5 text-center text-xs text-slate-600">
          © 2026 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}