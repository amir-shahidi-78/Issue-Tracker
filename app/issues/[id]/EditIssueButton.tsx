import { Button, Flex } from "@radix-ui/themes";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button className="flex w-full">
      <Pencil2Icon />
      <Link className="" href={`/issues/edit/${issueId}`}>
        Edit Issue
      </Link>
    </Button>
  );
};

export default EditIssueButton;
