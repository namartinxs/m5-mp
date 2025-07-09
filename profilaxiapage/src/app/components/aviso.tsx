"use client";

import { useEffect, useState } from "react";
interface AvisoProps {
  aviso: string;
  tratamento_Chikungunya: {
    importante: string[];
    fase_aguda: string[];
    fase_subaguda: string[];
  };
}

export default function Aviso() {
  const [dados, setDados] = useState<AvisoProps| null>(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch(
       "https://m4-mp-profilaxiaapi-u11n.onrender.com/zoonoses/listagemZoonose/raiva"
    )
      .then(async (res) => {
        if (!res.ok) throw new Error("Erro ao buscar dados");
        return res.json();
      })
      .then((data: AvisoProps) => {
        setDados(data);
      })
      .catch((err) => {
        if (err instanceof Error) setErro(err.message);
        else setErro("Erro ao buscar dados");
      });
  }, []);

  if (erro) return <p className="text-red-600 p-6">{erro}</p>;
  if (!dados)
    return <p className="text-orange-600 p-6 font-semibold">Carregando...</p>;

  return (
    
      <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-800 p-4 mb-6 rounded">
        <strong>Aviso:</strong> {dados.aviso}
      </div>
 
  );
}
