"use client";

import { useAppSelector } from "@/lib/hooks";
import AgentCard from "./AgentCard";

export default function AgentGrid() {
  const { filteredAgents } = useAppSelector((state) => state.agents);

  if (filteredAgents.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">No agents found matching your filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredAgents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}
