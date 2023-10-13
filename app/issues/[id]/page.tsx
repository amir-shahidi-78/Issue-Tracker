import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Heading, Flex, Text, Card, Box, Grid, Button } from "@radix-ui/themes";
import { IssueStatusBadge } from "@/app/components";
import ReactMarkdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const IsssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box className="max-w-3xl">
        <Heading>{issue?.title}</Heading>
        <Flex my="4" gap="5">
          <IssueStatusBadge status={issue.status} />
          <Text>{issue?.createdAt.toDateString()}</Text>
        </Flex>
        <Card>
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IsssueDetailPage;
