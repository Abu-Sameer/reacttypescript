import { useState } from "react";
import {
  useGetAllProductQuery,
  useGetProductQuery,
} from "./Store/futures/Apisplice";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: allProductData } = useGetAllProductQuery();
  const { data: searchItem } = useGetProductQuery(searchTerm);

  function search(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  console.log(allProductData);

  return (
    <div className="flex flex-col space-y-5 justify-center items-center h-screen">
      <input
        type="search"
        value={searchTerm}
        onChange={search}
        placeholder="Enter your search"
        className="bg-gray-300 outline-none border border-black/50 py-2 px-6 w-1/3"
      />
      {searchItem?.map((product) => (
        <li className="py-5 bg-blue-500 text-white px-3" key={product.id}>
          {product.title}
        </li>
      ))}
    </div>
  );
}
