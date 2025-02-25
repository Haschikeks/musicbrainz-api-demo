"use client";

import type { LookupFormData } from "@/components/lookup-form";
import { useTheme } from "next-themes";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  a11yDark,
  a11yLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

type PreviewCodeProps = {
  code?: string;
  lookup?: LookupFormData;
};

const BASIC_LOOKUP_CODE = (formData: LookupFormData) => `
import { MusicBrainzApi } from "musicbrainz-api";

const mbApi = new MusicBrainzApi({
  appName: "mb-api-example",
  appVersion: "0.1.0",
  appContactInfo: "mail@example.com",
});

const result = await mbApi.lookup("${formData.entity}", "${formData.mbid}");

`;

function PreviewCode({ code, lookup }: PreviewCodeProps) {
  const { theme } = useTheme();

  let codeContent = code;
  if (lookup) {
    codeContent = BASIC_LOOKUP_CODE(lookup);
  }

  if (!codeContent) {
    return null;
  }
  return (
    <div className="">
      <SyntaxHighlighter
        style={theme === "light" ? a11yLight : a11yDark}
        wrapLines
        language="ts"
      >
        {codeContent}
      </SyntaxHighlighter>
    </div>
  );
}

export default PreviewCode;
