"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface JsonDisplayProps {
  data: unknown;
}

export function JsonDisplay({ data }: JsonDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(JSON.stringify(data, null, 2))
      .catch((error) =>
        console.error("Error copying JSON to clipboard:", error)
      );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg border bg-muted/50 p-4">
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
        onClick={handleCopy}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        <span className="sr-only">{copied ? "Copied" : "Copy JSON"}</span>
        <span className="sr-only">Copy JSON</span>
      </Button>
      <pre className="overflow-x-auto text-sm">
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}
