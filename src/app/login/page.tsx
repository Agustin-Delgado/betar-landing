'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { LockIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-accent px-4">
      <Card className="w-full max-w-md rounded-none shadow-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold text-center">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="border-foreground rounded-none shadow-none h-9 text-base sm:text-lg" />
              <p className={cn("text-red-500 text-left text-sm", error ? "visible" : "invisible")}>{error}</p>
            </div>
            <Button type="submit" className="w-full">
              <LockIcon className="mr-2 h-4 w-4" /> Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

