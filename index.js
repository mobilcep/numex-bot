const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require("openai");
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/message', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "Sen Numex adında, ofis koltuğu ve müşteri destek konusunda uzman bir yapay zekasın. Kullanıcıya kibar, samimi ve çözüm odaklı bir şekilde cevap ver." },
        { role: "user", content: userMessage }
      ],
    });

    const botResponse = completion.choices[0].message.content;
    res.json({ reply: botResponse });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Bir hata oluştu." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Numex sunucusu ${PORT} portunda çalışıyor.`);
});
