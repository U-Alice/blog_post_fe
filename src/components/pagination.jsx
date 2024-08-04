import { useEffect, useState } from "react";

export const Pagination = ({ totalPages, currentPage, onNext, onPrevious }) => {

 console.log("total pages: " + totalPages);
 console.log("current page: " + currentPage);   

  return (
    <div className="flex items-center justify-between p-4 border-t border-blue ">
      <p className="block text-sm antialiased font-normal leading-normal text-blue-gray-900">
        {/* {totalPages ? `Page 1 of ${totalPages}` : "Loading..."} */}
        
        Page {currentPage} of {totalPages}
      </p>
      <div className="flex gap-2">
        <button onClick={onPrevious}
          className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Previous
        </button>
        <button
          className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
