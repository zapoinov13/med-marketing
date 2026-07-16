import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_case_study",
  title: "Кейс: Центр реабилитации",
  description:
    "Возвращает результаты реального кейса маркетинга для медицинского центра реабилитации: заявки, диагностики, пациенты и итоговая выручка.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const caseStudy = {
      client: "Центр реабилитации",
      period_months: 3,
      actions: [
        "Переупаковка оффера и сайта",
        "Запуск таргетированной и контекстной рекламы",
        "Настройка воронки с бесплатной диагностикой",
        "Скрипты и обучение администраторов",
        "Работа с базой через мессенджеры",
      ],
      results: {
        leads: 415,
        diagnostics: 107,
        patients: 29,
        average_check_kzt: 448000,
        revenue_added_kzt: 13000000,
      },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(caseStudy, null, 2) }],
      structuredContent: caseStudy,
    };
  },
});
