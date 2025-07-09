"use client"
import { useEffect, useState } from "react";
import { getLeptospirose } from "@/utils/api";

interface LeptospiroseResponse {
  
  MEDIDAS_DE_PREVENÇÃO_AMBIENTAS: string[];
  MEDIDAS_DE_PREVENÇÃO_PESSOAIS: string[];
}

export default function LeptospiroseSection() {
  const [dados, setDados] = useState<LeptospiroseResponse | null>(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    getLeptospirose()
      .then(setDados)
      .catch((err: unknown) => {
        if (err instanceof Error) setErro(err.message);
        else setErro("Erro ao buscar dados");
      });
  }, []);

  if (erro) return <p className="text-red-500">{erro}</p>;
  if (!dados) return <p className="text-gray-600">Carregando...</p>;

  return (
    <section className="max-w-5xl mx-auto p-6 bg-white rounded-md shadow-lg">
     

      <h2 className="font-bold text-2xl mb-6 text-green-800">Prevenção - Leptospirose</h2>

      <div className="flex flex-col gap-y-4">
        
        <div className="flex-1 bg-blue p-6 rounded-xl shadow-md border">
          <h3 className="text-lg font-semibold mb-4 text-green-700 flex items-center gap-2">
            Prevenções Pessoais
          </h3>
          <ul className="space-y-3">
            {dados.MEDIDAS_DE_PREVENÇÃO_PESSOAIS.map((item, idx) => (
              <li key={idx} className="bg-green-50 p-4 rounded-md border text-green-800">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 bg-white p-6 rounded-xl shadow-md border">
          <h3 className="text-lg font-semibold mb-4 text-green-700 flex items-center gap-2">
            Prevenções Ambientais
          </h3>
          <ul className="space-y-3">
            {dados.MEDIDAS_DE_PREVENÇÃO_AMBIENTAS.map((item, idx) => (
              <li key={idx} className="bg-green-50 p-4 rounded-md border text-green-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
