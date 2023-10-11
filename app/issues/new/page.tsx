"use client";
import dynamic from "next/dynamic";
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
import Spinner from "@/app/components/Spinner";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

type CreateIssueForm = z.infer<typeof createIssueSchema>;

const newIssuePage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateIssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/");
    } catch (error) {
      setError("An unexpected error is occurred");
    }
  });

  return (
    <div className="max-w-xl">
      <form onSubmit={onSubmit} className="max-w-xl space-y-5">
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
        <Button>
          Submit New Issue
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default newIssuePage;
