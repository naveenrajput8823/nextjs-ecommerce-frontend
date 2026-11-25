"use client";

import Link from "next/link";
import { useState } from "react";
import {
    ChevronDown,
    LayoutDashboard,
    LogOut,
    Menu,
    Settings,
    Sparkles,
    User,
    X,
} from "lucide-react";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
    // Replace this with your actual authentication state
    const { isLoggedIn } = useAuth();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* =====================================================
          Background Effects
      ===================================================== */}

            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[-15%] top-[-15%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />

                <div className="absolute right-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]" />

                <div className="absolute bottom-[-20%] left-[30%] h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[120px]" />
            </div>

            {/* =====================================================
          Navbar
      ===================================================== */}

            <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

                    {/* =================================================
              Logo
          ================================================= */}

                    <Link
                        href="/"
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/20">
                            <Sparkles className="h-5 w-5 text-white" />
                        </div>

                        <span className="text-lg font-bold tracking-tight text-white">
                            eCommerce
                        </span>
                    </Link>

                    {/* =================================================
              Desktop Navigation
          ================================================= */}

                    <nav className="hidden items-center gap-8 md:flex">

                        <NavLink href="/">
                            Home
                        </NavLink>

                        <NavLink href="#about">
                            About
                        </NavLink>

                        <NavLink href="#services">
                            Services
                        </NavLink>

                        <NavLink href="#pricing">
                            Pricing
                        </NavLink>

                        <NavLink href="#contact">
                            Contact
                        </NavLink>

                    </nav>

                    {/* =================================================
              Right Side
          ================================================= */}

                    <div className="flex items-center gap-3">

                        {/* ===============================================
                Logged Out
            =============================================== */}

                        {!isLoggedIn && (
                            <div className="hidden items-center gap-3 md:flex">

                                <Link
                                    href="/login"
                                    className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                                >
                                    Sign in
                                </Link>

                                <Link
                                    href="/register"
                                    className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-500 hover:to-violet-500"
                                >
                                    Get started
                                </Link>

                            </div>
                        )}

                        {/* ===============================================
                Logged In
            =============================================== */}

                        {isLoggedIn && (
                            <div className="hidden md:block">
                                <UserMenu />
                            </div>
                        )}

                        {/* ===============================================
                Mobile Menu Button
            =============================================== */}

                        <button
                            type="button"
                            onClick={() =>
                                setMobileMenuOpen((value) => !value)
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
                            aria-label="Toggle navigation"
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>

                    </div>
                </div>

                {/* ===================================================
            Mobile Navigation
        =================================================== */}

                {mobileMenuOpen && (
                    <div className="border-t border-white/5 bg-slate-950/95 px-6 py-6 backdrop-blur-xl md:hidden">

                        <nav className="flex flex-col gap-2">

                            <MobileNavLink
                                href="/"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </MobileNavLink>

                            <MobileNavLink
                                href="#about"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </MobileNavLink>

                            <MobileNavLink
                                href="#services"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Services
                            </MobileNavLink>

                            <MobileNavLink
                                href="#pricing"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Pricing
                            </MobileNavLink>

                            <MobileNavLink
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </MobileNavLink>

                            {/* =============================================
                  Mobile Auth
              ============================================= */}

                            {!isLoggedIn ? (
                                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/5 pt-5">

                                    <Link
                                        href="/login"
                                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                                    >
                                        Sign in
                                    </Link>

                                    <Link
                                        href="/register"
                                        className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/20"
                                    >
                                        Get started
                                    </Link>

                                </div>
                            ) : (
                                <div className="mt-4 border-t border-white/5 pt-5">
                                    <MobileUserMenu />
                                </div>
                            )}

                        </nav>
                    </div>
                )}
            </header>
        </>
    );
};

export default Navbar;


// =========================================================
// Desktop Navigation Link
// =========================================================

const NavLink = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => {
    return (
        <Link
            href={href}
            className="relative text-sm font-medium text-slate-400 transition hover:text-white"
        >
            {children}
        </Link>
    );
};


// =========================================================
// Mobile Navigation Link
// =========================================================

const MobileNavLink = ({
    href,
    onClick,
    children,
}: {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
}) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
        >
            {children}
        </Link>
    );
};


// =========================================================
// User Menu
// =========================================================

const UserMenu = () => {
    const [open, setOpen] = useState(false);
    const { logout, user } = useAuth();
    return (
        <div className="relative">

            {/* User Button */}

            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="flex items-center gap-2 rounded-xl p-1.5 pr-3 transition"
                aria-expanded={open}
                aria-haspopup="menu"
            >

                {/* Avatar */}

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-semibold text-white">
                    {user?.name
                        ?.trim()
                        .split(/\s+/)
                        .map(word => word[0])
                        .join("")
                    }
                </div>

                {/* <div className="hidden text-left lg:block">
                    <p className="text-xs font-medium text-white">
                        John Doe
                    </p>

                    <p className="max-w-[130px] truncate text-[10px] text-slate-500">
                        john@example.com
                    </p>
                </div> */}
                {/* 
                <ChevronDown
                    className={`ml-1 h-4 w-4 text-slate-500 transition-transform ${open ? "rotate-180" : ""
                        }`}
                /> */}

            </button>


            {/* ===================================================
          Dropdown
      =================================================== */}

            {open && (
                <>
                    {/* Invisible click-away layer */}

                    <button
                        type="button"
                        aria-label="Close user menu"
                        className="fixed inset-0 z-40 cursor-default"
                        onClick={() => setOpen(false)}
                    />

                    {/* Dropdown */}

                    <div
                        className="absolute right-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl shadow-black/40 backdrop-blur-xl"
                        role="menu"
                    >

                        {/* User Information */}

                        <div className="border-b border-white/10 p-4">

                            <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-bold text-white">
                                    {user?.name
                                        ?.trim()
                                        .split(/\s+/)
                                        .map(word => word[0])
                                        .join("")
                                    }
                                </div>

                                <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold text-white">
                                        {user.name}
                                    </p>

                                    <p className="truncate text-xs text-slate-500">
                                        {user.email}
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* Menu Items */}

                        <div className="p-2">

                            <UserMenuItem
                                href="/dashboard"
                                icon={<LayoutDashboard />}
                                label="Dashboard"
                                onClick={() => setOpen(false)}
                            />

                            <UserMenuItem
                                href="/profile"
                                icon={<User />}
                                label="Profile"
                                onClick={() => setOpen(false)}
                            />

                            <UserMenuItem
                                href="/settings"
                                icon={<Settings />}
                                label="Settings"
                                onClick={() => setOpen(false)}
                            />

                        </div>


                        {/* Sign Out */}

                        <div className="border-t border-white/10 p-2">

                            <button
                                type="button"
                                onClick={() => {
                                    setOpen(false);
                                    console.log("Signing out...");
                                    logout();
                                }}
                                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
                            >
                                <LogOut className="h-4 w-4" />

                                Sign out
                            </button>

                        </div>

                    </div>
                </>
            )}
        </div>
    );
};


// =========================================================
// User Menu Item
// =========================================================

const UserMenuItem = ({
    href,
    icon,
    label,
    onClick,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
}) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            role="menuitem"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
        >
            <span className="h-4 w-4 text-slate-500">
                {icon}
            </span>

            {label}
        </Link>
    );
};


// =========================================================
// Mobile User Menu
// =========================================================

const MobileUserMenu = () => {
    return (
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">

            {/* User */}

            <div className="flex items-center gap-3 border-b border-white/10 p-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-bold text-white">
                    JD
                </div>

                <div>
                    <p className="text-sm font-semibold text-white">
                        John Doe
                    </p>

                    <p className="text-xs text-slate-500">
                        john@example.com
                    </p>
                </div>

            </div>

            {/* Links */}

            <div className="p-2">

                <Link
                    href="/dashboard"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                >
                    <LayoutDashboard className="h-4 w-4 text-slate-500" />
                    Dashboard
                </Link>

                <Link
                    href="/profile"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                >
                    <User className="h-4 w-4 text-slate-500" />
                    Profile
                </Link>

                <Link
                    href="/settings"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                >
                    <Settings className="h-4 w-4 text-slate-500" />
                    Settings
                </Link>

                <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-red-400 hover:bg-red-500/10"
                >
                    <LogOut className="h-4 w-4" />
                    Sign out
                </button>

            </div>

        </div>
    );
};
