import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

function CodeContainer(props: BoxProps) {
  return <Box padding="5" rounded="8px" my="8" bg="#011627" {...props} />;
}

export default CodeContainer;
