import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // URL'yi temizle ve site adını al
    const cleanUrl = url.replace('https://', '').replace('http://', '');
    const siteName = cleanUrl.split('/')[0];
    
    // Güvenilir placeholder oluştur
    const placeholderUrl = `https://via.placeholder.com/1200x800/1e293b/ffffff?text=${encodeURIComponent(`📸 ${siteName}`)}`;
    
    // Gelecekte gerçek screenshot API'si entegre edilebilir
    // Örnek: Puppeteer, Playwright, veya üçüncü parti servis
    
    return NextResponse.json({ 
      success: true, 
      imageUrl: placeholderUrl,
      originalUrl: url,
      siteName: siteName
    });
    
  } catch (error) {
    console.error('Screenshot API error:', error);
    return NextResponse.json({ error: 'Failed to generate screenshot' }, { status: 500 });
  }
}