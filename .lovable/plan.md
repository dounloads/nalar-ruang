# NalarRuang Landing Page

## Ringkasan
Membangun halaman utama NalarRuang yang mengikuti komposisi referensi secara ketat, memakai foto kota nyata, tipografi editorial, warna datar, dan navigasi menuju halaman aplikasi sementara.

## Yang akan dibangun
- Navbar putih dengan tautan bagian, label Baru, dan tombol utama.
- Hero foto penuh dengan teks di kiri bawah dan bilah fitur navy.
- Pernyataan misi, filmstrip foto kawasan, dan empat angka dampak.
- Diagram empat persona yang saling beririsan.
- Tiga kartu fitur dengan foto, bagian enam layer peta, dan sumber data terbuka.
- Contoh penilaian interaktif dengan pilihan Titik atau Wilayah.
- FAQ berbentuk accordion, ajakan penutup, dan footer tiga kolom.
- Halaman `/app` sederhana bertuliskan “Segera hadir”.

## Interaksi dan gerak
- GSAP ScrollTrigger untuk kemunculan halus ke atas, dengan dukungan preferensi pengurangan gerak.
- Accordion FAQ, pilihan Titik atau Wilayah, tautan bagian, dan fokus keyboard yang terlihat.

## Arah visual
- Fraunces hanya untuk judul besar dan Inter untuk seluruh teks lain.
- Palet off white, cream, navy, dan warna persona sesuai spesifikasi.
- Semua tombol dan kartu menggunakan warna datar. Tidak ada mockup, glassmorphism, kartu miring, atau sorotan warna sebagian judul.
- Hero memakai satu foto penuh, dengan lapisan gelap untuk menjaga keterbacaan.

## Teknis
- Mempertahankan TanStack Router bawaan proyek untuk rute `/` dan `/app`.
- Token visual terpusat di sistem Tailwind CSS v4, dengan konstanta copy terpisah dan satu komponen per bagian.
- Metadata SEO lengkap untuk setiap halaman.
- Pemeriksaan akhir pada desktop dan mobile, termasuk susunan bagian, kontras, overflow, interaksi, serta kesehatan preview.
