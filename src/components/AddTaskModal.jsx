export default function AddTaskModal() {
  return (
    <>
      <section className="bg-[#1D212B] font-[Inter] max-md:px-4 lg:text-lg">
        {/* <!-- Navbar Starts --> */}
        <nav className="py-6 md:py-8">
          <div className="container mx-auto flex items-center justify-between gap-x-6">
            {/* <!-- Logo --> */}
            {/* <!-- Logo --> */}
            <a href="/">
              <img
                className="h-[45px]"
                src="./assets/lws-logo-en.svg"
                alt="Lws"
              />
            </a>
            {/* <!-- Logo Ends --> */}
            {/* <!-- Search Box --> */}
            <form>
              <div className="flex">
                <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="z-20 block w-full bg-gray-800 px-4 py-2.5 pr-10 focus:outline-none"
                    placeholder="Search Task"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-3"
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
            {/* <!-- Search Box Ends --> */}
          </div>
        </nav>
        {/* <!-- Navbar Ends --> */}
        {/* <!-- Add Task Form --> */}

        <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            Add New Task
          </h2>

          {/* <!-- inputs --> */}
          <div className="space-y-9 text-white lg:space-y-10">
            {/* <!-- title --> */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="title">Title</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="title"
                id="title"
                required
              />
            </div>
            {/* <!-- description --> */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                type="text"
                name="description"
                id="description"
                required
              ></textarea>
            </div>
            {/* <!-- input group --> */}
            <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
              {/* <!-- tags --> */}
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="tags">Tags</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="tags"
                  id="tags"
                  required
                />
              </div>
              {/* <!-- priority --> */}
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="priority">Priority</label>
                <select
                  className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                  name="priority"
                  id="priority"
                  required
                >
                  <option value="">Select Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>
          {/* <!-- inputs ends --> */}
          <div className="mt-16 flex justify-center lg:mt-20">
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              Create new Task
            </button>
          </div>
        </form>
        {/* <!-- Add Task Form Ends --> */}
        {/* <!-- Footer --> */}
        <footer className="py-6 md:py-8">
          <div className="container mx-auto">
            <p className="text-center text-xs text-[#6A6A6A] lg:text-sm">
              Copyright ©2023 | All rights reserved by Learn with Sumit
            </p>
          </div>
        </footer>
      </section>
    </>
  );
}
