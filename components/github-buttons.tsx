import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function GitHubButtons() {
  return (
    <div className="flex gap-4 items-center">
      <Link
        href="https://github.com/Borewit/musicbrainz-api"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="secondary">MusicBrainz API GitHub</Button>
      </Link>
      <Link
        href="https://github.com/Haschikeks/musicbrainz-api-demo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="secondary">App Repository</Button>
      </Link>
    </div>
  );
}
