import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage } from '@/lib/db';
import { pageMetadata } from '@/lib/pageMeta';
import PageView from '@/components/PageView';

export const generateMetadata = (): Metadata => pageMetadata('contact');
export default function Page() {
  const p = getPage('contact'); if (!p) notFound();
  return <PageView page={p} />;
}
