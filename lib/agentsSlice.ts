import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Agent } from "@/types/agent";

interface Filters {
  search: string;
  status: string[];
  category: string[];
  pricingModel: string | null;
}

interface AgentsState {
  allAgents: Agent[];
  filteredAgents: Agent[];
  filters: Filters;
}

const initialState: AgentsState = {
  allAgents: [],
  filteredAgents: [],
  filters: {
    search: "",
    status: [],
    category: [],
    pricingModel: null,
  },
};

const agentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    setAgents: (state, action: PayloadAction<Agent[]>) => {
      state.allAgents = action.payload;
      state.filteredAgents = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
      applyFilters(state);
    },
    toggleStatus: (state, action: PayloadAction<string>) => {
      const index = state.filters.status.indexOf(action.payload);
      if (index >= 0) {
        state.filters.status.splice(index, 1);
      } else {
        state.filters.status.push(action.payload);
      }
      applyFilters(state);
    },
    toggleCategory: (state, action: PayloadAction<string>) => {
      const index = state.filters.category.indexOf(action.payload);
      if (index >= 0) {
        state.filters.category.splice(index, 1);
      } else {
        state.filters.category.push(action.payload);
      }
      applyFilters(state);
    },
    setPricingModel: (state, action: PayloadAction<string | null>) => {
      state.filters.pricingModel = action.payload;
      applyFilters(state);
    },
    clearFilters: (state) => {
      state.filters = {
        search: "",
        status: [],
        category: [],
        pricingModel: null,
      };
      state.filteredAgents = state.allAgents;
    },
  },
});

// Filter helper function
function applyFilters(state: AgentsState) {
  const { search, status, category, pricingModel } = state.filters;

  state.filteredAgents = state.allAgents.filter((agent) => {
    const matchesSearch =
      search === "" ||
      agent.name.toLowerCase().includes(search.toLowerCase()) ||
      agent.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = status.length === 0 || status.includes(agent.status);
    const matchesCategory =
      category.length === 0 || category.includes(agent.category);
    const matchesPricing =
      pricingModel === null || agent.pricingModel === pricingModel;

    return matchesSearch && matchesStatus && matchesCategory && matchesPricing;
  });
}

export const {
  setAgents,
  setSearch,
  toggleStatus,
  toggleCategory,
  setPricingModel,
  clearFilters,
} = agentsSlice.actions;

export default agentsSlice.reducer;
