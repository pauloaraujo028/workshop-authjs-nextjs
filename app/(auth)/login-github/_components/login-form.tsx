"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiGithub } from "@icons-pack/react-simple-icons";
import githubLogin from "../_actions/githubLogin";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-96">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Entre com GitHub</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={githubLogin} className="text-left ">
          <Button size="lg" type="submit" className="w-full mt-10">
            <SiGithub className="mr-2" />
            Login com GitHub
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
