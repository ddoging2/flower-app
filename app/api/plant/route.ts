import OpenAI from "openai";

export async function POST(req: Request) {

  const { plant } = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `
식물 관리 정보를 한국어로 알려줘.

식물: ${plant}

다음 형식으로 답해줘

이름:
특징:
물주기:
햇빛:
시들 때 원인과 해결방법:
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const text = completion.choices[0].message.content;

  return Response.json({ result: text });

}