import React from 'react'
import { Logo } from '@/components/logo'
import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
    product: [
        { name: 'Features', href: '#features' },
        { name: 'Architecture', href: '#architecture' },
        { name: 'Pricing', href: '#pricing' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
    ],
    resources: [
        { name: 'Docs', href: '#' },
        { name: 'API', href: '#' },
        { name: 'Status', href: '#' },
    ],
    legal: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ]
}

const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@oneflow.com', label: 'Email' },
]

export default function Footer() {
    return (
        <footer className="bg-cream border-t border-rule font-sans">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
                    <div className="col-span-2">
                        <Logo className="mb-6" />
                        <p className="text-sm text-ink-2 mb-6 max-w-xs leading-relaxed">
                            A modular Project Management system designed for financial precision and operational clarity.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-8 h-8 rounded-[7px] bg-paper border border-rule flex items-center justify-center hover:bg-ink hover:text-paper transition-all"
                                >
                                    <social.icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-micro mb-6">Product</h3>
                        <ul className="space-y-4">
                            {footerLinks.product.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href}
                                        className="text-sm text-ink-3 hover:text-ink transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-micro mb-6">Company</h3>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href}
                                        className="text-sm text-ink-3 hover:text-ink transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-micro mb-6">Resources</h3>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href}
                                        className="text-sm text-ink-3 hover:text-ink transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-micro mb-6">Legal</h3>
                        <ul className="space-y-4">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href}
                                        className="text-sm text-ink-3 hover:text-ink transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-rule pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-micro">
                        © 2026 OneFlow. All rights reserved.
                    </p>
                    <p className="text-micro italic">
                        Built for precision.
                    </p>
                </div>
            </div>
        </footer>
    )
}
