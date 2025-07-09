
import Header from "./components/header";
import Footer from "./components/footer";
import LeptospiroseSection from "./components/letptoSection";
import TratamentoChikungunyaSection from "./components/TratChikSection";
import Zoonoses from "./components/zoonoses";

export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Consulta de medidas profiláticas e condutas frente a exposição a doenças urbanas</h1>
      <Zoonoses></Zoonoses>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <TratamentoChikungunyaSection/>
      <LeptospiroseSection/>
      </div>
    </main>
    <Footer/>
    </>
  );
}
