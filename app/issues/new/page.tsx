"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { TextField, Button, Callout, Text } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import z from "zod";
import { createIssueSchema } from "@/app/createIssueSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/app/components/ErrorMessage";

type CreateIssueForm = z.infer<typeof createIssueSchema>;

const newIssuePage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateIssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root className="mb-5" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/");
          } catch (error) {
            setError("An unexpected error is occurred");
          }
        })}
        className="max-w-xl space-y-5"
      >
        <TextField.Root>
          <TextField.Input {...register("title")} placeholder="title" />
        </TextField.Root>
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        <Controller
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE {...field} />}
        />
        {errors && <ErrorMessage>{errors.description?.message}</ErrorMessage>}
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default newIssuePage;
