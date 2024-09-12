import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

const LocationFilter = ({onLocationFilterChange}: {onLocationFilterChange: (location: string) => void}) => {

  const handleLocationChange = (e: any) => {
    const location = e.target.value;
    onLocationFilterChange(location);
  }
  return (
    <div className="py-2 pr-3 pl-10 relative lg:flex-1">
      <MapPin className="text-slate-800 size-[1.375rem] absolute left-4 top-4" />
      <Input
        type="text"
        placeholder="Location"
        className="border-none focus-visible:ring-0 rounded-none placeholder:text-[.8438rem] sm:placeholder:text-base placeholder:opacity-40"
        onChange={handleLocationChange}
      />
    </div>
  );
};
export default LocationFilter;
