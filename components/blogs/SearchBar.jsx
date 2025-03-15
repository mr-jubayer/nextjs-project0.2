"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const handleSearchBlog = () => {
    setLoading(true);
    const url = `${pathname}/${search}`;
    router.push(url);
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        className="px-3 py-2 rounded w-1/2 mx-auto border-2  "
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={handleSearchBlog}
        className="bg-black px-3 py-2 rounded mx-2 text-white cursor-pointer"
      >
        {loading ? "Searching.." : "Search"}
      </button>
    </div>
  );
};

export { SearchBar };
