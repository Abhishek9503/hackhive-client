// import React, { useEffect, useState } from "react";
// // import { useEffect } from "react";
// import Banner from "../components/Banner";
// import Jobs from "./Jobs";
// const Home = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [jobs, setJobs] = useState([]);
//   const [query, setQuery] = useState("");
//   useEffect(() => {
//     fetch("jobs.json")
//       .then((res) => res.json())
//       .then((date) => {
//         setJobs(data);
//         console.log(data);
//       });
//   }, []);

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };
//   const filteredItems = jobs.filter(
//     (job) => job.jobTitle.toLowerCase.indexOf(query, toLowerCase()) !== -1
//   );
//   console.log(filteredItems);

//   //   Radio Filtering
//   const handleChange = (event) => {
//     setSeclectedCategory(event.target.value);
//   };
//   // bytton based filtering
//   const handleCLick = (event) => {
//     setSeclectedCategory(event.target.value);
//   };

//   const filteredData = (jobs, selected, query) => {
//     let filteredJobs = jobs;

//     if (query) {
//       filteredJobs = filteredItems;
//     }

//     if (selected) {
//       filteredJobs = filteredJobs.filter(
//         ({
//           jobLocation,
//           maxPrice,
//           experienceLevel,
//           salaryType,
//           employmentType,
//           postingDate,
//         }) =>
//           jobLocation.toLowerCase() === selected.toLowerCase ||
//           parseInt(maxPrice) === parseInt(selected) ||
//           salaryType.toLowerCase() === selected.toLowerCase() ||
//           employmentType.toLowerCase() == selected.toLowercase()
//       );
//       console.log(filteredData);
//     }

//     return filteredData.map((data, i) => <Card key={i} data={data} />);
//   };

//   const result = filteredData(jobs, selectedCategory, query);

//   return (
//     <div>
//       <Banner query={query} handleInputChange={handleInputChange} />

//       <div>
//         <Jobs result={result} />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";

import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";
// Assuming Card component is imported

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  console.log(filteredItems);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleCLick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = filteredItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) === parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }

    // Map over filteredJobs, not filteredData
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleCLick={handleCLick} />
        </div>

        <div className="col-span-2 bg-white p-4 rounded-sm">
          {isLoading ? (
            <p>Loading</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3>{result.length}Jobs</h3>
              <h2>No Data found</h2>
            </>
          )}

          {/* pagination */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button onClick={""}>Previous</button>
              <span>
                Page{currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button onClick={""}>Next</button>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="bg-white p-4 rounded">Right</div>
      </div>
    </div>
  );
};

export default Home;
