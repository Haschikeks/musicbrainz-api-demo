"use client"

import type React from "react"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const LOOKUP_ENTITIES = [
  "area",
  "artist",
  "collection",
  "event",
  "genre",
  "instrument",
  "label",
  "place",
  "recording",
  "release",
  "release-group",
  "series",
  "url",
  "work",
]

export type LookupFormData = {
  entity: string
  mbid: string
}

interface LookupFormProps {
  onSubmit: (data: LookupFormData) => void
  isLoading?: boolean
}

export function LookupForm({ onSubmit, isLoading }: LookupFormProps) {
  const [entity, setEntity] = useState<string>("")
  const [mbid, setMbid] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (entity && mbid) {
      onSubmit({ entity, mbid })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="entity" className="text-sm font-medium">
          Entity Type
        </label>
        <Select value={entity} onValueChange={setEntity}>
          <SelectTrigger>
            <SelectValue placeholder="Select an entity type" />
          </SelectTrigger>
          <SelectContent>
            {LOOKUP_ENTITIES.map((entity) => (
              <SelectItem key={entity} value={entity}>
                {entity}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label htmlFor="mbid" className="text-sm font-medium">
          MusicBrainz ID (MBID)
        </label>
        <Input
          id="mbid"
          value={mbid}
          onChange={(e) => setMbid(e.target.value)}
          placeholder="Enter MBID"
          className="w-full"
        />
      </div>
      <Button type="submit" className="w-full" disabled={!entity || !mbid || isLoading}>
        {isLoading ? "Loading..." : "Lookup"}
      </Button>
    </form>
  )
}

