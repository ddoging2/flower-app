"use client";

import { useState } from "react";

export default function Home() {

  const [query,setQuery] = useState("");
  const [result,setResult] = useState("");

  const search = async () => {

    if(!query) return;

    const res = await fetch("/api/plant",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({plant:query})
    });

    const data = await res.json();

    setResult(JSON.stringify(data,null,2));

  };

  return (

    <div style={{maxWidth:500,margin:"40px auto",fontFamily:"sans-serif"}}>

      <h1>🌿 꽃 관리 도우미</h1>

      <input
      placeholder="꽃 이름 입력"
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
      style={{width:"70%",padding:10}}
      />

      <button
      onClick={search}
      style={{padding:10,marginLeft:10}}
      >
      검색
      </button>

      <pre style={{marginTop:30}}>
        {result}
      </pre>

    </div>

  );

}