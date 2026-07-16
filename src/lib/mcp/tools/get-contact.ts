import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact",
  title: "Контакты для записи",
  description:
    "Возвращает способы связаться и записаться на бесплатный разбор клиники или тестовую неделю маркетинга: WhatsApp, телефон, ссылка на сайт.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const contact = {
      whatsapp: "+7 747 284 25 95",
      whatsapp_url:
        "https://wa.me/77472842595?text=" +
        encodeURIComponent(
          "Здравствуйте! Хочу получить бесплатный разбор клиники. Клиника: [город, направление].",
        ),
      phone: "+7 747 284 25 95",
      website: "https://med-marketing.lovable.app",
      preferred_channel: "WhatsApp",
      cta: "Бесплатный разбор клиники за 20 минут",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
      structuredContent: contact,
    };
  },
});
