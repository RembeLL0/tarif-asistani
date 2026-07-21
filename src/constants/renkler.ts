// "Zümrüt Gece" paleti — koyu antrasit zemin, zümrüt yeşili vurgu.
export const Renk = {
  ana: '#2FBF71', // zümrüt
  anaKoyu: '#10995A',
  anaSoft: 'rgba(47,191,113,0.14)', // zümrütün saydam zemin hali
  safran: '#E3B04B', // altın vurgu (süre, eksik malzeme)
  arka: '#191D1B', // koyu antrasit
  kart: '#232927',
  yazi: '#ECF2EE',
  soluk: '#93A39B',
  cizgi: '#313935',
  yesil: '#3DDC97',
  yesilAcik: 'rgba(61,220,151,0.15)',
  sari: '#E3B04B',
  sariAcik: 'rgba(227,176,75,0.15)',
  patlican: '#C9A0DC', // kokteyl vurgusu (açık leylak)
  morSoft: 'rgba(150,110,180,0.18)',
};

export const Gradyan = {
  ana: ['#34D399', '#0B8457'] as const, // zümrüt
  safran: ['#E9BE5A', '#C08A2D'] as const, // altın
  nane: ['#2AA5A0', '#0F6E6A'] as const, // camgöbeği
  patlican: ['#8A5FA0', '#5A3A75'] as const, // mürdüm
  kakao: ['#8A6A4B', '#59402A'] as const,
  gece: ['#242927', '#141816'] as const,
};

// Mutfak kartları için sırayla dönen degrade seti.
export const MutfakGradyanlari = [
  Gradyan.ana,
  Gradyan.nane,
  Gradyan.safran,
  Gradyan.kakao,
  Gradyan.patlican,
];

export const golge = {
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.35,
  shadowRadius: 12,
  elevation: 6,
};
