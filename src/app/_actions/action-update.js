"use server";

import { revalidatePath } from "next/cache";

export async function updatePostAction(_, formData) {
  const _id = formData.get("id");
  const title = formData.get("title");
  const location = formData.get("location");
  const description = formData.get("desc");
  const country = formData.get("country");

  if (!title || !location || !description || !country) {
    return { message: "All fields are required!" };
  }

  await fetch("https://v1.appbackend.io/v1/rows/KYRr3v8JcbFm", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([{ _id, title, location, description, country }]),
  });

  revalidatePath("/");
}
