// İlk admin kullanıcısını oluşturmak için güvenli script
// eslint-disable-next-line @typescript-eslint/no-require-imports
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function askPassword(question) {
  return new Promise((resolve) => {
    const stdin = process.stdin;
    const stdout = process.stdout;
    
    stdout.write(question);
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    
    let password = '';
    
    stdin.on('data', function(char) {
      char = char + '';
      
      switch(char) {
        case '\n':
        case '\r':
        case '\u0004':
          stdin.setRawMode(false);
          stdin.pause();
          stdout.write('\n');
          resolve(password);
          break;
        case '\u0003':
          process.exit();
          break;
        case '\u007f': // Backspace
          if (password.length > 0) {
            password = password.slice(0, -1);
            stdout.write('\b \b');
          }
          break;
        default:
          password += char;
          stdout.write('*');
          break;
      }
    });
  });
}

async function createAdmin() {
  console.log('🔐 Admin Kullanıcısı Oluşturma Aracı');
  console.log('=====================================\n');

  try {
    // Kullanıcı bilgilerini al
    const name = await askQuestion('👤 Admin adı: ');
    const email = await askQuestion('📧 Email adresi: ');
    const password = await askPassword('🔑 Şifre (gizli): ');
    const confirmPassword = await askPassword('🔑 Şifre tekrar (gizli): ');

    rl.close();

    // Validation
    if (!name || !email || !password) {
      console.log('\n❌ Tüm alanlar doldurulmalıdır!');
      return;
    }

    if (password !== confirmPassword) {
      console.log('\n❌ Şifreler eşleşmiyor!');
      return;
    }

    if (password.length < 6) {
      console.log('\n❌ Şifre en az 6 karakter olmalıdır!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('\n❌ Geçerli bir email adresi giriniz!');
      return;
    }

    console.log('\n⏳ Admin kullanıcısı oluşturuluyor...');

    // URL'i environment variable'dan al, yoksa localhost kullan
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    
    const response = await fetch(`${baseUrl}/api/admin/create-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name
      }),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('\n✅ Admin kullanıcısı başarıyla oluşturuldu!');
      console.log('=====================================');
      console.log('📧 Email:', result.user.email);
      console.log('👤 İsim:', result.user.name);
      console.log('🕒 Oluşturulma:', new Date(result.user.createdAt).toLocaleString('tr-TR'));
      console.log('\n🔗 Admin paneline erişim: http://localhost:3000/admin/login');
      console.log('\n⚠️  Bu bilgileri güvenli bir yerde saklayın!');
    } else {
      console.log('\n❌ Hata:', result.error);
    }
  } catch (error) {
    console.log('\n❌ Bağlantı hatası:', error.message);
    console.log('💡 Sunucunun çalıştığından emin olun: npm run dev');
  }
}

createAdmin();