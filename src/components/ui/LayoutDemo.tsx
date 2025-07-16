"use client";

import { Container } from './Container';
import { Grid } from './Grid';
import { Flex } from './Flex';
import { Section, SectionHeader } from './Section';
import { Card, CardContent } from './Card';

export function LayoutDemo() {
  return (
    <div className="space-y-16">
      {/* Container Demo */}
      <div>
        <h2 className="mb-6">Container Bileşeni</h2>
        
        <div className="space-y-8">
          <div>
            <h4 className="mb-3">Farklı Boyutlar</h4>
            <div className="space-y-4">
              <Container size="sm" className="bg-muted p-4 rounded-lg">
                <div className="text-center p-4 bg-card rounded">Small Container (640px)</div>
              </Container>
              
              <Container size="md" className="bg-muted p-4 rounded-lg">
                <div className="text-center p-4 bg-card rounded">Medium Container (768px)</div>
              </Container>
              
              <Container size="lg" className="bg-muted p-4 rounded-lg">
                <div className="text-center p-4 bg-card rounded">Large Container (1024px)</div>
              </Container>
              
              <Container size="xl" className="bg-muted p-4 rounded-lg">
                <div className="text-center p-4 bg-card rounded">Extra Large Container (1280px)</div>
              </Container>
            </div>
          </div>
        </div>
      </div>
      
      {/* Grid Demo */}
      <div>
        <h2 className="mb-6">Grid Bileşeni</h2>
        
        <div className="space-y-8">
          <div>
            <h4 className="mb-3">Sabit Sütunlar</h4>
            <Grid cols={3} gap="md" className="mb-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-muted p-6 rounded-lg text-center">
                  Grid Item {item}
                </div>
              ))}
            </Grid>
            
            <h4 className="mb-3">Responsive Sütunlar</h4>
            <Grid 
              cols={{ sm: 1, md: 2, lg: 4 }} 
              gap="md"
            >
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-muted p-6 rounded-lg text-center">
                  Grid Item {item}
                </div>
              ))}
            </Grid>
          </div>
          
          <div>
            <h4 className="mb-3">Farklı Boşluklar</h4>
            <div className="space-y-6">
              <Grid cols={3} gap="xs">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-muted p-4 rounded-lg text-center">
                    XS Gap
                  </div>
                ))}
              </Grid>
              
              <Grid cols={3} gap="sm">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-muted p-4 rounded-lg text-center">
                    SM Gap
                  </div>
                ))}
              </Grid>
              
              <Grid cols={3} gap="md">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-muted p-4 rounded-lg text-center">
                    MD Gap
                  </div>
                ))}
              </Grid>
              
              <Grid cols={3} gap="lg">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-muted p-4 rounded-lg text-center">
                    LG Gap
                  </div>
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
      
      {/* Flex Demo */}
      <div>
        <h2 className="mb-6">Flex Bileşeni</h2>
        
        <div className="space-y-8">
          <div>
            <h4 className="mb-3">Yönlendirme</h4>
            <div className="space-y-6">
              <div>
                <p className="mb-2">Row (Default)</p>
                <Flex gap="md" className="bg-muted p-4 rounded-lg">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-card p-4 rounded">Item {item}</div>
                  ))}
                </Flex>
              </div>
              
              <div>
                <p className="mb-2">Column</p>
                <Flex direction="col" gap="md" className="bg-muted p-4 rounded-lg">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-card p-4 rounded">Item {item}</div>
                  ))}
                </Flex>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="mb-3">Hizalama</h4>
            <div className="space-y-6">
              <div>
                <p className="mb-2">Justify Content</p>
                <div className="space-y-4">
                  {(['start', 'center', 'end', 'between'] as const).map((justify) => (
                    <div key={justify}>
                      <p className="text-sm mb-1">justify=&quot;{justify}&quot;</p>
                      <Flex 
                        justify={justify} 
                        className="bg-muted p-4 rounded-lg h-20"
                      >
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="bg-card p-4 rounded">Item {item}</div>
                        ))}
                      </Flex>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="mb-2">Align Items</p>
                <div className="space-y-4">
                  {(['start', 'center', 'end'] as const).map((items) => (
                    <div key={items}>
                      <p className="text-sm mb-1">items=&quot;{items}&quot;</p>
                      <Flex 
                        items={items} 
                        className="bg-muted p-4 rounded-lg h-32"
                      >
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="bg-card p-4 rounded">Item {item}</div>
                        ))}
                      </Flex>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section Demo */}
      <div>
        <h2 className="mb-6">Section Bileşeni</h2>
        
        <div className="space-y-8">
          <div className="border rounded-lg overflow-hidden">
            <Section variant="default" paddingY="md">
              <SectionHeader 
                title="Default Section" 
                subtitle="Bu bir varsayılan section örneğidir."
              />
              <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap="md">
                {[1, 2, 3].map((item) => (
                  <Card key={item}>
                    <CardContent>
                      <p>Card {item} içeriği</p>
                    </CardContent>
                  </Card>
                ))}
              </Grid>
            </Section>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <Section variant="primary" paddingY="md">
              <SectionHeader 
                title="Primary Section" 
                subtitle="Bu bir primary section örneğidir."
                centered
              />
              <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap="md">
                {[1, 2, 3].map((item) => (
                  <Card key={item}>
                    <CardContent>
                      <p>Card {item} içeriği</p>
                    </CardContent>
                  </Card>
                ))}
              </Grid>
            </Section>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <Section variant="secondary" paddingY="md">
              <SectionHeader 
                title="Secondary Section" 
                subtitle="Bu bir secondary section örneğidir."
              />
              <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap="md">
                {[1, 2, 3].map((item) => (
                  <Card key={item}>
                    <CardContent>
                      <p>Card {item} içeriği</p>
                    </CardContent>
                  </Card>
                ))}
              </Grid>
            </Section>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <Section variant="muted" paddingY="md">
              <SectionHeader 
                title="Muted Section" 
                subtitle="Bu bir muted section örneğidir."
                centered
              />
              <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap="md">
                {[1, 2, 3].map((item) => (
                  <Card key={item}>
                    <CardContent>
                      <p>Card {item} içeriği</p>
                    </CardContent>
                  </Card>
                ))}
              </Grid>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}