"use server";

import { revalidatePath } from "next/cache";

export async function createPostAction(_, formData) {
  const title = formData.get("title");
  const location = formData.get("location");
  const description = formData.get("desc");
  const country = formData.get("country");
  // const attachment = formData.get("attachment");

  if (!title || !location || !description || !country) {
    return { message: "All fields are required!" };
  }

  await fetch("https://v1.appbackend.io/v1/rows/KYRr3v8JcbFm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([{ title, location, description, country }]),
  });

  revalidatePath("/");
}
