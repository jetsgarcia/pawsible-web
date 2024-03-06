"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
  return (
    <>
      <div className="mx-auto flex max-h-1000 border border-blue-400 px-0 rounded-md">
        <div className="bg-blue-400 grid place-items-center px-5 flex-1">
          <Image
            className="h-full object-contain"
            src="/logo_default.png"
            alt="logo"
            width={720}
            height={720}
          />
        </div>
        <div className="flex-auto border-blue-400 mx-10 w-64">
          <p className="mt-12 mb-2 text-lg">Login</p>
          <p className="text-3xl mb-16 font-medium">
            It&#39;s good to have you back!
          </p>
          <Input className="mb-6" type="email" placeholder="Email" />
          <Input className="mb-6" type="password" placeholder="Password" />
          <div className="flex justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
              >
                Remember me
              </label>
            </div>
            <Button
              className="text-sm textmd font-normal text-gray-400"
              variant="link"
            >
              Forgot Password
            </Button>
          </div>
          <div className="flex mb-16">
            <Button className="flex-auto">Log in</Button>
          </div>
        </div>
      </div>
    </>
  );
}
