import JobItem from "./JobItem";
const JobList = ({ data, handleFilterTags }) => {
  return (
    <div className="jobList">
      {data.map((job) => {
        return (
          <JobItem key={job.id} job={job} handleFilterTags={handleFilterTags} />
        );
      })}
    </div>
  );
};

export default JobList;
