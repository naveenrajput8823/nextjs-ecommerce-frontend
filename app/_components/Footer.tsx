// components/Footer.tsx

import Link from "next/link";
import {
    ArrowUpRight,
    Sparkles,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">

            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />
                <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* ============================================
            Main Footer
        ============================================ */}

                <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">

                    {/* ==========================================
              Brand
          ========================================== */}

                    <div className="lg:col-span-2">

                        <Link
                            href="/"
                            className="inline-flex items-center gap-3"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/20">
                                <Sparkles className="h-5 w-5 text-white" />
                            </div>

                            <span className="text-xl font-bold tracking-tight text-white">
                                eCommerce
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
                            Build, launch, and scale your next digital product
                            with a modern platform designed for ambitious teams.
                        </p>

                        {/* Social Links */}

                        <div className="mt-7 flex items-center gap-3">

                            {/* GitHub */}
                            <SocialLink
                                href="https://github.com"
                                label="GitHub"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="h-4 w-4 fill-current"
                                >
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                                </svg>
                            </SocialLink>


                            {/* Twitter / X */}
                            <SocialLink
                                href="https://twitter.com"
                                label="Twitter"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="h-4 w-4 fill-current"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.965 6.817H1.681l7.73-8.835L1.255 2.25h6.826l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                                </svg>
                            </SocialLink>


                            {/* LinkedIn */}
                            <SocialLink
                                href="https://linkedin.com"
                                label="LinkedIn"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="h-4 w-4 fill-current"
                                >
                                    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.68H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.37 4.28 5.45v6.3ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                                </svg>
                            </SocialLink>

                        </div>
                    </div>

                    {/* ==========================================
              Product
          ========================================== */}

                    <FooterColumn title="Product">

                        <FooterLink href="#features">
                            Features
                        </FooterLink>

                        <FooterLink href="#solutions">
                            Solutions
                        </FooterLink>

                        <FooterLink href="#pricing">
                            Pricing
                        </FooterLink>

                        <FooterLink href="/changelog">
                            Changelog
                        </FooterLink>

                        <FooterLink href="/roadmap">
                            Roadmap
                        </FooterLink>

                    </FooterColumn>

                    {/* ==========================================
              Company
          ========================================== */}

                    <FooterColumn title="Company">

                        <FooterLink href="/about">
                            About
                        </FooterLink>

                        <FooterLink href="/careers">
                            Careers
                        </FooterLink>

                        <FooterLink href="/contact">
                            Contact
                        </FooterLink>

                        <FooterLink href="/blog">
                            Blog
                        </FooterLink>

                        <FooterLink href="/customers">
                            Customers
                        </FooterLink>

                    </FooterColumn>

                    {/* ==========================================
              Resources
          ========================================== */}

                    <FooterColumn title="Resources">

                        <FooterLink href="/documentation">
                            Documentation
                        </FooterLink>

                        <FooterLink href="/api">
                            API Reference
                        </FooterLink>

                        <FooterLink href="/guides">
                            Guides
                        </FooterLink>

                        <FooterLink href="/support">
                            Support
                        </FooterLink>

                        <FooterLink href="/status">
                            System Status
                        </FooterLink>

                    </FooterColumn>

                </div>

                {/* ============================================
            CTA Banner
        ============================================ */}

                <div className="relative mb-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-7 backdrop-blur-xl sm:px-8">

                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-600/10 blur-[70px]" />

                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            <h3 className="text-base font-semibold text-white">
                                Ready to build something great?
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                Start your journey with eCommerce today.
                            </p>
                        </div>

                        <Link
                            href="/register"
                            className="group inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-500 hover:to-violet-500"
                        >
                            Get started

                            <ArrowUpRight
                                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>

                    </div>
                </div>

                {/* ============================================
            Bottom Footer
        ============================================ */}

                <div className="flex flex-col gap-5 border-t border-white/5 py-7 sm:flex-row sm:items-center sm:justify-between">

                    {/* Copyright */}

                    <p className="text-xs text-slate-600">
                        © 2026 eCommerce. All rights reserved.
                    </p>

                    {/* Legal */}

                    <div className="flex flex-wrap gap-x-6 gap-y-2">

                        <Link
                            href="/privacy"
                            className="text-xs text-slate-500 transition hover:text-slate-300"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="text-xs text-slate-500 transition hover:text-slate-300"
                        >
                            Terms of Service
                        </Link>

                        <Link
                            href="/cookies"
                            className="text-xs text-slate-500 transition hover:text-slate-300"
                        >
                            Cookie Policy
                        </Link>

                    </div>

                    {/* Status */}

                    <div className="flex items-center gap-2 text-xs text-slate-500">

                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>

                        All systems operational

                    </div>

                </div>

            </div>
        </footer>
    );
}


// ========================================================
// Footer Column
// ========================================================

function FooterColumn({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
                {title}
            </h3>

            <ul className="space-y-3">
                {children}
            </ul>
        </div>
    );
}


// ========================================================
// Footer Link
// ========================================================

function FooterLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <li>
            <Link
                href={href}
                className="text-sm text-slate-500 transition hover:text-white"
            >
                {children}
            </Link>
        </li>
    );
}


// ========================================================
// Social Link
// ========================================================

function SocialLink({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-500 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
            {children}
        </a>
    );
}
