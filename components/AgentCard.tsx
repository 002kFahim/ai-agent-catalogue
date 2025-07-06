import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Agent } from "@/types/agent";

const statusColors = {
  Active: "bg-green-500",
  Beta: "bg-blue-500",
  Archived: "bg-gray-500",
};

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle>{agent.name}</CardTitle>
            <Badge className={`${statusColors[agent.status]} text-white`}>
              {agent.status}
            </Badge>
          </div>
          <CardDescription>{agent.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{agent.category}</Badge>
            <Badge variant="outline">{agent.pricingModel}</Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
