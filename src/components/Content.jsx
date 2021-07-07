import React from "react";
import Card from "./Card";
import job from "./databases";
import Filter from "./Filter";

function Content() {
  return (
    <div className="content-container">
      <Filter />
      {job.map((job) => {
        return (
          <Card
            company={job.company}
            image={job.Image}
            role={job.role}
            timeposted={job.timeposted}
            hoursofwork={job.hoursofwork}
            region={job.region}
            keytag={job.keytag}
            condition={job.condition ? job.condition : null}
            featured={job.featured ? job.featured : null}
          />
        );
      })}
    </div>
  );
}

export default Content;
