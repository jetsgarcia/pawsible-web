"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  let isLoggedIn = false;

  function goToDashboard() {
    router.push(`/dashboard`);
  }

  return isLoggedIn ? goToDashboard() : <h1>Log in</h1>;
}
