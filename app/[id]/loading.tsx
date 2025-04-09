"use client";

import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Skeleton className="w-32 h-6" />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Image Skeleton */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
          <Skeleton className="absolute inset-0" />
        </div>

        {/* Product Details Skeleton */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <Skeleton className="w-20 h-8" />
            <Skeleton className="w-20 h-8" />
          </div>
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-8" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-1" />
          <div className="flex justify-between">
            <Skeleton className="w-20 h-8" />
            <Skeleton className="w-20 h-8" />
          </div>
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-1" />
          <Skeleton className="w-20 h-6" />
        </div>
      </div>
    </div>
  );
}