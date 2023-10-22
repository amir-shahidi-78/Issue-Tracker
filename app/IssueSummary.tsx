import { Status } from "@prisma/client";
import { Flex, Card, Text, Box } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In-Progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];
  return (
    <Flex gap="4">
      {containers.map((container) => (
        <Card
          key={container.status}
          className="realtive shadow-md overflow-hidden"
        >
          <Box className="absolute flex w-full h-0.5 top-0 left-0">
            <Box className="relative w-1/2 h-full bg-gradient-to-l from-purple-600" />
            <Box className="relative w-1/2 h-full bg-gradient-to-r from-purple-600" />
          </Box>
          <Flex direction="column" gap="1" justify="center" align="center">
            <Link
              className="text-sm font-medium"
              href={`/issues?status=${container.status}`}
            >
              {container.label}
            </Link>
            <Text className="font-bold" size="5">
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
