import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Heading, Flex, Text, Card, Box } from "@radix-ui/themes";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import ReactMarkdown from "react-markdown";
import delay from "delay";

interface Props {
  params: { id: string };
}

const IsssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  await delay(2000);
  if (!issue) notFound();

  return (
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
  );
};

export default IsssueDetailPage;
