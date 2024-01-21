import SearchBox from "./SearchBox";
import Tasker from "../ui/Tasker";

export default function Task() {
  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          <SearchBox />
          <Tasker />
        </div>
      </section>
    </>
  );
}
