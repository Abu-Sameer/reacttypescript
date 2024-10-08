export default function Glance() {
  return (
    <div className="w-[487px] h-[489px] rounded-sm flex flex-col space-y-6 bg-[#FFFAEC] py-6 px-10">
      <div className="">
        <h2 className="h-[33px] text-[28px] font-extrabold leading-[32.9px] tracking-[2px] text-center text-[#FF6B00] ">
          AT A GLANCE
        </h2>
      </div>
      <div className="">
        <h4 className="text-xl font-bold leading-[23.5px] tracking-[0.5px] text-left">
          Client’s Challenges
        </h4>
        <ul className="list-disc pl-8">
          <li className="text-sm font-normal leading-6 tracking-[0.5px] text-left ">
            High Administrative Cost
          </li>
          <li className="text-sm font-normal leading-6 tracking-[0.5px] text-left ">
            Time consuming paperwork
          </li>
        </ul>
      </div>
      <div className="w-[457px] h-[185px]">
        <h4 className="text-xl font-bold leading-[23.5px] tracking-[0.5px] text-left">
          Campaign Successes
        </h4>
        <ul className="list-disc pl-8">
          <li className="text-sm font-normal leading-6 tracking-[0.5px] text-left ">
            Grown from 3 to 53 lawyers supporting US legal firms
          </li>
          <li className="text-sm font-normal leading-6 tracking-[0.5px] text-left ">
            Our lawyers index over 100 cases per week, with an average of 2+ per
            person
          </li>
          <li className="text-sm font-normal leading-6 tracking-[0.5px] text-left ">
            Client has saved significant cost
          </li>
          <li className="text-sm font-normal leading-6 tracking-[0.5px] text-left ">
            Faster case turnaround times
          </li>
          <li className="text-sm font-normal leading-6 tracking-[0.5px] text-left ">
            Support in preparation for court cases
          </li>
        </ul>
      </div>
    </div>
  );
}
