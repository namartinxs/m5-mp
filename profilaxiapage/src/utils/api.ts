export async function getLeptospirose() {
  const res = await fetch('https://m4-mp-profilaxiaapi-u11n.onrender.com/prevencaoLeptospirose/medidasPrevencaoLeptospirose');
  if (res.status !== 200) throw new Error('Failed to fetch Leptospirose data');
  return res.json();
}

export async function getChikungunya() {
  const res = await fetch('https://m4-mp-profilaxiaapi-u11n.onrender.com/tratamentoChikungunya/tratamento');
  if (!res.ok) throw new Error('Failed to fetch Chikungunya data');
  return res.json();
} 

export async function getZoonoses(zoonose:string) {
  const res = await fetch(`https://m4-mp-profilaxiaapi-u11n.onrender.com/zoonoses/listagemZoonose/${zoonose}`);
  if (!res.ok) throw new Error('Failed to fetch Zoonoses data');
  return res.json();
}
