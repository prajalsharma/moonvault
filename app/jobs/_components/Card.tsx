import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Job {
  role: string;
  location: string;
  jobDescription: string;
  project: string;
  logo: string;
}

interface JobProps {
  job: Job;
}

const Card = ({ job }: JobProps) => {
  return (
    <Link className="bg-white rounded p-4 flex card transition-shadow justify-between items-center" href={job.jobDescription}>
      <div className="flex gap-4 items-center">
        <div className="image-container sm:flex-initial">
          <Image src={job.logo} width={72} height={72} alt="" className="rounded-sm size-14 sm:size-[4.5rem]" />
        </div>
        <div className="flex flex-col gap-0.5">
          <h2 className="font-semibold text-sm sm:text-[1.125rem]">{job.role}</h2>
          <p className="font-medium text-sm sm:text-base">{job.project}</p>
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
      </div>
      <p className="text-sm text-[#1a0c6d] lg:flex items-center font-semibold gap-1 mr-10 hidden">
        Read more <ChevronRightIcon className="text-[#1a0c6d]" width={14} height={14} />
      </p>
    </Link>
  );
};
export default Card;
