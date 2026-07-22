// Malzeme miktarı metnini kişi sayısına göre orantılı olarak ölçekler.
// Örnekler:
//   miktarOlcekle('1,5 su bardağı (250 g)', 2)  → '3 su bardağı (500 g)'
//   miktarOlcekle('yarım çay kaşığı', 2)          → '1 çay kaşığı'
//   miktarOlcekle('3 adet olgun (450 g)', 0.5)    → '1,5 adet olgun (225 g)'
//   miktarOlcekle('8-10 yaprak', 2)               → '16-20 yaprak'

function sayiCoz(s: string): number {
  return parseFloat(s.replace(',', '.'));
}

function sayiBicimle(n: number): string {
  // Küçük değerleri (kaşık, adet) en yakın çeyreğe yuvarla; büyük değerleri (g, ml) tam sayıya.
  const r = n >= 10 ? Math.round(n) : Math.round(n * 4) / 4;
  if (r === 0.25) return 'çeyrek';
  if (r === 0.5) return 'yarım';
  if (Number.isInteger(r)) return String(r);
  return r.toFixed(2).replace(/0+$/, '').replace(/\.$/, '').replace('.', ',');
}

export function miktarOlcekle(miktar: string, oran: number): string {
  if (!miktar || oran === 1) return miktar;

  // "yarım" ve "çeyrek" kelimelerini sayıya çevir ki ölçeklenebilsinler.
  let s = miktar
    .replace(/\byarım\b/gi, '0,5')
    .replace(/\bçeyrek\b/gi, '0,25');

  // Sayıları (ve "8-10" gibi aralıkları) tek geçişte bulup ölçekle.
  const re = /(\d+(?:,\d+)?)(\s*[-–]\s*)(\d+(?:,\d+)?)|(\d+(?:,\d+)?)/g;
  s = s.replace(re, (_m, a, sep, b, tek) => {
    if (tek !== undefined) return sayiBicimle(sayiCoz(tek) * oran);
    return `${sayiBicimle(sayiCoz(a) * oran)}${sep.replace(/\s/g, '')}${sayiBicimle(sayiCoz(b) * oran)}`;
  });

  return s;
}
