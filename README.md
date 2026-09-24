# 🤖 numex-bot

> **Numex AI'ın ilk adımı.** Mart 2025'te yazılmış, GPT-4 destekli küçük bir müşteri destek botu prototipi. Bugünkü **[Numex AI](https://www.numexai.com.tr)** ekosisteminin tohumu burada atıldı.

[![Durum](https://img.shields.io/badge/durum-arşiv%20%2F%20prototip-lightgrey)]()
[![Node](https://img.shields.io/badge/node-%E2%89%A518-green)]()
[![Numex AI](https://img.shields.io/badge/şimdi-numexai.com.tr-6d28d9)](https://www.numexai.com.tr)

> [!NOTE]
> Bu depo tarihsel bir prototiptir. Numex'in bugünkü hali, kendi modelleri (numex-pro/fast/think/vision/code), Detective Mode™, Swarm Konseyi ve Numex API ile **[numexai.com.tr](https://www.numexai.com.tr)** adresinde çalışıyor. Ekosistemin tamamı için: **[numex_nedir](https://github.com/numexai/numex_nedir)**.

## Ne yapar?

Tek bir HTTP uç noktası sunan, ~35 satırlık bir Express sunucusu:

- `POST /message` isteğiyle bir kullanıcı mesajı alır,
- mesajı "Numex" kişiliği tanımlanmış bir sistem istemiyle (kibar, samimi, çözüm odaklı müşteri desteği) GPT-4'e gönderir,
- yanıtı `{ "reply": "..." }` olarak döner.

Fikir, bu uç noktayı bir WhatsApp/Webhook köprüsüne bağlayarak işletmeler için 7/24 destek asistanı kurmaktı.

## Kurulum

```bash
git clone https://github.com/mobilcep/numex-bot.git
cd numex-bot
npm install
cp .env.example .env      # OPENAI_API_KEY değerini girin
npm start                 # http://localhost:3000
```

## Kullanım

```bash
curl -X POST http://localhost:3000/message \
  -H "Content-Type: application/json" \
  -d '{"message":"Merhaba, siparişim ne zaman gelir?"}'
```

```json
{ "reply": "Merhaba! Size yardımcı olmaktan memnuniyet duyarım..." }
```

| Ortam değişkeni | Açıklama |
|---|---|
| `OPENAI_API_KEY` | OpenAI API anahtarı (zorunlu) |
| `PORT` | Sunucu portu (varsayılan `3000`) |

## Bugün aynı işi Numex API ile yapmak

Bu prototipte yapılan şeyin bugünkü karşılığı, **[Numex API](https://github.com/numexai/numex-api)** ve **[numex-sdk](https://github.com/numexai/numex-sdk)**:

```bash
curl https://www.numexai.com.tr/api/v1/chat \
  -H "Authorization: Bearer nx_live_..." \
  -H "Content-Type: application/json" \
  -d '{"message":"Merhaba, siparişim ne zaman gelir?","model":"numex-fast"}'
```

## Yolculuk

| Tarih | Adım |
|---|---|
| 2024 | [Detective Mode](https://github.com/numexai/detective-mode-ai) konsepti yazıldı |
| Mart 2025 | **numex-bot**: ilk çalışan Numex prototipi (bu depo) |
| Bugün | [Numex AI](https://www.numexai.com.tr) · [Codex](https://github.com/numexai/numex-codex) · [API](https://github.com/numexai/numex-api) · [Okul](https://github.com/numexai/numex-okul) · [Market](https://github.com/numexai/numex-market) · [Pedia](https://pedia.numexai.com.tr) |

---

<p align="center">
  <b>Numex AI</b> ailesinin bir parçası · <a href="https://www.numexai.com.tr">numexai.com.tr</a> · <a href="https://github.com/numexai/numex_nedir">Ekosistemi keşfet</a>
</p>
