"use client";
import { ErrorMessage, Spinner } from "@/app/components";
import { IssueSchema } from "@/app/IssueSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

type CreateIssueForm = z.infer<typeof IssueSchema>;

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateIssueForm>({
    resolver: zodResolver(IssueSchema),
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      if (issue) await axios.patch("/api/issues/" + issue.id, data);
      else await axios.post("/api/issues", data);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setError("An unexpected error is occurred");
    }
  });

  return (
    <div className="max-w-xl">
      <form onSubmit={onSubmit} className="max-w-xl space-y-5">
        <TextField.Root>
          <TextField.Input
            defaultValue={issue?.title}
            {...register("title")}
            placeholder="title"
          />
        </TextField.Root>
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        <Controller
          defaultValue={issue?.description}
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE {...field} />}
        />
        {errors && <ErrorMessage>{errors.description?.message}</ErrorMessage>}
        <Button>
          {issue ? "Update Issue" : "Submit New Issue"}{" "}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
