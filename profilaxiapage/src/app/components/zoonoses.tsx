import ZoonoseRaivaPage from "./zoonosesRaiva";
import ZoonoseChikungunyaPage from "./zoonosesChikungunya";
import ZoonoseLeptospirosePage from "./zoonosesLeptospirose";
import Aviso from "./aviso";

export default function Zoonoses() {
  return (
    <main className="px-4 py-8">
      <section className="max-w-5xl mx-auto p-6 bg-white rounded-md shadow-lg">
        <Aviso />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ZoonoseRaivaPage />
          <ZoonoseLeptospirosePage />
          <ZoonoseChikungunyaPage />
        </div>
      </section>
    </main>
  );
}
