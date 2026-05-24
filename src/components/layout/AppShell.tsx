'use client'

import { CustomCursor } from '@/components/layout/CustomCursor'

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  )
}
