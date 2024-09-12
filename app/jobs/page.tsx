"use client";
import { useEffect, useState } from "react";
import TextFilter from "./_components/TextFilter";
import Card from "./_components/Card";
import LocationFilter from "./_components/LocationFilter";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import { MultiSelect } from "@/components/MultiSelector";
import { Button } from "@/components/ui/button";
import { getJobs } from "@/lib/notion";



const jobType = [
  { value: "hybrid", label: "On-Site" },
  { value: "Remote", label: "Remote" },
];

const jobFunction = [
  { value: "software_engineering", label: "Software Engineering" },
  { value: "marketing_communication", label: "Marketing Communication" },
  { value: "sales_business_dev", label: "Sales Business Dev" },
  { value: "data_science", label: "Data Science" },
  { value: "research_development", label: "Research Development" },
  { value: "product_management", label: "Product Management" },
  { value: "design_ux", label: "Design UX" },
  { value: "content", label: "Content" },
  { value: "other_engineering", label: "Other Engineering" },
  { value: "devops_infrastructure", label: "DevOps Infrastructure" },
  { value: "accounting_finance", label: "Accounting Finance" }
];


const data = [{
  id: '43858b9a-47a5-4cba-94fc-c6d2d88c5430',
  role: 'Blockchain Infrastructure Engineer',
  type: 'Remote',
  location: 'Global',
  hybrid: 'False',
  jobFunction: 'devops_infrastructure',
  jobDescription: 'https://www.witnesschain.com/jobs-1/blockchain-infrastructure-engineer',
  company: 'Witness Chain',
  category: 'AVS',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreifnqua35egsbyvx5i2yp7ejdbesvcuyyv5defrttyyxng5rgxzeim'
},
{
  id: '9de2f427-3a28-462c-ac06-27aa0ba23ec3',
  role: 'Product Engineer (React/GCP)',
  type: 'Remote',
  location: 'USA',
  hybrid: 'False',
  jobFunction: 'software_engineering',
  jobDescription: 'https://job-boards.greenhouse.io/u410/jobs/5243987004',
  company: 'U410',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreibwo42x33j6silf2rudafg56ajpm6otgn7cqibwo7nrip4fos4j6q'
},
{
  id: 'ac9a0739-1b3a-4475-87ce-9bb8804fa82a',
  role: 'Operations Engineer',
  type: 'null',
  location: 'Austin, TX',
  hybrid: 'True',
  jobFunction: 'devops_infrastructure',
  jobDescription: 'https://job-boards.greenhouse.io/u410/jobs/5242683004',
  company: 'U410',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreibwo42x33j6silf2rudafg56ajpm6otgn7cqibwo7nrip4fos4j6q'
},
{
  id: 'a7733a81-fe10-44c3-a58d-20afa1df920f',
  role: 'Protocol Specialist',
  type: 'Remote',
  location: 'USA',
  hybrid: 'False',
  jobFunction: 'research_development',
  jobDescription: 'https://job-boards.greenhouse.io/u410/jobs/4615762004',
  company: 'U410',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreibwo42x33j6silf2rudafg56ajpm6otgn7cqibwo7nrip4fos4j6q'
},
{
  id: '6df30be8-8cb3-483a-b603-141e850a48da',
  role: 'Cryptocurrency Infrastructure Engineer',
  type: 'Remote',
  location: 'USA',
  hybrid: 'False',
  jobFunction: 'devops_infrastructure',
  jobDescription: 'https://job-boards.greenhouse.io/u410/jobs/4515017004',
  company: 'U410',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreibwo42x33j6silf2rudafg56ajpm6otgn7cqibwo7nrip4fos4j6q'
},
{
  id: '86f77670-ae20-4b83-aca6-5724345ae708',
  role: 'Cryptocurrency Security Engineer',
  type: 'Remote',
  location: 'USA',
  hybrid: 'False',
  jobFunction: 'software_engineering',
  jobDescription: 'https://job-boards.greenhouse.io/u410/jobs/4529865004',
  company: 'U410',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreibwo42x33j6silf2rudafg56ajpm6otgn7cqibwo7nrip4fos4j6q'
},
{
  id: '60015293-773c-46c6-ac17-9d2145ff1b7f',
  role: 'Technical Writer',
  type: 'Remote',
  location: 'Europe',
  hybrid: 'False',
  jobFunction: 'content',
  jobDescription: 'https://wellfound.com/jobs/2762331-technical-writer',
  company: 'Stakin',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreigqpbgw45xuchmq242wjyx267h6rnd2hzy4giwhctdd2pusj7rwf4'
},
{
  id: '4e3a8abc-9b82-4fd1-ba4c-9151e991211b',
  role: 'Institutional Ambassador',
  type: 'Remote',
  location: 'Europe',
  hybrid: 'False',
  jobFunction: 'marketing_communication',
  jobDescription: 'https://wellfound.com/jobs/1852573-institutional-ambassador',
  company: 'Stakin',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreigqpbgw45xuchmq242wjyx267h6rnd2hzy4giwhctdd2pusj7rwf4'
},
{
  id: '3cd94b83-e217-4f7d-b098-d60ebbcc1e89',
  role: 'Junior Finance Analyst',
  type: 'Remote',
  location: 'St. Julian’s',
  hybrid: 'True',
  jobFunction: 'accounting_finance',
  jobDescription: 'https://simplystaking.bamboohr.com/careers/68',
  company: 'SimplyStaking',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreigvafonvm6s3uqcm54vcdgormja6ptimgh5aphizeqi4zep2irkte'
},
{
  id: '2e276a4e-9fbd-4405-9c15-1a3c5b0139e1',
  role: 'Full Stack Software Developer - Frontend',
  type: 'Remote',
  location: 'Global',
  hybrid: 'False',
  jobFunction: 'software_engineering',
  jobDescription: 'https://simplystaking.bamboohr.com/careers/64',
  company: 'SimplyStaking',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreigvafonvm6s3uqcm54vcdgormja6ptimgh5aphizeqi4zep2irkte'
},
{
  id: 'bedc47a6-b0a1-4d0e-a391-37c2add9e5fb',
  role: 'Blockchain Software Engineer',
  type: 'Remote',
  location: 'Global',
  hybrid: 'False',
  jobFunction: 'software_engineering',
  jobDescription: 'https://simplystaking.bamboohr.com/careers/65',
  company: 'SimplyStaking',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreigvafonvm6s3uqcm54vcdgormja6ptimgh5aphizeqi4zep2irkte'
},
{
  id: '942c25fb-cb06-4aaf-9a91-43fbb108d1a5',
  role: 'Full Stack Software Developer - Staking',
  type: 'Remote',
  location: 'Global',
  hybrid: 'False',
  jobFunction: 'software_engineering',
  jobDescription: 'https://simplystaking.bamboohr.com/careers/69',
  company: 'SimplyStaking',
  category: 'EigenDA',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreigvafonvm6s3uqcm54vcdgormja6ptimgh5aphizeqi4zep2irkte'
},
{
  id: 'f8a56c70-e37f-4a51-bb9b-cd9728694e93',
  role: 'Blockchain Devops Engineer',
  type: 'Remote',
  location: 'Global',
  hybrid: 'False',
  jobFunction: 'devops_infrastructure',
  jobDescription: 'https://simplystaking.bamboohr.com/careers/71',
  company: 'SimplyStaking',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreigvafonvm6s3uqcm54vcdgormja6ptimgh5aphizeqi4zep2irkte'
},
{
  id: '2f43671a-621b-47eb-b323-8d607754d84b',
  role: 'Web3 Full Stack Software Engineer',
  type: 'Remote',
  location: 'Global',
  hybrid: 'False',
  jobFunction: 'software_engineering',
  jobDescription: 'https://stakefish.workable.com/jobs/1795127',
  company: 'Stakefish',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreiewzjqih43nxqvn3edvu6q6a5xla4es3tupfw5pxszdf642sqe6ma'
},
{
  id: '104e7dc4-4d55-417a-90c5-7674d776539a',
  role: 'Frontend Engineer',
  type: 'Remote',
  location: 'Global',
  hybrid: 'False',
  jobFunction: 'software_engineering',
  jobDescription: 'https://stakefish.workable.com/jobs/2710594',
  company: 'Stakefish',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreiewzjqih43nxqvn3edvu6q6a5xla4es3tupfw5pxszdf642sqe6ma'
},
{
  id: 'fad2a8e7-d342-44ba-bda5-8723e79851d3',
  role: 'Business Development Solo Node Operator',
  type: 'Remote',
  location: 'Europe',
  hybrid: 'False',
  jobFunction: 'sales_business_dev',
  jobDescription: 'https://apply.workable.com/puffer-finance/j/D8372F3F18/',
  company: 'Puffer Finance',
  category: 'Operator',
  logo: ''
},
{
  id: '8e0eb256-cc29-48ba-8b81-168489effa87',
  role: 'Senior Python and Frontend Developer',
  type: 'Remote',
  location: 'Zurich',
  hybrid: 'False',
  jobFunction: 'software_engineering',
  jobDescription: 'https://stake-capital-group.breezy.hr/p/30e14649caa5-senior-python-front-end-developer',
  company: 'Stake Capital',
  category: 'Operator',
  logo: ''
},
{
  id: '0bd57568-042f-44d3-b45a-6ab5568a8823',
  role: 'Devops Engineer (F2 Pool)',
  type: 'Remote',
  location: 'Global',
  hybrid: 'False',
  jobFunction: 'devops_infrastructure',
  jobDescription: 'https://apply.workable.com/stakefish/j/486994B0D4/',
  company: 'Stakefish',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreiewzjqih43nxqvn3edvu6q6a5xla4es3tupfw5pxszdf642sqe6ma'
},
{
  id: 'a0a55fd3-5875-4c98-a36f-72bcd51c370f',
  role: 'Software Engineer - Back-end / Full-stack (f2pool)',
  type: 'Remote',
  location: 'Global',
  hybrid: 'False',
  jobFunction: 'software_engineering',
  jobDescription: 'https://apply.workable.com/stakefish/j/A441EE126F/',
  company: 'Stakefish',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreiewzjqih43nxqvn3edvu6q6a5xla4es3tupfw5pxszdf642sqe6ma'
},
{
  id: 'd9fab42f-2caa-4eb1-8d3b-ed7ba3acedfc',
  role: 'Devops Engineer',
  type: 'Remote',
  location: 'Global',
  hybrid: 'False',
  jobFunction: 'devops_infrastructure',
  jobDescription: 'https://stakefish.workable.com/jobs/2718848',
  company: 'Stakefish',
  category: 'Operator',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreiewzjqih43nxqvn3edvu6q6a5xla4es3tupfw5pxszdf642sqe6ma'
},
{
  id: '6e0b8a53-9871-4b8b-b716-a95571a448e9',
  role: 'Chain - Sr Software Engineer',
  type: 'Remote',
  location: 'Global',
  hybrid: 'False',
  jobFunction: 'software_engineering',
  jobDescription: 'https://boards.greenhouse.io/lightblocks/jobs/4020130008',
  company: 'Lightblock Labs',
  category: 'AVS',
  logo: 'https://gateway.lighthouse.storage/ipfs/bafkreiax3ywo5347xozdgu4lws2gpaojc7nj4dsv6moo7bpj4kxdk4x6fy'
}
]

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


const JobsPage = () => {
  const [selectedJobFunction, setSelectedJobFunction] = useState<string[]>([]);
  const [selectedJobType, setSelectedJobType] = useState<string[]>([]);
  const [filteredjobs, setFilteredJobs] = useState<Job[]>([]);
  const [allJobs, setAllJobs] = useState<Job[]>([]);

  const handleFilterChange = () => {
    console.log()
  }

  useEffect(() => {
    const init = async () => {
      const allJobs: Job[] = data;
      setAllJobs(allJobs);
      console.log(allJobs);
    }
    init();
    handleMultiSelect(selectedJobFunction, selectedJobType);
  }, [selectedJobFunction, selectedJobType]);

  const handleMultiSelect = (selectedJobFunctions: string[], selectedJobTypes: string[]) => {
    const filtered = allJobs.filter((job) => {
      const matchesJobFunction = selectedJobFunctions.length > 0
        ? selectedJobFunctions.includes(job.jobFunction)
        : true;

      const matchesJobType = selectedJobTypes.length > 0
        ? selectedJobTypes.some((type) => {
          if (type === "Remote") {
            return job.type === "Remote" && job.hybrid === "False";
          } else if (type === "null") {
            return job.type === "null" && job.hybrid === "True";
          }
          return true;
        })
        : true;

      return matchesJobFunction && matchesJobType;
    });

    setFilteredJobs(filtered);
  };



  const handleCategory = (cate: string, jobFunction?: string, jobType?: string) => {

    if (!cate && !jobFunction && !jobType) {
      setFilteredJobs(allJobs);
      return;
    }

    const filtered = allJobs.filter((job) => {
      const matchesCategory = cate ? job.category === cate : true;
      const matchesJobFunction = jobFunction ? job.jobFunction === jobFunction : true;
      const matchesJobType = jobType ? job.type === jobType : true;
      return matchesCategory && matchesJobFunction && matchesJobType;
    });

    console.log(filtered);
    setFilteredJobs(filtered);
  };


  return (
    <main className="pt-20 pb-10 mx-auto">
      <div className="bg-[#f7fafc] px-7 pt-32 pb-2">
        <div className="lg:w-[57rem] mx-auto flex flex-col gap-14">
          <div className="bg-white border-[1.5px] rounded-sm flex flex-col gap-4">
            <div className="flex flex-col lg:gap-4 lg:flex-row  divide-y-[1.5px] md:divide-x-[1.5px] md:divide-y-0 border-b">
              <TextFilter onTextFilterChange={handleFilterChange} />
              <LocationFilter />
            </div>
            <div className="flex px-4 pb-3">
              <div>
                <MultiSelect
                  options={jobFunction}
                  onValueChange={(value) => setSelectedJobFunction(value)}
                  defaultValue={selectedJobFunction}
                  className="w-[150px]"
                  placeholder="Job Function"
                />

              </div>
              <div className="ml-[30px]">
                <MultiSelect
                  options={jobType}
                  onValueChange={(value) => setSelectedJobType(value)}
                  defaultValue={selectedJobType}
                  className="w-[6.8rem]"
                  placeholder="Job Type"
                />

              </div>
              <div className="ml-[207px]">
                <div className="space-x-[13px]">
                  <Button className="rounded-full" onClick={() => handleCategory("AVS")}>
                    AVS
                  </Button>
                  <Button className="rounded-full" onClick={() => handleCategory("Operator")}>
                    Operator
                  </Button>
                  <Button className="rounded-full" onClick={() => handleCategory("EigenDA")}>
                    EigenDA
                  </Button>
                </div>

              </div>
            </div>
          </div>
          <div>
            <SecondaryNavbar />
          </div>
        </div>
      </div>
      <div className="pt-10 flex flex-col gap-5 lg:w-[57rem] mx-auto px-7 lg:px-0">
        <p className="text-sm text-slate-800">
          Showing <span className="font-bold">{filteredjobs.length}</span> jobs
        </p>
        <div className="flex flex-col gap-3">
          {filteredjobs.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </div>
      </div>
    </main>
  );
};
export default JobsPage;
