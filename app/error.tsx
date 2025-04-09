'use client';

export default function Error() {
  return (
   <div className="grid place-items-center h-screen">
    <div className=" max-w-md p-6 mx-auto bg-white dark:bg-black border border-gray-200 rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-bold text-center text-gray-900 dark:text-gray-100">
       Unwanted Error occured while fetching products
      </h2> 
    </div>
   </div>
  );
}