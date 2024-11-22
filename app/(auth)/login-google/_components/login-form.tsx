"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import googleLogin from "../_actions/googleLogin";

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-96">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Entre com Google</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={googleLogin} className="text-left ">
          <Button size="lg" type="submit" className="w-full mt-10">
            Login com Google
          </Button>
        </form>
      </CardContent>

      <Link
        className={cn(buttonVariants({ variant: "link", size: "lg" }), "mt-8")}
        href="/"
      >
        Voltar para Home
      </Link>
    </Card>
  );
}
