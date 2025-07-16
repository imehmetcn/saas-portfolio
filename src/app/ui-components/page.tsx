"use client";

import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { TypographyDemo } from '@/components/ui/TypographyDemo';
import { ComponentsDemo } from '@/components/ui/ComponentsDemo';
import { LayoutDemo } from '@/components/ui/LayoutDemo';
import { Tabs } from '@/components/ui/Tabs';

export default function UIComponentsPage() {
  const tabs = [
    {
      id: 'typography',
      label: 'Tipografi',
      content: <TypographyDemo />
    },
    {
      id: 'components',
      label: 'UI Bileşenleri',
      content: <ComponentsDemo />
    },
    {
      id: 'layout',
      label: 'Layout Bileşenleri',
      content: <LayoutDemo />
    }
  ];

  return (
    <main>
      <Section paddingY="lg">
        <Container>
          <SectionHeader 
            title="UI Bileşenleri" 
            subtitle="Portfolio projesi için geliştirilen tüm UI bileşenlerinin demosu"
            centered
          />
          
          <Tabs tabs={tabs} />
        </Container>
      </Section>
    </main>
  );
}