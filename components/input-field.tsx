"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'

interface InputFieldProps {
  label: string
  type: 'email' | 'password'
  name: string
  placeholder: string
}

export function InputField({ label, type, name, placeholder }: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const icon = type === 'email' ? <Mail className="h-4 w-4 text-gray-500" /> : <Lock className="h-4 w-4 text-gray-500" />

  return (
    <div className="space-y-2">
      <Label htmlFor={type}>{label}</Label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {icon}
        </div>
        <Input
          type={type === 'password' && showPassword ? 'text' : type}
          name={name}
          id={type}
          placeholder={placeholder}
          className="pl-10 pr-10"
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? <EyeOff className="h-4 w-4 text-gray-500" /> : <Eye className="h-4 w-4 text-gray-500" />}
          </button>
        )}
      </div>
    </div>
  )
}

