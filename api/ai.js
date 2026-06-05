export default async function handler(req, res) {
  try {
    const { message } = req.body;

    const response = await fetch("AI_API_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.AI_API_KEY}`
      },
      body: JSON.stringify({
        prompt: `
You are a real estate assistant.

Use ONLY this website info:
- Office: YOUR ADDRESS HERE
- Company: YOUR NAME HERE
- Services: Plots, Property Deals

User asked: ${message}
Answer clearly in Hindi/English.
        `
      })
    });

    const data = await response.json();

    res.json({ reply: data.reply || "No response" });

  } catch (err) {
    res.status(500).json({ error: "AI error" });
  }
}
