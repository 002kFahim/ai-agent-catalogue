"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/lib/hooks";
import { useAppDispatch } from "@/lib/hooks";
import {
  toggleStatus,
  toggleCategory,
  setPricingModel,
  clearFilters,
} from "@/lib/agentsSlice";

export default function FilterSection() {
  const dispatch = useAppDispatch();
  const { filters, allAgents } = useAppSelector((state) => state.agents);

  // Get unique filter options
  const statusOptions = Array.from(new Set(allAgents.map((a) => a.status)));
  const categoryOptions = Array.from(new Set(allAgents.map((a) => a.category)));
  const pricingOptions = Array.from(
    new Set(allAgents.map((a) => a.pricingModel))
  );

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 font-semibold">Status</h3>
        <div className="space-y-2">
          {statusOptions.map((status) => (
            <div key={status} className="flex items-center space-x-2">
              <Checkbox
                id={`status-${status}`}
                checked={filters.status.includes(status)}
                onCheckedChange={() => dispatch(toggleStatus(status))}
              />
              <Label htmlFor={`status-${status}`}>{status}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-semibold">Category</h3>
        <div className="space-y-2">
          {categoryOptions.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={filters.category.includes(category)}
                onCheckedChange={() => dispatch(toggleCategory(category))}
              />
              <Label htmlFor={`category-${category}`}>{category}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-semibold">Pricing Model</h3>
        <RadioGroup
          value={filters.pricingModel || ""}
          onValueChange={(value) => dispatch(setPricingModel(value || null))}
        >
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="" id="pricing-all" />
              <Label htmlFor="pricing-all">All Models</Label>
            </div>
            {pricingOptions.map((model) => (
              <div key={model} className="flex items-center space-x-2">
                <RadioGroupItem value={model} id={`pricing-${model}`} />
                <Label htmlFor={`pricing-${model}`}>{model}</Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => dispatch(clearFilters())}
      >
        Clear All Filters
      </Button>
    </div>
  );
}
