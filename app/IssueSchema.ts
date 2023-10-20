import { z } from "zod";

export const IssueSchema = z.object({
  title: z.string().min(1, "This field is required").max(255),
  description: z.string().min(1, "This field is required"),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1, "This field is required").max(255).optional(),
  description: z
    .string()
    .min(1, "This field is required")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "assignedToUserId is required.")
    .max(255)
    .nullable()
    .optional(),
});
