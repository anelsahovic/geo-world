import Loading from '@/components/Loading';
import VisitedList from '@/sections/VisitedList';
import { Suspense } from 'react';
import { LuMapPinCheck } from 'react-icons/lu';

type Props = {
  searchParams: Promise<{
    query?: string;
    page?: string;
    per_page?: string;
    sort?: string;
    order?: string;
  }>;
};

export default async function VisitedRoute({ searchParams }: Props) {
  const params = (await searchParams) || {};
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen md:p-10">
      <div className="flex flex-col items-center justify-around w-full h-full rounded-xl shadow py-10 bg-[#f5f7f2]">
        <div className="flex items-center gap-2 border-b md:border-b-2 border-slate-300 pb-1">
          <LuMapPinCheck className="text-[var(--color-primary)] size-7 md:size-11" />
          <h1 className="font-bold text-2xl md:text-4xl text-[var(--color-green-dark)]">
            Visited Countries
          </h1>
        </div>
        <Suspense fallback={<Loading />}>
          <VisitedList params={params} />
        </Suspense>
      </div>
    </div>
  );
}
