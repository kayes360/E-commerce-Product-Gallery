"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function QuantitySelector() {
  const [quantity, setQuantity] = useState("1");
  return (
    <Select value={quantity} onValueChange={setQuantity}>
      <SelectTrigger className="w-24">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
        <SelectItem value="4">4</SelectItem>
        <SelectItem value="5">5</SelectItem>
      </SelectContent>
    </Select>
  );
}
