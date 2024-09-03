import { ChevronRightIcon, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Job {
  role: string;
  location: string;
  jobDescription: string;
  company: string;
  type: string;
  logo: string;
}

interface JobProps {
  job: Job;
}

const Card = ({ job }: JobProps) => {
  return (
    <Link className="bg-white rounded p-4 flex card transition-shadow items-center border" href={job.jobDescription}>
      <div className="flex gap-4 items-center w-full">
        <div>
          <Image src={job.logo} width={72} height={72} alt="" className="rounded-sm size-[4.5rem]" />
        </div>
        <div className="flex flex-1 flex-col md:flex-row justify-between gap-1">
          <div className="flex flex-col gap-1 items-start">
            <h2 className="font-semibold text-sm sm:text-[1.125rem]">{job.role}</h2>
            <p className="font-medium text-sm">{job.company}</p>
            <p className="text-sm text-[#1a0c6d] font-medium bg-[#1a0c6d]/10 px-2 rounded-xl border">{job.type}</p>
          </div>
          <div>
            <p className="text-sm flex font-medium items-center gap-1">
              <MapPin className="text-[#1a0c6d] size-4" />
              {job.location}
            </p>
          </div>
        </div>
      </div>
      {/* <p className="text-sm text-[#1a0c6d] lg:flex items-center font-semibold gap-1 mr-10 hidden">
        Read more <ChevronRightIcon className="text-[#1a0c6d]" width={14} height={14} />
      </p> */}
    </Link>
  );
};
export default Card;
