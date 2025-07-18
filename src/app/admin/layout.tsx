"use client";

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import AdminAuthGuard from '@/components/admin/AdminAuthGuard';
import { Toaster } from 'react-hot-toast';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <AdminAuthGuard>
        {children}
      </AdminAuthGuard>
      <Toaster />
    </SessionProvider>
  );
}