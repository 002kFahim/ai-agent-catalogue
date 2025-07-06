import { makeStore } from "@/lib/store";
import { setAgents } from "@/lib/agentsSlice";
import MainContent from "@/components/MainContent";
import ReduxProvider from "@/components/ReduxProvider";
import { Agent } from "@/types/agent";

export async function generateMetadata() {
  const agents = await getAgents();
  const agentCount = agents.length;

  return {
    title: `ArkLab - ${agentCount} AI Agents`,
    description: `Discover ${agentCount} powerful AI agents tailored to automate business tasks, improve workflows, and enhance productivity.`,
    robots: {
      index: true,
      follow: true,
    },
  };
}

async function getAgents() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await import("@/data/mock-agents.json");
  return data.default;
}

export default async function Home() {
  const agents = await getAgents();
  const store = makeStore();
  store.dispatch(setAgents(agents as Agent[]));

  return (
    <ReduxProvider preloadedState={store.getState()}>
      <MainContent />
    </ReduxProvider>
  );
}
