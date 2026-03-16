import OpenAI from "openai";

export async function POST(req: Request) {

  const { plant } = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const prompt = `
식물 이름: ${plant}

다음 정보를 한국어로 간단하게 알려줘.

1. 특징
2. 물주기
3. 햇빛
4. 시들 때 원인
5. 해결 방법
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "user",
        content: prompt
      }
    ]
  });

  const result = completion.choices[0].message.content;

  return Response.json({ result });
}