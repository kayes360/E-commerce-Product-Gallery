import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-auto min-h-[200px]">
        <div className="border grid grid-cols-[repeat(auto-fit,_300px)] gap-4 m-4 ">
          {Array.from({ length: 28 }).map((_, index) => (
            <div
              key={index}
              className="relative aspect-[2/3] w-full overflow-hidden rounded-md"
            >
              <Skeleton className="absolute inset-0 bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto p-4 border-t">
        <div className="h-10" />
      </div>
    </div>
  );
}