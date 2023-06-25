const JobItem = ({ job, handleFilterTags }) => {
  let tags = [job.role, job.level, ...job.languages, ...job.tools];
  return (
    <div className={`jobCard ${job.featured ? "featuredCard" : ""}`}>
      <div className="companyLogo">
        <img src={job.logo} alt="" />
      </div>
      <div className="listingInfo">
        <div className="listingTitle">
          <h3>{job.company}</h3>
          {job.new && <span className="new">NEW!</span>}
          {job.featured && <span className="featured">FEATURED</span>}
        </div>
        <h2>{job.position}</h2>
        <div className="listingMeta">
          <span>{job.postedAt}</span>
          &bull;
          <span>{job.contract}</span>
          &bull;
          <span>{job.location}</span>
        </div>
      </div>
      <div className="listingTags">
        {tags.map((item, i) => {
          return (
            <span onClick={() => handleFilterTags(item, "add")} key={i}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default JobItem;
