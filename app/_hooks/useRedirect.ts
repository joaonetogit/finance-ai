import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function useRedirect(path: string) {
  const { userId } = await auth();

  if (userId) {
    redirect(path);
  }
}
