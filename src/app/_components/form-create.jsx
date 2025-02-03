"use client";

import { useActionState } from "react";
import { createPostAction } from "../_actions/action-create";

import { Button, Form, Input, Select, SelectItem } from "@heroui/react";

export const FormCreate = () => {
  const [state, formAction, pending] = useActionState(createPostAction, null);

  const countries = [
    { id: 0, label: "ID" },
    { id: 1, label: "US" },
    { id: 2, label: "MY" },
    { id: 3, label: "SG" },
  ];

  return (
    <section className="w-fit p-4 bg-slate-200 rounded-2xl mx-auto">
      <Form action={formAction}>
        <h2 className="font-semibold">Add New Journal</h2>
        <div className="grid grid-cols-2 gap-4">
          <Input label="Title" name="title"></Input>
          <Input label="Description" name="desc"></Input>
          <Input label="Location" name="location"></Input>
          <Select label="Select a country" name="country">
            
            <SelectItem key="ID">ID</SelectItem>
            <SelectItem key="MY">MY</SelectItem>
            <SelectItem key="SG">SG</SelectItem>
            <SelectItem key="PH">PH</SelectItem>
          </Select>
          {/* <Input label="Attachment" type="file" name="attachment"></Input> */}
        </div>
        <div>
          <Button type="submit" color="primary" size="lg" isLoading={pending}>
            {pending ? "Submitting..." : "Submit"}
          </Button>
          {state?.message ? <div className="text-red-500 mt-4">{state.message}</div> : null}
        </div>
      </Form>
    </section>
  );
};
