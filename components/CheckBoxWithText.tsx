"use client";
import { Checkbox } from "@/components/ui/checkbox";
interface CheckboxWithTextProps {
  label: string;
  onChange?: (checked: boolean) => void;
}
export function CheckboxWithText({ label, onChange }: CheckboxWithTextProps) {
  return (
    <div className="items-top flex space-x-2  space-y-4">
      <Checkbox
        id={label}
        className="cursor-pointer"
        onCheckedChange={(checked) => onChange?.(checked as boolean)}
      />
      <div className="grid gap-1.5 leading-none ">
        <label
          htmlFor={label}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer capitalize"
        >
          {label}
        </label>
      </div>
    </div>
  );
}
