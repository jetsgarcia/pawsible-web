"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

export default function LoginPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function emailValidator() {
    console.log(emailValue);
    if (emailValue === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
  }

  function passwordValidator() {
    console.log(passwordValue);
    if (passwordValue === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  }

  function login() {
    emailValidator();
    passwordValidator();
  }

  return (
    <>
      <div className="mx-auto flex max-h-1000 border border-blue-400 px-0 rounded-2xl overflow-hidden">
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
          <p className="text-3xl mb-20 font-medium text-gray-800">
            It&#39;s good to have you back!
          </p>
          <Input
            id="email"
            className="mb-1 border-blue-300"
            type="email"
            placeholder="Email"
            onChange={(event) => {
              let value = event.target.value;
              setEmailValue(value);
            }}
          />
          <div className="h-4 mb-2 ml-3 text-xs text-red-500">{emailError}</div>
          <Input
            className="mb-1 border-blue-300"
            type="password"
            placeholder="Password"
            onChange={(event) => {
              let value = event.target.value;
              setPasswordValue(value);
            }}
          />
          <div className="h-4 mb-2 ml-3 text-xs text-red-500">
            {passwordError}
          </div>
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
            <Button className="flex-auto" onClick={login}>
              Log in
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
