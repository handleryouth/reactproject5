import React, { useContext } from "react";
import Card from "./Card";
import job from "./databases";
import Filter from "./Filter";
import { filterContext } from "../contexts/filtercontext";

function Content() {
  const { items } = useContext(filterContext);
  let indexing = [];

  function RetrieveData() {
    job.map((x, index) => {
      let compareItems = x.keytag;
      compareItems.filter((word) => {
        let checkItem = items.includes(word);

        if (checkItem) {
          indexing.push({
            company: `${job[index].company}`,
            image: `${job[index].Image}`,
            role: `${job[index].role}`,
            timeposted: `${job[index].timeposted}`,
            hoursofwork: `${job[index].hoursofwork}`,
            region: `${job[index].region}`,
            keytag: [job[index].keytag],
            condition: `${job[index].condition ? job[index].condition : null}`,
            featured: `${job[index].featured ? job[index].featured : null}`,
          });
        }
      });
    });

    indexing.map((obj) => {
      <Card
        company={obj.company}
        image={obj.Image}
        role={obj.role}
        timeposted={obj.timeposted}
        hoursofwork={obj.hoursofwork}
        region={obj.region}
        keytag={obj.keytag}
        condition={obj.condition ? obj.condition : null}
        featured={obj.featured ? obj.featured : null}
      />;
    });
  }

  return (
    <div className="content-container">
      <Filter />

      {items.length === 0
        ? job.map((job) => {
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
          })
        : RetrieveData()}
    </div>
  );
}

export default Content;
