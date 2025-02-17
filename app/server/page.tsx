"use client"

import { useState } from "react"
import { LookupForm, type LookupFormData } from "@/components/lookup-form"
import { JsonDisplay } from "@/components/json-display"

export default function ServerPage() {
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (formData: LookupFormData) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/lookup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Server-side Lookup</h1>
        <p className="text-muted-foreground">
          This page demonstrates server-side usage of the musicbrainz-api library using Next.js API routes.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <LookupForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
        <div>{data && <JsonDisplay data={data} />}</div>
      </div>
    </div>
  )
}

