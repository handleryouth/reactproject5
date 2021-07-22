import job from "./databases";
import Card from "./Card";

export default function FilteredContent({ result }) {
  var indices = [];
  var check = result.indexOf(true);
  console.log(check);
  while (check !== -1) {
    indices.push(check);
    check = result.indexOf(true, check + 1);
  }

  return (
    <div>
      {indices.map((i) => {
        return <Card key={i} {...job[i]} />;
      })}
    </div>
  );
}
