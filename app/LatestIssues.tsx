import prisma from "@/prisma/client";
import { Table, Flex, Avatar, Card, Heading } from "@radix-ui/themes";
import Link from "next/link";
import { IssueStatusBadge } from "./components";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: { assginedToUser: true },
  });

  return (
    <Card>
      <Heading size="4" mb="5" align="center">
        Lastest Issues
      </Heading>
      <Table.Root className="overflow-hidden">
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex align="center" justify="between">
                  <Flex direction="column" align="start" gap="2">
                    <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                    <IssueStatusBadge status={issue.status} />
                  </Flex>
                  <Avatar fallback="?" radius="full" />
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
