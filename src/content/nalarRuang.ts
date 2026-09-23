export const navItems = [
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Persona", href: "#persona" },
  { label: "Layer Peta", href: "#layer-peta" },
  { label: "FAQ", href: "#faq" },
];

export const highlights = [
  "Visual Explorer",
  "Requirement Search",
  "Smart Point Inspector",
  "Commute Simulator",
];

export const impactStats = [
  { value: "6", label: "Layer Data" },
  { value: "4", label: "Persona Gaya Hidup" },
  { value: "Top 3", label: "Rekomendasi" },
  { value: "100%", label: "Data Publik" },
];

export const personas = [
  { name: "Commuter", className: "persona-commuter" },
  { name: "Driver", className: "persona-driver" },
  { name: "Social and Vibe", className: "persona-social" },
  { name: "Zen", className: "persona-zen" },
];

export const featureCards = [
  {
    title: "Requirement Search",
    description: "Gabungkan kebutuhanmu dan temukan tiga kawasan yang paling sesuai dari irisan data spasial.",
    image: "aerial",
  },
  {
    title: "Smart Point Inspector",
    description: "Periksa satu titik secara rinci dan lihat Persona Grading pada skala nol sampai tiga bintang.",
    image: "neighborhood",
  },
  {
    title: "Commute Simulator",
    description: "Bandingkan perjalanan harian dari calon hunian menuju tempat kerja dan tujuan penting lainnya.",
    image: "commuter",
  },
];

export const layerCards = [
  { title: "Akses dan Mobilitas", image: "commuter" },
  { title: "Fasilitas dan Aktivitas", image: "neighborhood" },
  { title: "Risiko dan Tata Ruang", image: "aerial" },
];

export const ratings = [
  { label: "Commuter", value: 3, color: "bg-persona-commuter" },
  { label: "Driver", value: 2, color: "bg-persona-driver" },
  { label: "Social and Vibe", value: 3, color: "bg-persona-social" },
  { label: "Zen", value: 2, color: "bg-persona-zen" },
];

export const faqs = [
  {
    question: "Datanya dari mana?",
    answer: "NalarRuang memakai data sekunder publik dari OpenStreetMap, Overpass API, InaRISK, dan ATR/BPN.",
  },
  {
    question: "Perlu login atau tidak?",
    answer: "Tidak. Semua fitur dirancang untuk dapat digunakan langsung tanpa akun.",
  },
  {
    question: "Apakah preferensi persona disimpan?",
    answer: "Tidak. Preferensi digunakan selama sesi penelusuran dan tidak disimpan sebagai profil pribadi.",
  },
  {
    question: "Seberapa akurat skornya?",
    answer: "Skor adalah estimasi berbasis ketersediaan dan kualitas data publik, bukan penilaian mutlak sebuah kawasan.",
  },
  {
    question: "Apa cakupan wilayahnya?",
    answer: "Cakupan NalarRuang saat ini terbatas pada wilayah Jabodetabek.",
  },
];