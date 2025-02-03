"use server";

import { revalidatePath } from "next/cache";

export async function deletePostAction(_, formData) {
  const _id = formData.get("id");

  await fetch("https://v1.appbackend.io/v1/rows/KYRr3v8JcbFm", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([_id]),
  });

  revalidatePath("/");
}
