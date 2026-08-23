export const siteConfig = {
  brandName: "DisTech",
  fullName: "Digital Solution Technology",
  tagline: "BUILD YOUR PROJECT. WE MAKE IT DIGITAL.",
  subtagline: "Solusi pengembangan website untuk mahasiswa yang modern, fungsional, dan sesuai kebutuhan project.",
  positioning: "Jasa Pengembangan Website & Pendampingan Project untuk Mahasiswa",
  trustText: "Website Development • UI/UX • Debugging • Project Support",

  contact: {
    // [PLACEHOLDER] Silakan ubah data kontak di bawah ini dengan data asli Anda:
    whatsapp: "+62 856-0359-1282", // [PLACEHOLDER: Masukkan nomor WA]
    whatsappUrl: "https://wa.me/6285603591282?text=Halo%20DisTech,%20saya%20ingin%20konsultasi%20mengenai%20project%20website", // [PLACEHOLDER: Masukkan URL WA]
    instagram: "@distech.id", // [PLACEHOLDER: Masukkan username IG]
    instagramUrl: "https://instagram.com/distech.id",
    github: "github.com/USERNAME", // [PLACEHOLDER: Masukkan username GitHub]
    githubUrl: "https://github.com/USERNAME", // [PLACEHOLDER: Masukkan URL GitHub]
    email: "hello@distech.id", // [PLACEHOLDER: Masukkan email]
    emailUrl: "mailto:hello@distech.id",
  },

  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "Layanan", href: "#layanan" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Proses", href: "#proses" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
  ],

  pricing: [
    {
      id: "starter",
      title: "STARTER",
      price: "Mulai dari Rp XXX.XXX",
      badge: "Untuk Website Simple",
      description: "Cocok untuk website sederhana, landing page, atau website profile tugas.",
      features: [
        "1-3 Halaman Responsive",
        "Tampilan Modern & Mobile Friendly",
        "HTML / CSS / JavaScript Native",
        "Struktur Kode Rapi & Terorganisir",
        "Bantuan Setup & Panduan Running",
        "1x Revision / Minor Adjustments"
      ],
      popular: false,
      ctaText: "Pilih Package Starter"
    },
    {
      id: "business",
      title: "BUSINESS",
      price: "Mulai dari Rp X.XXX.XXX",
      badge: "Paling Populer",
      description: "Cocok untuk project website yang memerlukan interaktivitas & fitur lengkap.",
      features: [
        "Multi-Page & Dashboard Website",
        "Fitur CRUD, Auth & Form Processing",
        "Pilihan Framework (Laravel / React)",
        "Integrasi Database & API Web",
        "Debugging & Fix Existing Code",
        "Konsultasi Pengerjaan & Code Review",
        "Garansi Bebas Error/Bug Saat Handover"
      ],
      popular: true,
      ctaText: "Pilih Package Business"
    },
    {
      id: "custom",
      title: "CUSTOM",
      price: "Custom Price",
      badge: "Kebutuhan Kompleks",
      description: "Untuk kebutuhan project yang lebih kompleks, fitur khusus, atau pendampingan intensif.",
      features: [
        "Custom Fitur & Architecture",
        "Kompleksitas Fitur Sesuai Request",
        "Pendampingan & Bimbingan Project",
        "UI/UX Design Custom (Figma to Code)",
        "Priority Technical Support",
        "Revisi Sesuai Kebutuhan Project"
      ],
      popular: false,
      ctaText: "Konsultasi Custom Project"
    }
  ],

  reasons: [
    {
      number: "01",
      title: "Fokus pada Website",
      description: "Kami fokus pada pengembangan website dan project web, sehingga hasil pengerjaan lebih maksimal dan terarah."
    },
    {
      number: "02",
      title: "Memahami Kebutuhan Mahasiswa",
      description: "Solusi dibuat dengan mempertimbangkan kebutuhan project mahasiswa, standar tugas akhir, dan tenggat waktu pengerjaan."
    },
    {
      number: "03",
      title: "Modern & Responsive",
      description: "Website dirancang menggunakan standar teknologi modern agar tampil optimal di layar desktop, tablet, maupun smartphone."
    },
    {
      number: "04",
      title: "Komunikasi Jelas",
      description: "Proses kerja, ruang lingkup fitur, dan kebutuhan project dibahas secara transparan dan terstruktur sejak awal."
    }
  ],

  workflowSteps: [
    {
      step: "01",
      title: "Konsultasi",
      description: "Diskusikan kebutuhan, skala, dan tujuan project website yang ingin dibuat atau diperbaiki."
    },
    {
      step: "02",
      title: "Analisis",
      description: "Tentukan fitur utama, alur sistem, pilihan teknologi web, dan struktur file website."
    },
    {
      step: "03",
      title: "Development",
      description: "Mulai proses coding, perancangan UI/UX responsive, integrasi fitur, dan fungsionalitas web."
    },
    {
      step: "04",
      title: "Testing",
      description: "Periksa kelancaran fungsi, uji tampilan responsive layout pada berbagai device, serta basmi bug/error."
    },
    {
      step: "05",
      title: "Delivery",
      description: "Project diserahkan dalam bentuk kode bersih siap pakai beserta penjelasan teknisnya."
    }
  ]
};
