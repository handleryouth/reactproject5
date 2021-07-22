import { useContext } from "react";
import Card from "./Card";
import job from "./databases";
import FilterInput from "./FilterInput";
import FilteredContent from "./FilteredContent";
import { filterContext } from "./App";


function Content() {
  const { items } = useContext(filterContext);
  const result = job.map((i) => items.every((v) => i.keytag.includes(v)));

  return (
    <div className="content-container">
      <FilterInput />

      {items.length !== 0 ? (
        <FilteredContent result={result} />
      ) : (
        job.map((job) => <Card key={job.id} {...job} />)
      )}
    </div>
  );
}

export default Content;
