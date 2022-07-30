import CodeContainer from "./code-container";
import CopyButton from "./copy-button";
import Highlight from "./highlight";
import { Box } from "@chakra-ui/react";
import theme from "prism-react-renderer/themes/nightOwl";

function CodeBlock(props: any) {
  const { className, viewlines, text } = props;

  const language = className?.replace(/language-/, "");

  return (
    <Box position="relative" zIndex="0">
      <CodeContainer px="0" overflow="hidden">
        <Highlight
          codeString={text}
          theme={theme}
          language={language}
          showLines={viewlines}
        />
      </CodeContainer>
      <CopyButton top="4" code={text} />
    </Box>
  );
}

export default CodeBlock;
