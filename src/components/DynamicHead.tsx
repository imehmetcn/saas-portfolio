"use client";

import { useEffect } from 'react';
import { useAdmin } from '@/contexts/AdminContext';

export default function DynamicHead() {
  const { siteSettings, isLoading } = useAdmin();

  useEffect(() => {
    // Wait for data to load
    if (isLoading) return;

    console.log('DynamicHead - Site Settings:', siteSettings);

    // Update document title
    if (siteSettings.siteTitle && siteSettings.siteTitle.trim() !== '') {
      document.title = siteSettings.siteTitle;
      console.log('Title updated to:', siteSettings.siteTitle);
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (siteSettings.siteDescription && siteSettings.siteDescription.trim() !== '') {
      if (metaDescription) {
        metaDescription.setAttribute('content', siteSettings.siteDescription);
        console.log('Meta description updated to:', siteSettings.siteDescription);
      } else {
        // Create meta description if it doesn't exist
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = siteSettings.siteDescription;
        document.head.appendChild(meta);
        console.log('Meta description created:', siteSettings.siteDescription);
      }
    }

    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && siteSettings.siteTitle && siteSettings.siteTitle.trim() !== '') {
      ogTitle.setAttribute('content', siteSettings.siteTitle);
    } else if (siteSettings.siteTitle && siteSettings.siteTitle.trim() !== '') {
      // Create OG title if it doesn't exist
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = siteSettings.siteTitle;
      document.head.appendChild(meta);
    }

    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && siteSettings.siteDescription && siteSettings.siteDescription.trim() !== '') {
      ogDescription.setAttribute('content', siteSettings.siteDescription);
    } else if (siteSettings.siteDescription && siteSettings.siteDescription.trim() !== '') {
      // Create OG description if it doesn't exist
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = siteSettings.siteDescription;
      document.head.appendChild(meta);
    }

  }, [siteSettings.siteTitle, siteSettings.siteDescription, isLoading]);

  return null; // This component doesn't render anything
}