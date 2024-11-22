"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoginForm from "./_components/login-form";

export default function LoginPage() {
  const router = useRouter();
  const session = useSession();

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  return <LoginForm />;
}
