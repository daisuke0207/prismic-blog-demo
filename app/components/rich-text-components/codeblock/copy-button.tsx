import type { BoxProps } from "@chakra-ui/react";
import { useClipboard, Box } from "@chakra-ui/react";
import { CheckSmall, Clipboard } from "@icon-park/react";

interface CopyButtonProps extends BoxProps {
  code: string;
}

function CopyButton({ code, ...props }: CopyButtonProps) {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <Box
      top={0}
      zIndex="1"
      right="1.25em"
      position="absolute"
      height="24px"
      cursor="pointer"
      opacity="1"
      _hover={{
        opacity: ".5",
      }}
      {...props}
    >
      {hasCopied ? (
        <CheckSmall theme="outline" size="20" fill="#ffffff" />
      ) : (
        <Clipboard theme="outline" size="20" fill="#ffffff" onClick={onCopy} />
      )}
    </Box>
  );
}

export default CopyButton;
