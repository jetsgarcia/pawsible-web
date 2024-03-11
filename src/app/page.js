"use client";

import LoginPage from "@/components/auth/LoginPage";
import Login from "@/components/auth/LoginPage";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  let isLoggedIn = false;

  function goToDashboard() {
    router.push(`/dashboard`);
  }

  return (
    <div className="grid place-items-center h-screen">
      {isLoggedIn ? goToDashboard() : <LoginPage />}
    </div>
  );
}
