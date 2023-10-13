import { Box } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton className="mb-3" height="2rem" />
      <Skeleton height="24rem" />
      <Skeleton className="mt-11" width="9rem" height="2rem" />
    </Box>
  );
};

export default IssueFormSkeleton;
