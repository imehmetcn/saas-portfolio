"use client";

export function TypographyDemo() {
  return (
    <div className="typography-demo space-y-8">
      <div>
        <h2 className="mb-4">Başlık Örnekleri</h2>
        <div className="space-y-4">
          <h1>H1: Modern SaaS Portfolio</h1>
          <h2>H2: Yaratıcı Dijital Çözümler</h2>
          <h3>H3: Web Geliştirme Hizmetleri</h3>
          <h4>H4: Kullanıcı Deneyimi Tasarımı</h4>
          <h5>H5: Responsive Web Uygulamaları</h5>
          <h6>H6: Performans Optimizasyonu</h6>
        </div>
      </div>

      <div>
        <h2 className="mb-4">Metin Örnekleri</h2>
        <div className="space-y-4">
          <p className="body-large">
            Bu bir büyük metin örneğidir. Modern web uygulamaları geliştirirken kullanıcı deneyimi ve performans en önemli faktörlerdir.
          </p>
          <p>
            Bu bir standart paragraf metnidir. Profesyonel bir portfolio web sitesi, ziyaretçilere yeteneklerinizi ve projelerinizi etkili bir şekilde sunmanızı sağlar. İyi tasarlanmış bir portfolio, potansiyel müşterileri ve işverenleri etkilemek için güçlü bir araçtır.
          </p>
          <p className="body-small">
            Bu bir küçük metin örneğidir. Detaylı bilgiler ve açıklamalar için kullanılabilir.
          </p>
          <p className="caption">
            Bu bir caption metnidir. Genellikle görseller altında veya ek bilgiler için kullanılır.
          </p>
        </div>
      </div>

      <div>
        <h2 className="mb-4">Özel Metin Stilleri</h2>
        <div className="space-y-4">
          <p className="hero-title">Hero Başlık</p>
          <p className="hero-subtitle">Bu bir hero alt başlık örneğidir. Etkileyici giriş bölümleri için idealdir.</p>
          <p className="section-title">Bölüm Başlığı</p>
          <p className="section-subtitle">Bu bir bölüm alt başlık örneğidir. Bölüm açıklamaları için kullanılır.</p>
        </div>
      </div>

      <div>
        <h2 className="mb-4">Metin Formatları</h2>
        <div className="space-y-4">
          <p><strong>Kalın metin</strong> ve <em>italik metin</em> örnekleri.</p>
          <p>Bu bir <a href="#">bağlantı</a> örneğidir.</p>
          <p>Bu bir <code>kod parçası</code> örneğidir.</p>
          <blockquote>
            Bu bir alıntı örneğidir. Önemli sözler veya referanslar için kullanılabilir.
          </blockquote>
        </div>
      </div>

      <div>
        <h2 className="mb-4">Liste Örnekleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h5 className="mb-2">Sırasız Liste</h5>
            <ul>
              <li>Web Tasarımı</li>
              <li>Front-end Geliştirme</li>
              <li>Back-end Geliştirme</li>
              <li>Responsive Tasarım</li>
              <li>Performans Optimizasyonu</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-2">Sıralı Liste</h5>
            <ol>
              <li>Proje Analizi</li>
              <li>Tasarım Süreci</li>
              <li>Geliştirme Aşaması</li>
              <li>Test ve Optimizasyon</li>
              <li>Yayınlama ve Bakım</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}