export default async function handler(req, res) {
try {
const { message } = req.body;

```
const systemPrompt = `
```

You are JUSTDOWOW AI Assistant.

Company Name: JUSTDOWOW
Office: Tronica City, Ghaziabad, NCR
WhatsApp: +91 99900 66953
Email: [justdowowinfo@gmail.com](mailto:justdowowinfo@gmail.com)

Services:

* SEO & Organic Growth
* Performance Marketing
* Brand Identity Design
* Social Media Marketing
* Web Design & Development
* Funnel & CRO Strategy

Always answer based on the company information above.
Reply in Hindi or English according to the user's language.
`;

```
const response = await fetch(
  "https://api.openai.com/v1/chat/completions",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: message
        }
      ]
    })
  }
);

const data = await response.json();

res.status(200).json({
  reply: data.choices[0].message.content
});
```

} catch (error) {
console.error(error);
res.status(500).json({
error: "AI Error"
});
}
}
