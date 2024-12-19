import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PostSort() {
  return (
    <div className="flex w-full px-4 justify-center items-center">
      <div className="flex w-[40%] py-4 flex-col justify-center items-start gap-2 shrink-0 self-stretch">
        <hr className="border-primary-500 border-[1px] my-3 px-3 w-full" />
      </div>
      <div className="w-[60%] bg-primary-500 rounded-full">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Sort By: Most relevent" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Sort By: Most relevent</SelectItem>
            <SelectItem value="dark">Sort By: Most recent</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
