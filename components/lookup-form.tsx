"use client";

import Combobox from "@/components/combobox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type React from "react";
import { useState } from "react";

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
] as const;

export type LookupFormData = {
  entity: (typeof LOOKUP_ENTITIES)[number];
  mbid: string;
};

interface LookupFormProps {
  onSubmit: (data: LookupFormData) => void;
  isLoading?: boolean;
}

export function LookupForm({ onSubmit, isLoading }: LookupFormProps) {
  const [entity, setEntity] = useState<string>("");
  const [mbid, setMbid] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (entity && mbid) {
      onSubmit({
        entity: entity as LookupFormData["entity"],
        mbid: mbid.trim(),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="entity" className="text-sm font-medium">
          Entity Type
        </label>
        <Combobox
          onChange={setEntity}
          options={LOOKUP_ENTITIES.map((e) => ({ label: e, value: e }))}
          value={entity}
        />
        {/*<Select value={entity} onValueChange={setEntity}>*/}
        {/*  <SelectTrigger>*/}
        {/*    <SelectValue placeholder="Select an entity type" />*/}
        {/*  </SelectTrigger>*/}
        {/*  <SelectContent>*/}
        {/*    {LOOKUP_ENTITIES.map((entity) => (*/}
        {/*      <SelectItem key={entity} value={entity}>*/}
        {/*        {entity}*/}
        {/*      </SelectItem>*/}
        {/*    ))}*/}
        {/*  </SelectContent>*/}
        {/*</Select>*/}
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
        <div className="pt-2">
          <p>Example Artist:</p>
          <ul>
            <li>
              Eminem:{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1">
                b95ce3ff-3d05-4e87-9e01-c97b66af13d4
              </code>
            </li>
          </ul>
        </div>
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={!entity || !mbid || isLoading}
      >
        {isLoading ? "Loading..." : "Lookup"}
      </Button>
    </form>
  );
}
