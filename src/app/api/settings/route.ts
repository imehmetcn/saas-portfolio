import { NextRequest, NextResponse } from 'next/server';
import { db, siteSettings } from '@/lib/db';
import { eq } from 'drizzle-orm';

// GET - Site ayarlarını getir
export async function GET() {
  try {
    const settings = await db.select().from(siteSettings).limit(1);
    
    if (settings.length === 0) {
      // Varsayılan ayarları oluştur
      const defaultSettings = await db.insert(siteSettings).values({
        siteTitle: 'Mehmet Can Şahin - Portfolio',
        siteDescription: 'Senior UI/UX & Frontend Developer - Yaratıcı dijital çözümler ve modern web uygulamaları',
        darkTheme: true,
        animationsEnabled: true,
        performanceMonitor: false,
      }).returning();
      
      return NextResponse.json(defaultSettings[0]);
    }
    
    return NextResponse.json(settings[0]);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

// PUT - Site ayarlarını güncelle
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    // İlk ayarları kontrol et
    const existingSettings = await db.select().from(siteSettings).limit(1);
    
    let updatedSettings;
    
    if (existingSettings.length === 0) {
      // Yeni ayarlar oluştur
      updatedSettings = await db.insert(siteSettings).values({
        siteTitle: body.siteTitle,
        siteDescription: body.siteDescription,
        darkTheme: body.darkTheme,
        animationsEnabled: body.animationsEnabled,
        performanceMonitor: body.performanceMonitor,
      }).returning();
    } else {
      // Mevcut ayarları güncelle
      updatedSettings = await db
        .update(siteSettings)
        .set({
          siteTitle: body.siteTitle,
          siteDescription: body.siteDescription,
          darkTheme: body.darkTheme,
          animationsEnabled: body.animationsEnabled,
          performanceMonitor: body.performanceMonitor,
          updatedAt: new Date(),
        })
        .where(eq(siteSettings.id, existingSettings[0].id))
        .returning();
    }

    return NextResponse.json(updatedSettings[0]);
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}