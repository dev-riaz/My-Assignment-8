"use client";

import { useMemo, useState } from "react";
import AnimalCard from "@/components/shared/AnimalCard";

const Sort = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");

  const categories = ["All", "Cow", "Goat", "Sheep", "Camel"];

  const filteredAndSortedData = useMemo(() => {
    let animals =
      activeCategory === "All"
        ? [...data]
        : data.filter((item) => item.type === activeCategory);

    if (sortBy === "low") {
      animals.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high") {
      animals.sort((a, b) => b.price - a.price);
    }

    return animals;
  }, [data, activeCategory, sortBy]);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`btn ${
                activeCategory === category
                  ? "bg-[#0c4532] text-white"
                  : "bg-white text-black border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2"
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Animal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {filteredAndSortedData.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </>
  );
};

export default Sort;
