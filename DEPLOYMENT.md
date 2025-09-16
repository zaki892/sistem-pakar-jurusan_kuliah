# Panduan Deployment ke GitHub Pages

## 📋 Persiapan

1. **Fork Repository**
   \`\`\`bash
   # Clone repository
   git clone https://github.com/username/sistem-pakar-jurusan.git
   cd sistem-pakar-jurusan
   \`\`\`

2. **Update Konfigurasi**
   - Ubah `basePath` di `next.config.mjs` sesuai nama repository Anda
   - Update `homepage` di `package.json`
   - Sesuaikan `cname` di `.github/workflows/deploy.yml`

## 🚀 Langkah Deployment

### 1. Setup GitHub Repository

1. Buat repository baru di GitHub dengan nama `sistem-pakar-jurusan`
2. Push kode ke repository:
   \`\`\`bash
   git remote add origin https://github.com/username/sistem-pakar-jurusan.git
   git branch -M main
   git push -u origin main
   \`\`\`

### 2. Enable GitHub Pages

1. Buka repository di GitHub
2. Masuk ke **Settings** > **Pages**
3. Pilih **Source**: GitHub Actions
4. Workflow akan otomatis berjalan setelah push ke branch `main`

### 3. Konfigurasi Domain (Opsional)

Jika ingin menggunakan custom domain:

1. Buat file `CNAME` di root directory:
   \`\`\`
   yourdomain.com
   \`\`\`

2. Update DNS settings di domain provider:
   \`\`\`
   Type: CNAME
   Name: www
   Value: username.github.io
   \`\`\`

## ⚙️ Konfigurasi Environment

### Next.js Configuration

File `next.config.mjs` sudah dikonfigurasi untuk GitHub Pages:

\`\`\`javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/sistem-pakar-jurusan' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sistem-pakar-jurusan/' : '',
  images: {
    unoptimized: true,
  },
}
\`\`\`

### GitHub Actions Workflow

File `.github/workflows/deploy.yml` mengatur:

- **Trigger**: Push ke branch `main`
- **Node.js**: Version 18
- **Build**: `npm run build`
- **Deploy**: Menggunakan `peaceiris/actions-gh-pages`

## 🔧 Troubleshooting

### 1. Build Errors

\`\`\`bash
# Clear cache dan reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
\`\`\`

### 2. Path Issues

Pastikan semua asset menggunakan relative path:
\`\`\`javascript
// ✅ Benar
<img src="/images/logo.png" alt="Logo" />

// ❌ Salah
<img src="./images/logo.png" alt="Logo" />
\`\`\`

### 3. 404 Errors

Periksa konfigurasi `basePath` di `next.config.mjs`:
\`\`\`javascript
basePath: '/nama-repository-anda'
\`\`\`

## 📊 Monitoring Deployment

1. **GitHub Actions**: Cek tab "Actions" di repository
2. **Build Logs**: Lihat detail error jika deployment gagal
3. **Live Site**: Akses di `https://username.github.io/sistem-pakar-jurusan`

## 🔄 Update dan Maintenance

### Update Konten

1. Edit file yang diperlukan
2. Commit dan push:
   \`\`\`bash
   git add .
   git commit -m "Update content"
   git push origin main
   \`\`\`

### Update Dependencies

\`\`\`bash
# Update packages
npm update

# Check for vulnerabilities
npm audit fix
\`\`\`

## 📈 Performance Optimization

1. **Image Optimization**: Gunakan format WebP
2. **Code Splitting**: Next.js otomatis melakukan ini
3. **Static Generation**: Semua halaman di-generate sebagai static files
4. **CDN**: GitHub Pages menggunakan CDN global

## 🛡️ Security

1. **HTTPS**: GitHub Pages otomatis menggunakan HTTPS
2. **Dependencies**: Regularly update untuk security patches
3. **Secrets**: Jangan commit API keys atau sensitive data

---

Untuk pertanyaan lebih lanjut, silakan buka issue di repository atau hubungi tim development.
