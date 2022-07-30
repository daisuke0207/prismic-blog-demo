import { liveEditorStyle } from './styles'
import { chakra } from '@chakra-ui/react'
import type {
  Language,
  PrismTheme} from 'prism-react-renderer';
import BaseHighlight, {
  defaultProps
} from 'prism-react-renderer'

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false
  }

  const lineNumbers =
    RE.exec(meta)![1]
      .split(`,`)
      .map((v) => v.split(`-`).map((x) => parseInt(x, 10))) || null

  return (index: number) => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
    )
    return inRange
  }
}

interface HighlightProps {
  codeString: string
  language: Language
  theme: PrismTheme
  metastring?: string
  showLines?: boolean
}

function Highlight({
  codeString,
  language,
  metastring,
  showLines,
  ...props
}: HighlightProps) {
  const shouldHighlightLine = calculateLinesToHighlight(metastring || '')

  return (
    <BaseHighlight
      {...defaultProps}
      code={codeString}
      language={language}
      {...props}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div style={liveEditorStyle} data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })
              return (
                <chakra.div
                  key={i}
                  px='5'
                  bg={shouldHighlightLine(i) ? 'whiteAlpha.200' : undefined}
                  {...lineProps}
                >
                  {showLines && (
                    <chakra.span opacity={0.3} mr='6' fontSize='xs'>
                      {i + 1}
                    </chakra.span>
                  )}
                  {line.map((token, key) => (
                    <chakra.span
                      key={key}
                      {...getTokenProps({ token, key })}
                      overflowX='scroll'
                    />
                  ))}
                </chakra.div>
              )
            })}
          </pre>
        </div>
      )}
    </BaseHighlight>
  )
}

export default Highlight
