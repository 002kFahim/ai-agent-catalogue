"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore, RootState } from "@/lib/store";

export default function ReduxProvider({
  children,
  preloadedState,
}: {
  children: React.ReactNode;
  preloadedState: RootState;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch({
      type: "agents/setAgents",
      payload: preloadedState.agents.allAgents,
    });
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
