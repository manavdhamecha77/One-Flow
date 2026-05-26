"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogoIcon } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRight, ArrowLeft, Key, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

const demoAccounts = [
    {
        role: 'Admin',
        companyId: 'ONEFLOW001',
        email: 'admin@oneflow.com',
        password: 'admin123',
        description: 'Full visibility'
    },
    {
        role: 'PM',
        companyId: 'ONEFLOW001',
        email: 'pm@oneflow.com',
        password: 'pm123',
        description: 'Orchestration'
    },
    {
        role: 'Member',
        companyId: 'ONEFLOW001',
        email: 'dev1@oneflow.com',
        password: 'dev123',
        description: 'Execution'
    },
    {
        role: 'Finance',
        companyId: 'ONEFLOW001',
        email: 'sales@oneflow.com',
        password: 'sales123',
        description: 'Order flow'
    }
]

export default function LoginComponent() {
    const [companyId, setCompanyId] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [showDemo, setShowDemo] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()

    const fillDemoAccount = (account) => {
        setCompanyId(account.companyId)
        setEmail(account.email)
        setPassword(account.password)
        setError('')
        setShowDemo(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ companyId, email, password }),
                credentials: 'include'
            })

            const data = await res.json()
            if (!res.ok) {
                setError(data.error || 'Login failed')
                setLoading(false)
                return
            }

            const meRes = await fetch('/api/auth/me', { credentials: 'include' })
            if (meRes.ok) {
                const userData = await meRes.json()
                const role = userData.role || 'team_member'
                router.push('/' + role + '/dashboard')
            } else {
                router.push('/dashboard')
            }
        } catch (err) {
            setError('Network error')
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-background flex items-center justify-center p-6 font-sans">
            <div className="w-full max-w-[480px]">
                <div className="relative overflow-hidden bg-card border border-rule rounded-[12px] min-h-[580px] flex flex-col shadow-none transition-all duration-300">
                    
                    {/* Face 1: Login */}
                    <div className={"absolute inset-0 p-8 flex flex-col transition-all duration-500 ease-in-out " + (showDemo ? "-translate-x-full opacity-0 invisible" : "translate-x-0 opacity-100 visible")}>
                        <div className="mb-8 flex justify-between items-start">
                            <div>
                                <Link href="/" className="mb-6 block">
                                    <LogoIcon />
                                </Link>
                                <h1 className="font-serif text-3xl text-ink">Sign In.</h1>
                                <p className="text-ink-2 mt-1">Access your operational hub</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <Button 
                                    type="button" 
                                    variant="ghost" 
                                    onClick={() => setShowDemo(true)}
                                    className="h-10 w-10 p-0 rounded-full bg-teal-soft/50 hover:bg-teal-soft transition-colors"
                                >
                                    <Key className="h-5 w-5 text-teal" />
                                </Button>
                                <span className="text-[9px] text-teal font-bold uppercase tracking-widest animate-pulse">Demo?</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <Label className="text-micro text-ink-3">Company ID</Label>
                                <Input 
                                    className="h-11 rounded-[7px] border-rule bg-background/50 text-ink focus:ring-teal/20" 
                                    placeholder="ONEFLOW001"
                                    value={companyId} 
                                    onChange={(e) => setCompanyId(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-micro text-ink-3">Email</Label>
                                <Input 
                                    type="email"
                                    className="h-11 rounded-[7px] border-rule bg-background/50 text-ink focus:ring-teal/20" 
                                    placeholder="name@company.com"
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <Label className="text-micro text-ink-3">Password</Label>
                                    <Link href="#" className="text-[10px] text-ink-3 hover:text-teal transition-colors uppercase tracking-wider">Reset</Link>
                                </div>
                                <div className="relative">
                                    <Input 
                                        type={showPassword ? "text" : "password"}
                                        className="h-11 rounded-[7px] border-rule bg-background/50 text-ink focus:ring-teal/20 pr-10" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        required 
                                    />
                                    <button 
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-3 hover:text-teal transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>

                            {error && <p className="text-xs text-destructive text-center bg-destructive/5 py-2 rounded-[5px] border border-destructive/10">{error}</p>}

                            <Button className="w-full h-12 bg-teal text-white rounded-[7px] mt-4 hover:opacity-88 transition-all font-medium" disabled={loading}>
                                {loading ? 'Authorizing...' : 'Authorize Access'}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </form>

                        <div className="mt-auto pt-6 border-t border-rule text-center">
                            <p className="text-sm text-ink-3">
                                No account? <Link href="/register" className="text-teal font-medium hover:underline">Register</Link>
                            </p>
                        </div>
                    </div>

                    {/* Face 2: Demo Accounts */}
                    <div className={"absolute inset-0 p-8 flex flex-col transition-all duration-500 ease-in-out " + (!showDemo ? "translate-x-full opacity-0 invisible" : "translate-x-0 opacity-100 visible")}>
                        <div className="mb-6 flex items-center gap-3">
                            <Button 
                                type="button" 
                                variant="ghost" 
                                onClick={() => setShowDemo(false)}
                                className="h-8 w-8 p-0 rounded-full bg-background hover:bg-teal-soft transition-colors"
                            >
                                <ArrowLeft className="h-4 w-4 text-teal" />
                            </Button>
                            <h2 className="font-serif text-2xl text-ink">Seeded Access</h2>
                        </div>
                        
                        <p className="text-sm text-ink-2 mb-8 leading-relaxed">Select a persona to explore the platform with surgical demo data.</p>

                        <div className="grid grid-cols-1 gap-3">
                            {demoAccounts.map((account) => (
                                <button
                                    key={account.role}
                                    onClick={() => fillDemoAccount(account)}
                                    className="p-4 border border-rule rounded-[10px] text-left hover:border-teal hover:bg-teal-soft/20 transition-all group flex justify-between items-center"
                                >
                                    <div>
                                        <span className="text-micro text-teal block mb-1">{account.role}</span>
                                        <span className="block text-sm font-medium text-ink leading-tight">{account.description}</span>
                                    </div>
                                    <div className="h-8 w-8 rounded-full border border-rule flex items-center justify-center text-ink-3 group-hover:text-teal group-hover:border-teal transition-all">
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="mt-auto p-4 bg-background/50 rounded-[8px] border border-rule">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="live-status-dot h-1.5 w-1.5" />
                                <span className="text-micro">Demo Instance</span>
                            </div>
                            <p className="text-[10px] text-ink-3 leading-relaxed italic">
                                These accounts are populated with synthetic project history, real-time margins, and role-specific workflows.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
