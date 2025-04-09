'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function NotFound() {
 
    const pathname = usePathname();
    const id = pathname?.split('/').pop();
    

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-2xl font-bold   mb-2">
        This product with <span className="text-black">{id}</span> was not
        found!
      </h2> 
      <Link
        href="/"
        className=" underline text-lg font-medium"
      >
        Return Home
      </Link>
    </div>
  );
}
