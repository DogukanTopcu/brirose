import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InputField } from '@/components/input-field'
import { SubmitButton } from '@/components/submit-button';
import { signInAction } from '@/app/actions';

export default async function Login() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign in to your account</CardTitle>
          <CardDescription className="text-center">Enter your email and password to sign in</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <SubmitButton pendingText="Signing In..." formAction={signInAction}>
              Sign in
            </SubmitButton>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
