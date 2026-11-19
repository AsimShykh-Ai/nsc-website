import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage } from '@/lib/db';
import { pageMetadata } from '@/lib/pageMeta';
import PageView from '@/components/PageView';

export const generateMetadata = (): Metadata => pageMetadata('services/ai-receptionist');
export default function Page() {
  const p = getPage('services/ai-receptionist'); if (!p) notFound();
  return <PageView page={p} />;
}
