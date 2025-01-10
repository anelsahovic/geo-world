import Loading from '@/components/Loading';
import Country from '@/sections/Country';
import { Suspense } from 'react';

type Props = {
  params: Promise<{ name: string }>;
};

export default async function Page({ params }: Props) {
  const { name } = await params;
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Country countryName={name} />
      </Suspense>
    </>
  );
}
