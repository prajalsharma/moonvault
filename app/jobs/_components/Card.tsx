import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Job {
  id: string;
  role: string;
  type: string;
  location: string;
  hybrid: string;
  jobFunction: string;
  jobDescription: string;
  company: string;
  category: string;
  logo: string;
}

interface JobProps {
  job: Job;
}

const Card = ({ job }: JobProps) => {
  const jobDescriptionLink =
    job.jobDescription && job.jobDescription.startsWith("http") ? job.jobDescription : "#";

  console.log(job.logo);
  console.log(job.jobDescription);

  return (
    <Link
      className="bg-white rounded p-4 flex card transition-shadow items-center border hover:shadow-md"
      href={jobDescriptionLink}>
      <div className="flex gap-4 items-center w-full">
        <div className="w-[72px] h-[72px] relative">
          <Image
            src={job.logo}
            width={72}
            height={72}
            alt="Company logo"
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
        </div>
        <div className="flex flex-1 flex-col md:flex-row justify-between gap-1">
          <div className="flex flex-col gap-1 items-start">
            <h2 className="font-semibold text-sm sm:text-[1.125rem]">{job.role}</h2>
            <p className="font-medium text-sm">{job.company}</p>
            <div className="flex gap-2">
              <p className="text-sm text-[#1a0c6d] font-medium bg-[#1a0c6d]/10 px-2 rounded-xl border">
                {job.type}
              </p>
              {job.category && (
                <p
                  className={cn(
                    "text-sm text-[#1a0c6d] font-medium px-2 rounded-xl border",
                    job.category === "AVS" && "bg-[#4cdf3e]",
                    job.category === "Operator" && "bg-[#ffb800]",
                    job.category === "EigenDA" && "bg-[#cadfff]"
                  )}>
                  {job.category}
                </p>
              )}
            </div>
          </div>
          <div>
            <p className="text-sm flex font-medium items-center gap-1">
              <MapPin className="text-[#1a0c6d] size-4" />
              {job.location}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
