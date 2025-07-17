"use client";

import Image from 'next/image';
import { Button } from './Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import { Badge } from './Badge';
import { Avatar, AvatarGroup } from './Avatar';
import { Mail, ArrowRight, Star, Plus, Minus } from 'lucide-react';

export function ComponentsDemo() {
  return (
    <div className="space-y-12">
      {/* Button Demo */}
      <section>
        <h2 className="mb-4">Button Bileşeni</h2>
        
        <div className="space-y-6">
          <div>
            <h4 className="mb-3">Varyasyonlar</h4>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          
          <div>
            <h4 className="mb-3">Boyutlar</h4>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
          
          <div>
            <h4 className="mb-3">İkonlu Butonlar</h4>
            <div className="flex flex-wrap gap-4">
              <Button leftIcon={<Mail size={16} />}>
                Email Gönder
              </Button>
              <Button rightIcon={<ArrowRight size={16} />}>
                Devam Et
              </Button>
              <Button variant="outline" leftIcon={<Plus size={16} />}>
                Yeni Ekle
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="mb-3">Durumlar</h4>
            <div className="flex flex-wrap gap-4">
              <Button isLoading>Yükleniyor</Button>
              <Button disabled>Devre Dışı</Button>
              <Button fullWidth>Tam Genişlik</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Card Demo */}
      <section>
        <h2 className="mb-4">Card Bileşeni</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Temel Kart</CardTitle>
              <CardDescription>Bu bir temel kart örneğidir.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Kart içeriği burada yer alır. İstediğiniz herhangi bir içerik ekleyebilirsiniz.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">İptal</Button>
              <Button className="ml-auto" size="sm">Kaydet</Button>
            </CardFooter>
          </Card>
          
          <Card hoverable>
            <CardHeader>
              <CardTitle>Hover Efektli Kart</CardTitle>
              <CardDescription>Bu kart hover durumunda animasyon gösterir.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Fare ile üzerine geldiğinizde hafif bir animasyon efekti görürsünüz.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" leftIcon={<Minus size={16} />}>Azalt</Button>
              <Button className="ml-auto" size="sm" leftIcon={<Plus size={16} />}>Arttır</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <Image 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
              alt="Laptop with code" 
              width={600}
              height={192}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>Görselli Kart</CardTitle>
              <CardDescription>Üst kısımda görsel içeren kart örneği.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Kartlar içerisinde görsel, metin ve diğer bileşenleri birlikte kullanabilirsiniz.</p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="mr-1" size={16} fill="currentColor" />
                <span>4.9/5</span>
              </div>
              <Button className="ml-auto" size="sm" rightIcon={<ArrowRight size={16} />}>
                Detaylar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      {/* Badge Demo */}
      <section>
        <h2 className="mb-4">Badge Bileşeni</h2>
        
        <div className="space-y-6">
          <div>
            <h4 className="mb-3">Varyasyonlar</h4>
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
          </div>
          
          <div>
            <h4 className="mb-3">Boyutlar</h4>
            <div className="flex flex-wrap items-center gap-3">
              <Badge size="sm" variant="primary">Small</Badge>
              <Badge size="md" variant="primary">Medium</Badge>
              <Badge size="lg" variant="primary">Large</Badge>
            </div>
          </div>
          
          <div>
            <h4 className="mb-3">Kullanım Örnekleri</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span>Proje Durumu:</span>
                <Badge variant="success">Tamamlandı</Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <span>Öncelik:</span>
                <Badge variant="error">Yüksek</Badge>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span>Teknolojiler:</span>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Avatar Demo */}
      <section>
        <h2 className="mb-4">Avatar Bileşeni</h2>
        
        <div className="space-y-6">
          <div>
            <h4 className="mb-3">Boyutlar</h4>
            <div className="flex flex-wrap items-center gap-4">
              <Avatar size="xs" name="John Doe" />
              <Avatar size="sm" name="John Doe" />
              <Avatar size="md" name="John Doe" />
              <Avatar size="lg" name="John Doe" />
              <Avatar size="xl" name="John Doe" />
            </div>
          </div>
          
          <div>
            <h4 className="mb-3">Görsel ve İsim</h4>
            <div className="flex flex-wrap items-center gap-4">
              <Avatar 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="John Doe" 
              />
              <Avatar name="John Doe" />
              <Avatar name="Jane Smith" />
              <Avatar name="Alex Johnson" />
              <Avatar />
            </div>
          </div>
          
          <div>
            <h4 className="mb-3">Durum Göstergeleri</h4>
            <div className="flex flex-wrap items-center gap-4">
              <Avatar 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="John Doe"
                status="online"
              />
              <Avatar name="Jane Smith" status="busy" />
              <Avatar name="Alex Johnson" status="away" />
              <Avatar name="Sarah Williams" status="offline" />
            </div>
          </div>
          
          <div>
            <h4 className="mb-3">Avatar Grubu</h4>
            <AvatarGroup max={3}>
              <Avatar 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="John Doe"
              />
              <Avatar name="Jane Smith" />
              <Avatar name="Alex Johnson" />
              <Avatar name="Sarah Williams" />
              <Avatar name="Michael Brown" />
            </AvatarGroup>
          </div>
        </div>
      </section>
    </div>
  );
}