export default async function handler(req, res) {
  try {
    const { text } = req.body;

    const voiceId = "o6qTxWUeRyzRYZyUNDVJ"; // example voice
    const apiKey = process.env.ELEVENLABS_API_KEY;

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": apiKey,
        },
        body: JSON.stringify({
          text: text,
          model_id: "eleven_multilingual_v2",
        }),
      }
    );

    if (!response.ok) {
      return res.status(500).json({ error: "ElevenLabs failed" });
    }

    const audioBuffer = await response.arrayBuffer();

    res.setHeader("Content-Type", "audio/mpeg");
    res.send(Buffer.from(audioBuffer));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}
