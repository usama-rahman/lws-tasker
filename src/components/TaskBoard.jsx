/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";

export default function TaskBoard({ tasks }) {
  return (
    <tbody>
      {tasks.map((item) => (
        <tr
          key={item.id}
          className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
        >
          <td>
            {item.isFav ? <FaStar color="yellow" /> : <FaStar color="gray" />}
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
  );
}
