import React, { useEffect, useState } from "react";
import Table from "./table";

const PaginatedTable = ({ data, itemsPerPage, headers, UpdateRecord, deleteRecord }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");

  const handleNext = () => {
    if (totalPages > currentPage) setCurrentPage((current) => current + 1);
  };
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((current) => current - 1);
  };

   const filteredData = data.filter((item) =>
     Object.values(item).some((value) =>
       String(value).toLowerCase().includes(searchQuery.toLowerCase())
     )
   );


  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); 
  };

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [data]);

  return (
    <div className="w-full h-full">
      <Table
        handleSearch={handleSearch}
        data={filteredData}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        headers={headers}
        totalPages={totalPages}
        onNext={handleNext}
        onPrevious={handlePrevious}
        UpdateRecord={UpdateRecord}
        deleteRecord={deleteRecord}
      />
    </div>
  );
};

export default PaginatedTable;
