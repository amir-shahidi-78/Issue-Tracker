import { Box, Heading, Flex, Card } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const LoadingIssueDetailPage = async () => {
  return (
    <Box className="max-w-3xl">
      <Heading>
        <Skeleton />
      </Heading>
      <Flex my="4" gap="5">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card>
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
