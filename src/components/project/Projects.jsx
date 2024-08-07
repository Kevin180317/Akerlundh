import React, { useState, useEffect } from "react";

const ProjectsPagination = ({ projects, projectsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <main className="flex justify-start items-start md:w-[80%] mx-auto flex-col mt-16 py-8">
      <h1 className="text-4xl mb-8">
        Get in touch with us to design your{" "}
        <strong className="text-yellow-500">dream</strong> home
      </h1>
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-8">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="w-full h-[700px] bg-gray-400 hover:bg-black hover:text-white"
          >
            <a href={project.href} className="block p-4">
              <h2 className="text-xl font-bold">{project.title}</h2>
            </a>
          </div>
        ))}
      </div>
      <div className="space-x-2">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded shadow"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md ${
                currentPage === pageNumber
                  ? "bg-green-600 text-white font-bold py-2 px-4 rounded cursor-not-allowed"
                  : "bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
              }`}
              disabled={currentPage === pageNumber}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded shadow"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default ProjectsPagination;
