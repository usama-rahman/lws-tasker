// import SearchBox from "./SearchBox";
import SearchBox from "../ui/SearchBox";
import Tasker from "../ui/Tasker";

export default function Task() {
  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container grid justify-center">
          <SearchBox />
          <Tasker />
        </div>
      </section>
    </>
  );
}
