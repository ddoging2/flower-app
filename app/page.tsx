"use client";

import { useState } from "react";

export default function Home() {

  const [plant, setPlant] = useState("");
  const [result, setResult] = useState("");

  const searchPlant = () => {

    if (!plant) return;

    setResult(
`이름: ${plant}

특징: 대표적인 관상 식물

물주기: 흙이 마르면 물 주기

햇빛: 밝은 햇빛 좋아함

시들 때 원인:
물 부족 / 과습`
    );

  };

  return (

    <div style={{padding:40,fontFamily:"sans-serif"}}>

      <h1>🌿 꽃 관리 도우미</h1>

      <input
        type="text"
        placeholder="꽃 이름 입력"
        value={plant}
        onChange={(e)=>setPlant(e.target.value)}
        style={{padding:10,width:200}}
      />

      <button
        onClick={searchPlant}
        style={{padding:10,marginLeft:10,cursor:"pointer"}}
      >
        검색
      </button>

      <pre style={{marginTop:20}}>
        {result}
      </pre>

    </div>

  );

}