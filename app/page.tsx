"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Globe2,
  Layers3,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* =====================================================
          Background
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-15%] top-[-15%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute right-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="absolute bottom-[-20%] left-[30%] h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[120px]" />
      </div>

      {/* =====================================================
          Navbar
      ===================================================== */}

        

      {/* =====================================================
          Hero
      ===================================================== */}

      <section className="relative z-10 px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-xs font-medium text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>

              Build faster. Ship smarter.
              
              <ChevronRight className="h-3.5 w-3.5" />
            </div>

            {/* Heading */}

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Build the future
              <br />

              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                one idea at a time.
              </span>
            </h1>

            {/* Description */}

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              A modern platform designed to help teams build, manage,
              and scale powerful digital products without unnecessary
              complexity.
            </p>

            {/* CTA */}

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                href="/register"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-semibold shadow-xl shadow-blue-600/20 transition hover:from-blue-500 hover:to-violet-500 sm:w-auto"
              >
                Start building

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#features"
                className="flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10 sm:w-auto"
              >
                Explore features
              </Link>
            </div>

            {/* Trust */}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                No credit card required
              </span>

              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                Free to get started
              </span>

              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                Cancel anytime
              </span>
            </div>
          </div>

          {/* =================================================
              Product Preview
          ================================================= */}

          <div className="relative mx-auto mt-20 max-w-5xl">

            {/* Glow */}

            <div className="absolute inset-x-20 -bottom-10 h-40 rounded-full bg-blue-600/20 blur-[80px]" />

            {/* Browser */}

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/50 backdrop-blur-xl">

              {/* Browser Header */}

              <div className="flex h-12 items-center border-b border-white/10 bg-white/[0.03] px-4">

                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>

                <div className="mx-auto hidden h-7 w-64 rounded-lg border border-white/5 bg-white/5 sm:block" />

              </div>

              {/* Dashboard */}

              <div className="grid min-h-[420px] grid-cols-12">

                {/* Sidebar */}

                <div className="hidden border-r border-white/10 p-5 sm:col-span-3 sm:block">

                  <div className="mb-7 flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600" />

                    <div className="h-3 w-20 rounded bg-white/10" />
                  </div>

                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className={`h-9 rounded-lg ${
                          item === 1
                            ? "bg-blue-500/10"
                            : "bg-white/[0.03]"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Main Dashboard */}

                <div className="col-span-12 p-5 sm:col-span-9 sm:p-7">

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-5 w-32 rounded bg-white/15" />
                      <div className="mt-2 h-3 w-48 rounded bg-white/5" />
                    </div>

                    <div className="h-9 w-24 rounded-lg bg-blue-500/20" />
                  </div>

                  {/* Stats */}

                  <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                      >
                        <div className="h-2.5 w-16 rounded bg-white/10" />
                        <div className="mt-3 h-6 w-20 rounded bg-white/15" />
                        <div className="mt-2 h-2 w-12 rounded bg-emerald-400/30" />
                      </div>
                    ))}
                  </div>

                  {/* Chart */}

                  <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">

                    <div className="mb-6 flex justify-between">
                      <div className="h-3 w-28 rounded bg-white/10" />
                      <div className="h-3 w-16 rounded bg-white/5" />
                    </div>

                    <div className="flex h-36 items-end gap-2">
                      {[35, 55, 42, 70, 52, 80, 65, 92, 72, 100, 84, 110].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600/30 to-violet-400/60"
                            style={{ height: `${height}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* Bottom Cards */}

                  <div className="mt-4 grid grid-cols-2 gap-4">

                    <div className="h-20 rounded-xl border border-white/10 bg-white/[0.03]" />

                    <div className="h-20 rounded-xl border border-white/10 bg-white/[0.03]" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          Stats
      ===================================================== */}

      <section className="relative z-10 border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-12 lg:grid-cols-4 lg:px-8">

          {[
            ["10K+", "Active users"],
            ["99.9%", "Platform uptime"],
            ["50M+", "Requests processed"],
            ["24/7", "Support"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-white/5 px-5 py-4 text-center first:border-l-0 lg:border-l"
            >
              <div className="text-2xl font-bold text-white sm:text-3xl">
                {value}
              </div>

              <div className="mt-1 text-xs text-slate-500 sm:text-sm">
                {label}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          Features
      ===================================================== */}

      <section
        id="features"
        className="relative z-10 px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Header */}

          <div className="mx-auto max-w-2xl text-center">

            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              <Zap className="h-4 w-4" />
              Powerful features
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need.
              <br />
              <span className="text-slate-500">
                Nothing you don&apos;t.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-6 text-slate-400 sm:text-base">
              Focus on building your product while eCommerce handles
              the infrastructure around it.
            </p>
          </div>

          {/* Feature Grid */}

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            <FeatureCard
              icon={<Zap />}
              title="Lightning fast"
              description="Optimized infrastructure designed to keep your applications fast and responsive at any scale."
            />

            <FeatureCard
              icon={<ShieldCheck />}
              title="Secure by default"
              description="Built-in security practices help protect your applications, users, and sensitive data."
            />

            <FeatureCard
              icon={<Layers3 />}
              title="Scalable architecture"
              description="Start small and scale seamlessly as your users, traffic, and business grow."
            />

            <FeatureCard
              icon={<Code2 />}
              title="Developer friendly"
              description="Simple APIs, clean tooling, and an intuitive developer experience your team will love."
            />

            <FeatureCard
              icon={<Globe2 />}
              title="Global infrastructure"
              description="Deploy and serve your applications closer to your users with globally distributed infrastructure."
            />

            <FeatureCard
              icon={<Sparkles />}
              title="Built for modern teams"
              description="Collaborate, automate, and ship products faster with tools designed around your workflow."
            />

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative z-10 px-6 pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-5xl">

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-transparent px-6 py-16 text-center shadow-2xl sm:px-12">

            <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[100px]" />

            <div className="relative">

              <Sparkles className="mx-auto h-8 w-8 text-blue-400" />

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to build something amazing?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                Create your account and start building your next
                great product today.
              </p>

              <Link
                href="/register"
                className="group mx-auto mt-8 flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-semibold shadow-xl shadow-blue-600/20 transition hover:from-blue-500 hover:to-violet-500"
              >
                Get started for free

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// =========================================================
// Feature Card
// =========================================================

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white/[0.06]">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-400 ring-1 ring-inset ring-white/10">
        <div className="h-5 w-5">
          {icon}
        </div>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-1 text-xs font-medium text-blue-400 opacity-0 transition group-hover:opacity-100">
        Learn more
        <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </div>
  );
}