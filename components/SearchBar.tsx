"use client";

import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/lib/hooks";
import { setSearch } from "@/lib/agentsSlice";

export default function SearchBar() {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full md:w-96">
      <Input
        type="text"
        placeholder="Search agents by name or description..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="w-full"
      />
    </div>
  );
}
