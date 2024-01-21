/* eslint-disable no-unused-vars */
import TaskHeading from "./TaskHeading";
import TaskBoard from "./TaskBoard";
import { useState } from "react";
import AddTaskModal from "../components/AddTaskModal";

export default function Tasker() {
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

  return (
    <>
      <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
        {showAddTaskModal && <AddTaskModal />}
        <div className="mb-14 items-center justify-between sm:flex">
          <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
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
            <TaskHeading />
            <TaskBoard tasks={tasks} />
          </table>
        </div>
      </div>
    </>
  );
}
