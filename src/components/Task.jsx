/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import { FaStar } from "react-icons/fa";

export default function Task() {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["web", "react", "js"],
    priority: "high",
    isFav: true,
  };

  const [tasks, setTasks] = useState([defaultTasks]);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  function handelAddTask(newTask) {
    console.log("Adding a Task ...", newTask);
    setTasks([...tasks, newTask]);
    setShowAddTaskModal(false);
  }

  return (
    <section className="mb-20 flex justify-center" id="tasks">
      <div className="container grid justify-center">
        <section className="mb-20" id="tasks">
          <div className="container grid justify-center">
            {/* SearchBox  */}
            <div className="p-2 flex justify-end">
              <form>
                <div className="flex">
                  <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                      placeholder="Search Task"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
                    >
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* <Tasker /> */}

            <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
              {showAddTaskModal && (
                <AddTaskModal
                  handelAddTask={handelAddTask}
                  setShowAddTaskModal={setShowAddTaskModal}
                />
              )}
              <div className="mb-14 items-center justify-between sm:flex">
                <h2 className="text-2xl font-semibold max-sm:mb-4">
                  Your Tasks
                </h2>
                <div className="flex items-center space-x-5">
                  <button
                    onClick={() => setShowAddTaskModal(true)}
                    className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                  >
                    Add Task
                  </button>
                  <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
                    Delete All
                  </button>
                </div>
              </div>
              <div className="overflow-auto">
                <table className="table-fixed overflow-auto xl:w-full">
                  {/* <TaskHeading /> */}

                  <thead>
                    <tr>
                      <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                      <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                        Title
                      </th>
                      <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                        Description
                      </th>
                      <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                        Tags
                      </th>
                      <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                        Priority
                      </th>
                      <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                        Options
                      </th>
                    </tr>
                  </thead>

                  {/* <TaskBoard tasks={tasks} /> */}

                  <tbody>
                    {tasks.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
                      >
                        <td>
                          {item.isFav ? (
                            <FaStar color="yellow" />
                          ) : (
                            <FaStar color="gray" />
                          )}
                        </td>
                        <td>{item.title}</td>
                        <td>
                          <div>{item.description}</div>
                        </td>
                        <td>
                          <ul className="flex justify-center gap-1.5 flex-wrap">
                            {item.tags.map((tag) => (
                              <li key={tag}>
                                <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                                  {tag}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="text-center"> {item.priority} </td>
                        <td>
                          <div className="flex items-center justify-center space-x-3">
                            <button className="text-red-500">Delete</button>
                            <button className="text-blue-500">Edit</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
