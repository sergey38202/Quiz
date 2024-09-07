import { useRouter } from 'next/router';

export const useActiveLink = (href: string): boolean => {
  const router = useRouter();
  
  return router.pathname === href;
};