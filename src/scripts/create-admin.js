// İlk admin kullanıcısını oluşturmak için script

async function createAdmin() {
  try {
    const response = await fetch('http://localhost:3000/api/admin/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'admin@portfolio.com',
        password: 'admin123',
        name: 'Admin User'
      }),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Admin kullanıcısı başarıyla oluşturuldu!');
      console.log('📧 Email: admin@portfolio.com');
      console.log('🔑 Şifre: admin123');
      console.log('👤 İsim:', result.user.name);
    } else {
      console.error('❌ Hata:', result.error);
    }
  } catch (error) {
    console.error('❌ Bağlantı hatası:', error.message);
  }
}

createAdmin();