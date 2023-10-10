import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div>
      <Button>
        <Link href="/issues/new">Create New Issue</Link>
      </Button>
      {issues.map((issue) => (
        <li key={issue.id}>
          {issue.title} {issue.description}
        </li>
      ))}
    </div>
  );
};

export default IssuesPage;
