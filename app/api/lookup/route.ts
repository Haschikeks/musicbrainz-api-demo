import { MusicBrainzApi } from "musicbrainz-api"

const mbApi = new MusicBrainzApi({
  appName: "mb-api-example",
  appVersion: "0.1.0",
  appContactInfo: "https://github.com/yourusername/mb-api-example",
})

export async function POST(request: Request) {
  try {
    const { entity, mbid } = await request.json()
    const result = await mbApi.lookup(entity, mbid)
    return Response.json(result)
  } catch (error) {
    return Response.json({ error: "Failed to fetch data" }, { status: 500 })
  }
}

