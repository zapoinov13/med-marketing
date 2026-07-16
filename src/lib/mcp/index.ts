import { defineMcp } from "@lovable.dev/mcp-js";

import getCaseStudyTool from "./tools/get-case-study";
import getContactTool from "./tools/get-contact";
import getExpertTool from "./tools/get-expert";
import getOfferTool from "./tools/get-offer";

export default defineMcp({
  name: "med-marketing-mcp",
  title: "Маркетинг для клиник — MCP",
  version: "0.1.0",
  instructions:
    "Инструменты для получения информации о тестовой неделе маркетинга Юрия Валерьевича для медицинских клиник: оффер, кейс, контакты и данные об эксперте. Используйте get_contact, чтобы получить ссылку WhatsApp для записи.",
  tools: [getOfferTool, getCaseStudyTool, getExpertTool, getContactTool],
});
