"use client";

import { useEffect } from 'react';
import { useAdmin } from '@/contexts/AdminContext';

export default function DynamicHead() {
  const { siteSettings } = useAdmin();

  useEffect(() => {
    // Update document title
    if (siteSettings.siteTitle) {
      document.title = siteSettings.siteTitle;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && siteSettings.siteDescription) {
      metaDescription.setAttribute('content', siteSettings.siteDescription);
    } else if (siteSettings.siteDescription) {
      // Create meta description if it doesn't exist
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = siteSettings.siteDescription;
      document.head.appendChild(meta);
    }

    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && siteSettings.siteTitle) {
      ogTitle.setAttribute('content', siteSettings.siteTitle);
    }

    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && siteSettings.siteDescription) {
      ogDescription.setAttribute('content', siteSettings.siteDescription);
    }

  }, [siteSettings.siteTitle, siteSettings.siteDescription]);

  return null; // This component doesn't render anything
}