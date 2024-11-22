"use server";

import { signIn } from "@/auth";

export default async function googleLogin(FormData: FormData) {
  await signIn("google");
}
