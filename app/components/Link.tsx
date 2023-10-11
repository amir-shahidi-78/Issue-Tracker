import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  children: string;
  href: string;
}

const Link = ({ children: chidlren, href }: Props) => {
  return (
    <NextLink passHref legacyBehavior href={href}>
      <RadixLink>{chidlren}</RadixLink>
    </NextLink>
  );
};

export default Link;
