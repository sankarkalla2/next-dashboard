import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectIem = () => {
  return (
    <Select>
      <SelectTrigger className="w-[120px] h-8">
        <SelectValue placeholder="option..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="accessibility">Accessibility</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectIem;
