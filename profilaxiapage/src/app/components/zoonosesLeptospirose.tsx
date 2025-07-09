"use client";

import { useEffect, useState } from "react";

interface ZoonoseProps {
  nome: string;
  sintomas: string;
  transmissor: string;
  periodo_de_incubacao: string;
}

export default function ZoonoseLeptospirosePage() {
  const [dados, setDados] = useState<ZoonoseProps | null>(null);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://m4-mp-profilaxiaapi-u11n.onrender.com/zoonoses/listagemZoonose/Leptospirose"
    )
      .then(async (res) => {
        if (!res.ok) throw new Error("Erro ao buscar dados");
        return res.json();
      })
      .then((data: ZoonoseProps) => {
        setDados(data);
      })
      .catch((err) => {
        setErro(err instanceof Error ? err.message : "Erro desconhecido");
        setLoading(true);
      });
  }, []);

 
  if (loading) return <p className="p-6 text-orange-600">Carregando...</p>;
  if (erro) return <p className="p-6 text-red-600">{erro}</p>;
  if (!dados) return null;

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-orange-700 mb-6">{dados.nome}</h1>

      <section className="flex-1 bg-blue p-6 rounded-xl shadow-md border mb-6">
        <h2 className="text-xl font-semibold text-orange-600 mb-2">Sintomas</h2>
        <p className="text-gray-800">{dados.sintomas}</p>
      </section>

      <section className="flex-1 bg-blue p-6 rounded-xl shadow-md border mb-6">
        <h2 className="text-xl font-semibold text-orange-600 mb-2">
          Transmissor
        </h2>
        <p className="text-gray-800">{dados.transmissor}</p>
      </section>

      <section className="flex-1 bg-blue p-6 rounded-xl shadow-md border">
        <h2 className="text-xl font-semibold text-orange-600 mb-2">
          Período de Incubação
        </h2>
        <p className="text-gray-800">{dados.periodo_de_incubacao}</p>
      </section>
    </main>
  );
}
