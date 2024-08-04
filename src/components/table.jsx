  import React from "react";
  import CreateBook from "./createBook";
import { Pagination } from "./pagination";
import { BiPencil, BiSolidTrash } from "react-icons/bi";
import {IconButton, Tooltip} from "@material-tailwind/react";
import UpdateBook from "./updateBook";
  const Table = ({
    data,
    headers,
    itemsPerPage,
    currentPage,
    totalPages,
    onNext,
    onPrevious,
    handleSearch, 
    UpdateRecord,
    deleteRecord,
  }) => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = data.slice(startIndex, startIndex + itemsPerPage);
    return (
      <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
          <div className="flex items-center justify-between gap-8 mb-8">
            <div>
              <h5 className="block text-xl antialiased font-semibold leading-snug tracking-normal text-darkb">
                Books List
              </h5>
              <p className="block mt-1 text-base antialiased font-normal leading-relaxed text-gray-700">
                See information about all books
              </p>
            </div>
            <div className="flex flex-col gap-2 shrink-0 sm:flex-row">
              
              <CreateBook />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="block w-full overflow-hidden md:w-max">
              <nav>
                <ul
                  role="tablist"
                  className="relative flex flex-row p-1 rounded-lg bg-blue-gray-50 bg-opacity-60"
                >
                  <li
                    role="tab"
                    className="relative flex items-center justify-center w-full h-full px-2 py-1 text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
                    data-value="all"
                  >
                    <div className="z-20 text-inherit">
                      &nbsp;&nbsp;All&nbsp;&nbsp;
                    </div>
                    <div className="absolute inset-0 z-10 h-full bg-white rounded-md shadow"></div>
                  </li>
                  <li
                    role="tab"
                    className="relative flex items-center justify-center w-full h-full px-2 py-1 text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
                    data-value="monitored"
                  >
                    <div className="z-20 text-inherit">
                      &nbsp;&nbsp;Monitored&nbsp;&nbsp;
                    </div>
                  </li>
                  <li
                    role="tab"
                    className="relative flex items-center justify-center w-full h-full px-2 py-1 text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
                    data-value="unmonitored"
                  >
                    <div className="z-20 text-inherit">
                      &nbsp;&nbsp;Unmonitored&nbsp;&nbsp;
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="w-full md:w-72">
              <div className="relative h-10 w-full min-w-[200px]">
                <div className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    ></path>
                  </svg>
                </div>
                <input
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  onChange={handleSearch}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-darkb peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Search
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full p-6 px-0 overflow-scroll"
          style={{ maxHeight: "400px" }}
        >
          <table className="w-full mt-4 text-left table-auto min-w-max">
            <thead className="w-full">
              <tr>
                {headers.map((item) => {
                  return (
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p className="block text-sm antialiased leading-none text-darkb font-semibold opacity-70">
                        {item}
                      </p>
                    </th>
                  );
                })}

                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block text-sm antialiased leading-none text-darkb font-bold opacity-70">
                    Actions
                  </p>
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
              {selectedData.map((record) => (
                <tr
                  key={record.id}
                  className="hover:bg-slate-50 transition-all"
                >
                  <td className="p-4 border-b border-blue ">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <p className="block text-sm antialiased font-semibold leading-normal text-darkb">
                          {record.id}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue ">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <p className="block text-sm antialiased font-semibold leading-normal text-darkb">
                          {record.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue">
                    <p className="block text-sm antialiased font-normal leading-normal text-darkb">
                      {record.author}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue ">
                    <p className="block text-sm antialiased font-normal leading-normal text-darkb">
                      {record.publisher}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue ">
                    <p className="block text-sm antialiased font-normal leading-normal text-darkb">
                      {record.publicationYear}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue ">
                    <p className="block text-sm antialiased font-normal leading-normal text-darkb">
                      {record.subject}
                    </p>
                  </td>
                  
                  <td className="p-4 border-b border-blue ">
                    {UpdateRecord(record)}
                    {deleteRecord(record.id)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onNext={onNext}
          onPrevious={onPrevious}
        />
      </div>
    );
  };

  export default Table;
