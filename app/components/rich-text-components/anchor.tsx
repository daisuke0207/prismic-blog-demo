import { chakra } from "@chakra-ui/react";
import { forwardRef } from "react";

export const Anchor = forwardRef((props: any, ref: any) => (
  <chakra.a ref={ref} apply="mdx.a" {...props} />
));
