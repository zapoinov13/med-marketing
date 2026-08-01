import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_expert",
  title: "Об эксперте",
  description: "Возвращает информацию о Юрии Валерьевиче — эксперте, который проводит тестовую неделю маркетинга для компаний.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const expert = {
      name: "Юрий Валерьевич",
      role: "Маркетолог бизнеса",
      highlights: [
        "Более 7 лет в маркетинге услуг",
        "Работал с компанийами реабилитации, стоматологии, косметологии",
        "Кейсы с ростом выручки от 3 до 13 млн ₸ за 3 месяца",
        "Личное участие в каждом проекте на тестовой неделе",
        "Фокус на измеримом результате, а не на «красивых отчётах»",
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(expert, null, 2) }],
      structuredContent: expert,
    };
  },
});
