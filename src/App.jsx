import Filter from "./components/Filter";
import Header from "./components/Header";
import JobList from "./components/JobList";
import data from "../data.json";
import { useState, useEffect } from "react";

function App() {
  const [filterTags, setFilterTags] = useState([]);
  const [jobData, setJobData] = useState(data);

  const handleFilterTags = (tag, operation) => {
    if (operation === "add" && !filterTags.includes(tag)) {
      setFilterTags((prev) => [...prev, tag]);
    } else if (operation === "remove") {
      setFilterTags((prev) => prev.filter((item) => item !== tag));
    } else if (operation === "clear") {
      setFilterTags([]);
    }
  };

  useEffect(() => {
    let newData = data.filter((job) => {
      return filterTags.every((tag) => {
        return (
          job.role === tag ||
          job.level === tag ||
          job.languages.includes(tag) ||
          job.tools.includes(tag)
        );
      });
    });

    setJobData(newData);
  }, [filterTags]);

  return (
    <>
      <Header />
      <div className="container">
        <Filter filterTags={filterTags} handleFilterTags={handleFilterTags} />
        <JobList data={jobData} handleFilterTags={handleFilterTags} />
      </div>
    </>
  );
}

export default App;
