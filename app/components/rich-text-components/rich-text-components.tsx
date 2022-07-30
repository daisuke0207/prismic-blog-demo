import { Anchor } from "./anchor";
import CodeBlock from "./codeblock/codeblock";
import { InlineCode } from "./inline-code";
import { LinkedHeading } from "./linked-heading";
import { Pre } from "./pre";
import { Table, TData, THead } from "./table";
import * as Chakra from "@chakra-ui/react";

const { Alert, AspectRatio, Box, chakra, Kbd } = Chakra;

export const RichTextComponents = {
  // heading1: (props: any) => <chakra.h1 apply="mdx.h1" {...props} />,
  // heading2: (props: any) => <LinkedHeading apply="mdx.h2" {...props} />,
  // heading3: (props: any) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  // heading4: (props: any) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
  // a: (props: any) => <Anchor {...props} />,
  // paragraph: (props: any) => <chakra.p apply="mdx.p" {...props} />,
  // hr: (props: any) => <chakra.hr apply="mdx.hr" {...props} />,
  // ul: (props: any) => <chakra.ul apply="mdx.ul" {...props} />,
  // ol: (props: any) => <chakra.ol apply="mdx.ul" {...props} />,
  // li: (props: any) => <chakra.li pb="4px" {...props} />,
  // strong: (props: any) => <Box as="strong" fontWeight="semibold" {...props} />,
  code: InlineCode,
  preformatted: (props: any) => {
    if (typeof props.children === "string") return <Pre {...props} />;
    return <CodeBlock {...props} />;
  },
  // kbd: Kbd,
  // br: ({ reset, ...props }: any) => (
  //   <Box
  //     as={reset ? "br" : undefined}
  //     height={reset ? undefined : "24px"}
  //     {...props}
  //   />
  // ),
  // table: Table,
  // th: THead,
  // td: TData,
  // blockquote: (props: any) => (
  //   <Alert
  //     mt="4"
  //     role="none"
  //     status="warning"
  //     variant="left-accent"
  //     as="blockquote"
  //     rounded="4px"
  //     my="1.5rem"
  //     {...props}
  //   />
  // ),
  // AspectRatio,
};
