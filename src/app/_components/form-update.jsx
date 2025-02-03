"use client";

import { useActionState } from "react";
import { updatePostAction } from "../_actions/action-update";

import { Button, Form} from "@heroui/react";

const EditIcon = ({fill = "currentColor", filled, size, height, width, ...props}) => {
  return (
    <svg
      fill={filled ? fill : "none"}
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};



export const FormUpdate = ({id}) => {
  const [_, formAction, pending] = useActionState(updatePostAction, null);

  return (
    <Form className="relative z-20" action={formAction}>
      <input defaultValue={id} name="id" hidden />
      <Button
        isIconOnly
        className="absolute right-0 top-10 text-tiny bg-blue-600/30 hover:bg-blue-500/100 text-white/50 hover:text-white w-50 scale-75 hover:scale-125"
        type="submit"
        isLoading={pending}
      >
        <EditIcon />
      </Button>
    </Form>
  );
};
