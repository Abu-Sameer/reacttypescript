import { useDispatch } from "react-redux";
import { useAppSelector } from "../Store/futures/Store";
import { deletePerson } from "../Store/futures/PersonSlice";

export default function List() {
  const dispatch = useDispatch();
  const persons = useAppSelector((state) => state.person.persons);
  function handleDelete(id: number) {
    dispatch(deletePerson(id));
  }
  return (
    <div>
      <p>This is List Component</p>
      <table className="rounded-md">
        <thead>
          <tr className="bg-gradient-to-b from-sky-400 to-sky-600 text-white">
            <th className="p-2 border rounded">ID</th>
            <th className="p-2 border rounded">Name</th>
            <th className="p-2 border rounded">Action</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr className="even:bg-slate-50" key={person.id}>
              <td className="p-2">{person.id}</td>
              <td className="p-2">{person.name}</td>
              <button
                onClick={() => handleDelete(person.id)}
                className="bg-violet-500 text-white rounded-md px-8 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
