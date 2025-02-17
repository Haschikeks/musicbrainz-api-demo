"use client";

import { JsonDisplay } from "@/components/json-display";
import { LookupForm, type LookupFormData } from "@/components/lookup-form";
import { MusicBrainzApi } from "musicbrainz-api";
import { useState } from "react";
import pkg from "./../../package.json";

const mbApi = new MusicBrainzApi({
  appName: "mb-api-example",
  appVersion: pkg.version ?? "0.1.0",
  appContactInfo: "https://github.com/haschikeks/musicbrainz-api-demo",
});

export default function ClientPage() {
  const [data, setData] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: LookupFormData) => {
    setIsLoading(true);
    try {
      // @ts-expect-error - We know this is safe because we're using the correct entity type
      const result = await mbApi.lookup(formData.entity, formData.mbid);
      setData(result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Client-side Lookup</h1>
        <p className="text-muted-foreground">
          This page demonstrates client-side usage of the musicbrainz-api
          library directly in the browser.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <LookupForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
        <div>{data != null && <JsonDisplay data={data} />}</div>
      </div>
    </div>
  );
}
