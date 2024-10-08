import vector from "../images/Vector 3.png";
export default function OurClient() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="w-[692px] h-[89px] flex flex-col space-y-3">
        <h2 className="h-7 w-[135px] text-2xl font-bold leading-[28.2px] tracking-[2px] text-left">
          Our Client
        </h2>
        <img
          src={vector}
          loading="lazy"
          alt="vector"
          className="w-[78px] border-l-2 "
        />
        <p className="w-[692px] h-[32px] text-sm font-normal leading-[16.45px] tracking-[0.5px] text-left ">
          Based in the United States, our client is a legal firm consisting of
          mainly senior lawyers that specialise in matters that appear in court.
        </p>
      </div>
      <div className="w-[692px] h-[208px] flex flex-col space-y-3">
        <h2 className="h-7 text-2xl font-bold leading-[28.2px] tracking-[2px] text-left">
          The Approach
        </h2>
        <img
          src={vector}
          loading="lazy"
          alt="vector"
          className="w-[78px] border-l-2 "
        />
        <p className="w-[692px] h-[32px] text-sm font-normal leading-[16.45px] tracking-[0.5px] text-left ">
          Most court cases require the indexing of medical records, preparation
          of hearing reviews, hearing sheets and medical follow up calls to
          present to the court and judge. In many cases, the legal team is
          presented with hundreds of pages of legal documents to work through in
          order to find the pieces of information most relevant to the case.To
          process the information, get all the information needed for each case,
          as well as make important decisions on how to win the case in court,
          our client required a partner that can assist with the major
          administrative work and decision-making.
          <br />
          <br />
          Our team of junior lawyers work closely with the senior lawyers in the
          decision-making process and, with the collaboration, the senior
          lawyers are able to spend more time focused on the revenue generation
          and the time needed in court. The client is able to take on more cases
          because of the support we give, enabling them hire more senior lawyers
          and mid-level managers in the US, increasing the number of cases,
          thereby leading to faster case turnaround times and higher yearly
          revenue.
        </p>
      </div>
    </div>
  );
}
