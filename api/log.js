export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "Missing content" });
  }

  try {
    const discordWebhookUrl = "https://discord.com/api/webhooks/1398095259790999624/cEBFYTsfDfveYVclwoq22tXCoJMie0WErkaH0vN_2DbU-JYsp3C6szzFPFPQPKKPbu6D";

    await fetch(discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content })
    });

    res.status(200).json({ message: "Sent to Discord" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send", error: error.toString() });
  }
}
