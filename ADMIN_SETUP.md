# Admin Kurulum Rehberi

Bu rehber, portfolio siteniz için admin kullanıcısı oluşturma sürecini açıklar.

## Ön Gereksinimler

1. **Veritabanı Bağlantısı**: `.env.local` dosyasında `DATABASE_URL` tanımlanmış olmalı
2. **NextAuth Konfigürasyonu**: `NEXTAUTH_SECRET` ve `NEXTAUTH_URL` tanımlanmış olmalı
3. **Sunucu Çalışıyor**: `npm run dev` ile development server başlatılmış olmalı

## Admin Kullanıcısı Oluşturma

### Yöntem 1: Güvenli Script (Önerilen)

```bash
npm run create-admin
```

Bu komut size şu bilgileri soracak:
- 👤 Admin adı
- 📧 Email adresi  
- 🔑 Şifre (gizli olarak girilir)
- 🔑 Şifre tekrarı (doğrulama için)

### Yöntem 2: Manuel Script Çalıştırma

```bash
node src/scripts/create-admin.js
```

## Güvenlik Özellikleri

✅ **Şifre Gizliliği**: Şifre girişi sırasında ekranda görünmez
✅ **Şifre Doğrulama**: Şifre tekrarı ile doğrulama yapılır
✅ **Email Validasyonu**: Geçerli email formatı kontrol edilir
✅ **Şifre Uzunluğu**: Minimum 6 karakter zorunluluğu
✅ **Duplicate Kontrolü**: Aynı email ile birden fazla kullanıcı engellenir
✅ **Güvenli Hash**: bcryptjs ile şifre hashleme

## Admin Paneline Erişim

Admin kullanıcısı oluşturduktan sonra:

1. **Giriş Sayfası**: http://localhost:3000/admin/login
2. **Oluşturduğunuz email ve şifre ile giriş yapın**
3. **Admin Paneli**: http://localhost:3000/admin

## Sorun Giderme

### "Bağlantı hatası" alıyorsanız:
- Development server'ın çalıştığından emin olun: `npm run dev`
- Port 3000'in kullanılabilir olduğunu kontrol edin

### "Veritabanı hatası" alıyorsanız:
- `.env.local` dosyasında `DATABASE_URL` doğru tanımlandığından emin olun
- Veritabanı şemasının güncel olduğunu kontrol edin: `npm run db:push`

### "Bu email ile zaten kullanıcı mevcut" hatası:
- Farklı bir email adresi kullanın
- Veya mevcut kullanıcıyı veritabanından silin

## Güvenlik Notları

⚠️ **Önemli**: 
- Admin bilgilerini güvenli bir yerde saklayın
- Güçlü şifreler kullanın
- Production ortamında farklı admin bilgileri oluşturun
- Demo bilgileri production'da kullanmayın

## Environment Variables

`.env.local` dosyanızda şu değişkenler tanımlanmış olmalı:

```env
DATABASE_URL="your-neon-database-url"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## Demo Bilgileri

Development ortamında test için:
- **Email**: admin@portfolio.com
- **Şifre**: admin123

⚠️ Bu bilgileri production ortamında kullanmayın!