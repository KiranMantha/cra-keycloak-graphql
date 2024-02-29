import { ReactNode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export function Router({ children }: { children: ReactNode | ReactNode[] }) {
  const router = createBrowserRouter([
    {
      path: '/*',
      element: children
    }
  ]);
  return <RouterProvider router={router} />;
}
