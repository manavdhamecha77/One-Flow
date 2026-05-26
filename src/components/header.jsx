'use client'
import React from 'react'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './mode-toggle'

const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Pricing', href: '#pricing' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    return (
        <header>
            <nav
                className="bg-cream/80  fixed z-20 w-full border-b border-rule backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="relative flex items-center justify-between py-4">
                        <div className="flex items-center gap-12">
                            <Link href="/" aria-label="home" className="flex items-center">
                                <Logo />
                            </Link>

                            <div className="hidden lg:block font-sans">
                                <ul className="flex gap-8">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-micro text-ink-3 hover:text-ink  transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 font-sans">
                            <div className="hidden md:flex items-center gap-6">
                                <Link href="/login" className="text-micro text-ink-3 hover:text-ink  transition-colors">
                                    Login
                                </Link>
                                <Button asChild size="sm" className="bg-teal hover:opacity-88 rounded-[7px] px-6 text-[11px] font-medium uppercase tracking-wider transition-all">
                                    <Link href="/register">
                                        Get Started
                                    </Link>
                                </Button>
                                <ModeToggle />
                            </div>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 block cursor-pointer lg:hidden">
                                {menuState ? <X className="size-6 text-ink " /> : <Menu className="size-6 text-ink " />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuState && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-cream  border-b border-rule p-6 space-y-6 font-sans">
                        <ul className="space-y-4">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setMenuState(false)}
                                        className="text-micro text-ink-3 hover:text-ink  block">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6 border-t border-rule flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <Link href="/login" className="text-micro text-ink-3 hover:text-ink ">
                                    Login
                                </Link>
                                <ModeToggle />
                            </div>
                            <Button asChild size="sm" className="bg-teal rounded-[7px] w-full text-[11px] font-medium uppercase tracking-wider">
                                <Link href="/register">Get Started</Link>
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
