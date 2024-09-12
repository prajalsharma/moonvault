
// import { MultiSelect } from '@/components/MultiSelector';
// import { Button } from '@/components/ui/button';
// import React, { useState } from 'react';
// import Card from './Card';
// import { Car } from 'lucide-react';

// const jobType = [
//     { value: "fulltime", label: "Full Time" },
//     { value: "contract", label: "Contract" },
//     { value: "hybrid", label: "Hybrid" },
//     { value: "remote", label: "Remote" },
// ];

// interface Job {
//     id: string;
//     role: string;
//     type: string;
//     location: string;
//     hybrid: boolean;
//     jobFunction: string;
//     jobDescription: string;
//     company: string;
//     category: string;
//     logo: string;
//   }
  

// interface JobProps {
//     job: Job[];
// }

// const Category = ({ job }: JobProps) => {
//     const [selectedJobType, setSelectedJobType] = useState<string[]>([]);
//     // console.log(job);
//     const[jobs, setJobs] = useState(job);
//     const da = jobs.filter(job => job.category === 'EigenDA');

//     return (
//         <div className="flex">
//             <div>
//                 <MultiSelect
//                     options={jobType}
//                     onValueChange={setSelectedJobType}
//                     defaultValue={selectedJobType}
//                     className="w-[150px]"
//                     placeholder="Job Function"
//                 />
//             </div>
//             <div className="ml-[30px]">
//                 <MultiSelect
//                     options={jobType}
//                     onValueChange={setSelectedJobType}
//                     defaultValue={selectedJobType}
//                     className="w-[6.8rem]"
//                     placeholder="Job Type"
//                 />
//             </div>
//             <div className="ml-[207px]">
//                 <div className='space-x-[13px]'>
//                     <Button className='rounded-full'>AVS</Button>
//                     <Button className='rounded-full'>Operator</Button>
//                     <Button className='rounded-full'>EigenDA</Button>
//                 </div>
//             </div>
//             {/* {jobs.map((job) => (
//                 <Card key={job.role} job={job} />
//             ))} */}
//            {da.map((job) => (
//             <Card key={job.id} job={job}/>
//            ))}
//         </div>

//     )

// }

// export default Category;