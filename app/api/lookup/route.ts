import { MusicBrainzApi } from "musicbrainz-api";
import pkg from "./../../../package.json";

const mbApi = new MusicBrainzApi({
  appName: "mb-api-example",
  appVersion: pkg.version ?? "0.1.0",
  appContactInfo: "https://github.com/haschikeks/musicbrainz-api-demo",
});

export async function POST(request: Request) {
  try {
    const { entity, mbid } = await request.json();
    const result = await mbApi.lookup(entity, mbid);
    return Response.json(result);
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
