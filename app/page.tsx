export default function Home() {
  return (
    <div className="prose dark:prose-invert mx-auto">
      <h1>MusicBrainz API Demo</h1>
      <p>
        This demo application showcases the usage of the musicbrainz-api library
        in both server-side and client-side contexts.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Server-side API requests using Next.js API routes</li>
        <li>
          Client-side API requests using the musicbrainz-api library directly
        </li>
        <li>Entity lookup for all available MusicBrainz entities</li>
      </ul>
      <h2>Getting Started</h2>
      <p>
        Choose either the Server-side or Client-side implementation from the
        navigation menu above.
      </p>
    </div>
  );
}
