import OpenAI from "openai";

export async function POST(req: Request) {

  const { plant } = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "user",
        content: `식물 관리 정보를 알려줘: ${plant}
물주기, 햇빛, 시들 때 원인`
      }
    ]
  });

  return Response.json({
    result: completion.choices[0].message.content
  });

}