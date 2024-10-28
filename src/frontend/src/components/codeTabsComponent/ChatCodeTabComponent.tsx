import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useDarkStore } from "../../stores/darkStore";
import IconComponent from "../genericIconComponent";
import { Button } from "../ui/button";

type SimplifiedCodeTabProps = {
  code: string;
  language: string;
};

export default function SimplifiedCodeTabComponent({
  code,
  language,
}: SimplifiedCodeTabProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      return;
    }

    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="dark flex w-full flex-col overflow-hidden rounded-md text-left">
      <div className="flex w-full items-center justify-between bg-muted px-4 py-2">
        <span className="text-sm font-semibold text-white dar">{language}</span>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground bg-card"
          onClick={copyToClipboard}
        >
          {isCopied ? (
            <IconComponent name="Check" className="h-4 w-4" />
          ) : (
            <IconComponent name="Copy" className="h-4 w-4" />
          )}
        </Button>
      </div>
      <SyntaxHighlighter
        language={language.toLowerCase()}
        style={oneDark}
        className="!mt-0 h-full w-full overflow-scroll !rounded-b-md !rounded-t-none text-left !custom-scroll"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
