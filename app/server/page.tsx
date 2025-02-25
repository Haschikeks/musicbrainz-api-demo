"use client";

import { JsonDisplay } from "@/components/json-display";
import { LookupForm, type LookupFormData } from "@/components/lookup-form";
import PreviewCode from "@/components/preview-code";
import { useState } from "react";

export default function ServerPage() {
  const [data, setData] = useState<unknown>(null);
  const [formData, setFormData] = useState<LookupFormData | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: LookupFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/lookup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setData(result);
      setFormData(formData);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Server-side Lookup</h1>
        <p className="text-muted-foreground">
          This page demonstrates server-side usage of the musicbrainz-api
          library using Next.js API routes.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex gap-2 flex-col">
          <LookupForm onSubmit={handleSubmit} isLoading={isLoading} />
          <PreviewCode lookup={formData} />
        </div>
        <div>{data != null && <JsonDisplay data={data} />}</div>
      </div>
    </div>
  );
}
