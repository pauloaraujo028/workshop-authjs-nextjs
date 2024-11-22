import { auth } from "@/auth";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import logout from "../(auth)/_actions/logout";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  return (
    <main className="container p-20 mx-auto text-center">
      <div>
        <div className="space-y-4">
          <h1 className="font-extrabold text-slate-600 dark:text-transparent text-7xl dark:bg-gradient-to-r dark:from-slate-50 dark:via-slate-400 dark:to-slate-200 bg-clip-text">
            Dashboard
          </h1>
          <h3 className="mt-4 font-bold text-muted-foreground">BEM VINDO!</h3>
          <Image
            src={session.user?.image ?? ""}
            alt={session.user?.name ?? ""}
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h1>{session.user?.name}</h1>
          <span>{session.user?.email}</span>
        </div>
        <hr className="w-1/4 mx-auto mt-5 mb-16" />

        <section className="flex flex-wrap items-center justify-center gap-3">
          <form action={logout}>
            <Button>Logout</Button>
          </form>
          <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
            Home
          </Link>
        </section>
      </div>
    </main>
  );
}
