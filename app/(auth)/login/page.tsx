"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ArrowRight,
  Loader2,
} from "lucide-react";
import useAuth from "@/hooks/useAuth";

// ===============================
// Zod Schema
// ===============================

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

// ===============================
// TypeScript Type
// ===============================

type LoginFormData = z.infer<typeof loginSchema>;

// ===============================
// Component
// ===============================

export default function LoginForm() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const fetchAllUsers = async () => {
    try {
      const res = await fetch("/api/v1/users");
      const user = await res.json();
      if (res.status == 200) {
        console.log("users fetched succesfully!", user);
      }
    }
    catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  useEffect(()=>{
    fetchAllUsers();
  },[]);


  // ===============================
  // Submit
  // ===============================

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log("Login Data:", data);     
      const isLoggedIn = await login(data.email, data.password);
      // await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">

        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl sm:p-10">

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/20">
              <LockKeyhole className="h-7 w-7 text-white" />
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Welcome back
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Sign in to continue to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Email address
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

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
                <p className="mt-2 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-200"
                >
                  Password
                </label>

                <a
                  href="/forgot-password"
                  className="text-xs font-medium text-blue-400 transition hover:text-blue-300"
                >
                  Forgot password?
                </a>
              </div>

              <div className="relative">
                <LockKeyhole className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  {...register("password")}
                  className={`w-full rounded-xl border bg-white/5 py-3.5 pl-12 pr-12 text-sm text-white outline-none placeholder:text-slate-600 transition
                    ${errors.password
                      ? "border-red-500/70 focus:border-red-500"
                      : "border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-slate-300"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
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
                <p className="mt-2 text-xs text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">

              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-white/5 accent-blue-600"
                />

                <span className="text-sm text-slate-400">
                  Remember me
                </span>
              </label>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-500 hover:to-violet-500 hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-slate-500">
              OR
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            {/* Google Icon */}
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

          {/* Register */}
          <p className="mt-8 text-center text-sm text-slate-400">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Create account
            </a>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-600">
          © 2026 Your Company. All rights reserved.
        </p>

      </div>
    </div>
  );
}