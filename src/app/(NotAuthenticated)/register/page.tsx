'use client'

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, Eye, EyeOff, X } from "lucide-react"
import { useState } from 'react'

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: ''
    })

    const [passwordRequirements] = useState([
        { text: "At least 8 characters long", regex: /.{8,}/ },
        { text: "Contains at least one uppercase letter", regex: /[A-Z]/ },
        { text: "Contains at least one lowercase letter", regex: /[a-z]/ },
        { text: "Contains at least one number", regex: /[0-9]/ },
        { text: "Contains at least one special character", regex: /[!@#$%^&*(),.?":{}|<>]/ }
    ])

    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {}

        // Required fields
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        if (!formData.password) newErrors.password = 'Password is required'
        if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password'

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        // Password match validation
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        }

        // Phone number validation (optional)
        const phoneRegex = /^\+?[\d\s-]{10,}$/
        if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Please enter a valid phone number'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            // Handle form submission
            console.log('Form submitted:', formData)
        }
    }

    const checkPasswordRequirement = (regex: RegExp) => {
        return regex.test(formData.password)
    }

    // Add these new components for password input
    const PasswordInput = ({ 
        id, 
        name, 
        value, 
        onChange, 
        error, 
        label 
    }: { 
        id: string;
        name: string;
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        error?: string;
        label: string;
    }) => {
        const [showPassword, setShowPassword] = useState(false)

        return (
            <div className="space-y-2">
            <Label htmlFor={id}>{label}</Label>
            <div className="relative flex items-center">
                <Input
                    id={id}
                    name={name}
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    className={`${error ? 'border-red-500' : ''}`}
                />
                <div 
                    className="absolute right-2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                    )}
                </div>
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
        )
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-xl bg-white">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
                    <CardDescription className="text-center">
                        Fill in your details to create a new account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`bg-white ${errors.firstName && 'border-red-500'} `}
                                />
                                {errors.firstName && (
                                    <p className="text-sm text-red-500">{errors.firstName}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`bg-white ${errors.lastName && 'border-red-500'}`}
                                />
                                {errors.lastName && (
                                    <p className="text-sm text-red-500">{errors.lastName}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`bg-white ${errors.email && 'border-red-500'} `}
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500">{errors.email}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className={` bg-white ${errors.phoneNumber && 'border-red-500'}`}
                            />
                            {errors.phoneNumber && (
                                <p className="text-sm text-red-500">{errors.phoneNumber}</p>
                            )}
                        </div>

                        <PasswordInput
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            error={errors.password}
                            label="Password"
                        />

                        <PasswordInput
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            error={errors.confirmPassword}
                            label="Confirm Password"
                        />

                        <Alert>
                            <AlertDescription>
                                <div className="space-y-2">
                                    <p className="font-medium">Password Requirements:</p>
                                    {passwordRequirements.map((requirement, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            {checkPasswordRequirement(requirement.regex) ? (
                                                <Check className="h-4 w-4 text-green-500" />
                                            ) : (
                                                <X className="h-4 w-4 text-red-500" />
                                            )}
                                            <span className="text-sm">{requirement.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </AlertDescription>
                        </Alert>

                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}