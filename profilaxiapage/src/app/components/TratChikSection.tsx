"use client";

import { useEffect, useState } from "react";
interface TratamentoProps {
  aviso: string;
  tratamento_Chikungunya: {
    importante: string[];
    fase_aguda: string[];
    fase_subaguda: string[];
    atencao_aguda: string[];
    atencao_subaguda: string[];
  };
}

export default function TratamentoChikungunyaSection() {
  const [dados, setDados] = useState<TratamentoProps | null>(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch(
      "https://m4-mp-profilaxiaapi-u11n.onrender.com/tratamentoChikungunya/tratamento"
    )
      .then(async (res) => {
        if (!res.ok) throw new Error("Erro ao buscar dados");
        return res.json();
      })
      .then((data: TratamentoProps) => {
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
    <section className="max-w-5xl mx-auto p-6 bg-white rounded-md shadow-lg">
      <h2 className="text-orange-700 font-bold text-2xl mb-6">
        Tratamento Chikungunya
      </h2>
      <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-800 p-4 mb-6 rounded">
        <strong>Aviso:</strong> {dados.tratamento_Chikungunya.importante}
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex-1 bg-blue p-6 rounded-xl shadow-md border space-y-2">
          <h3 className="text-lg font-semibold mb-4 text-orange-500 flex items-center gap-2">
            Fase aguda (até 10 dias)
          </h3>
          <ul className="space-y-4">
            {dados.tratamento_Chikungunya.fase_aguda.map((item, idx) => (
              <li className="bg-orange-100 p-4 rounded-md border border-orange-500"  key={idx}>{item}</li>
            ))}
          </ul>
          <div className="border-l-4 border-orange-500 text-orange-800 p-4 mb-6 rounded">
            <strong>Atenção:</strong> {dados.tratamento_Chikungunya.atencao_aguda}
          </div>
        </div>

        <div className="flex-1 bg-blue p-6 rounded-xl shadow-md border space-y-2">
          <h3 className="text-lg font-semibold mb-4 text-orange-500 flex items-center gap-2">
            Fase subaguda e crônica (após 10 dias até meses)
          </h3>
          <ul className="space-y-4">
            {dados.tratamento_Chikungunya.fase_subaguda.map((item, idx) => (
              <li className="bg-orange-100 p-4 rounded-md border border-orange-500" key={idx}>{item}</li>
            ))}
          </ul>
          <div className=" border-l-4 border-orange-500 text-orange-800 p-4 mb-6 rounded">
            <strong>Atenção:</strong> {dados.tratamento_Chikungunya.atencao_subaguda}
          </div>
        </div>
      </div>
    </section>
  );
}
