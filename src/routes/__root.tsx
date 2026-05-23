import { createRootRoute, Outlet } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HeadContent } from '@tanstack/react-router'

import { CustomCursor } from '@/components/layout/CustomCursor'
import { NotFoundPage } from '@/components/pages/NotFoundPage'

const queryClient = new QueryClient()

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
})

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <CustomCursor />
      <Outlet />
    </QueryClientProvider>
  )
}
