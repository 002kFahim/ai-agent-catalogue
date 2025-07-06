"use client";

import { useAppSelector } from "@/lib/hooks";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import FilterSection from "./FilterSection";
import AgentGrid from "./AgentGrid";

export default function MainContent() {
  const { filteredAgents } = useAppSelector((state) => state.agents);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">AI Agents Catalog</h1>
        <p className="text-gray-600 mb-8">
          Explore our collection of specialized AI agents
        </p>

        <div className="mb-6">
          <SearchBar />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 flex-shrink-0">
            <FilterSection />
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredAgents.length} agents
              </p>
            </div>
            <AgentGrid />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
