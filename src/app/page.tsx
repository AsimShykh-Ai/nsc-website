import { notFound } from 'next/navigation';
import { getPage } from '@/lib/db';
import { pageMetadata } from '@/lib/pageMeta';
import PageView from '@/components/PageView';

export const generateMetadata = () => pageMetadata('home');
export default function Home() {
  const p = getPage('home'); if (!p) notFound();
  return <PageView page={p} />;
}
