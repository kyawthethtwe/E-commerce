'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [showTerms, setShowTerms] = useState(false)
  const [hasReadTerms, setHasReadTerms] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const termsRef = useRef<HTMLDivElement>(null)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement
    const reachedBottom = Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1
    if (reachedBottom) {
      setHasReadTerms(true)
    }
  }

  const handleLogin = () => {
    setShowTerms(true)
  }

  const handleContinue = () => {
    // Handle actual login logic here
    console.log('Proceeding with login...')
    setShowTerms(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" placeholder="Enter your username" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>
            <Button className="w-full" onClick={handleLogin} type="button">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>

      <Dialog open={showTerms} onOpenChange={setShowTerms}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Terms and Conditions</DialogTitle>
          </DialogHeader>
          <div 
            ref={termsRef}
            onScroll={handleScroll}
            className="max-h-[300px] overflow-y-auto prose prose-sm"
          >
            <h3>1. Introduction</h3>
            <p>Welcome to our website. These terms and conditions govern your use of our website...</p>
            
            <h3>2. User Agreements</h3>
            <p>By accessing this website, you agree to be bound by these terms and conditions...</p>
            
            <h3>3. Privacy Policy</h3>
            <p>Your privacy is important to us. Please review our Privacy Policy...</p>
            
            {/* Add more sections to make content scrollable */}
            <h3>4. User Responsibilities</h3>
            <p>Users are responsible for maintaining the confidentiality of their account...</p>
            
            <h3>5. Intellectual Property</h3>
            <p>All content on this website is protected by intellectual property rights...</p>
            
            <h3>6. Limitation of Liability</h3>
            <p>We shall not be liable for any indirect, incidental, special, consequential...</p>
            
            <h3>7. Termination</h3>
            <p>We reserve the right to terminate or suspend access to our services...</p>
          </div>
          
          <div className="flex items-center space-x-2 mt-4">
            <Checkbox 
              id="terms" 
              disabled={!hasReadTerms}
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            />
            <Label htmlFor="terms">
              I have read and agree to the terms and conditions
            </Label>
          </div>

          <Button 
            onClick={handleContinue}
            disabled={!agreedToTerms}
            className="w-full mt-4"
          >
            Continue
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}