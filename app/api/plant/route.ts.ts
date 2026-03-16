export async function POST(req: Request) {

  const { plant } = await req.json();

  return Response.json({
    result: `
이름: ${plant}

특징:
대표적인 관상 식물입니다.

물주기:
흙이 마르면 물을 충분히 줍니다.

햇빛:
밝은 간접 햇빛을 좋아합니다.

시들 때 원인:
물 부족 또는 과습
`
  });

}