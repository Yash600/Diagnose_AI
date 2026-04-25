import { clerkClient } from "@clerk/nextjs/server";
import {auth} from "@clerk/nextjs/server";
import {notFound} from "next/navigation";
import { db } from "@/server/db";
import { redirect } from "next/navigation";

const SyncUser = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not found");
  }
  const client = await clerkClient()
  const user = await client.users.getUser(userId);
  if(!user.emailAddresses[0]?.emailAddress) {
    return notFound()
  }

  await db.user.upsert({
    where: {
        id: user.id,
    },
    update:{
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
        firstName: user.firstName,
        lastName: user.lastName
    },
    create: {
        id: user.id,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
        firstName: user.firstName,
        lastName: user.lastName,
        password: ""
    }
  })
  return redirect("/dashboard")
}

export default SyncUser
