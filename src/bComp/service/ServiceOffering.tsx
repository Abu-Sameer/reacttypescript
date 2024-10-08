import polytagon from "../images/Polygon.png";
import office from "../images/office.png";
import law from "../images/blind-justice.png";
import data from "./data";

export default function ServiceOffering() {
  return (
    <div className="">
      <div className="flex justify-between p-8 m-6 items-center">
        <div className="w-[590px] h-[492px] top-[2085px] left-[120px] shadow-2xl p-4">
          <p className="w-[250px] h-[28px] top-[36px] left-[42px] text-2xl font-bold leading-[28.2px] -mb-10 mt-5 px-6">
            Service Offering
          </p>
          <div className="flex flex-col space-y-12 text-white items-center">
            {data.map((item) => (
              <div
                key={item.id}
                className="relative w-[520px] h-[67px] top-[102px] left-[5px] py-6 px-[94px] rounded-md bg-[#FCB900]"
              >
                <img
                  src={polytagon}
                  alt="gon"
                  loading="lazy"
                  className="w-[58px] h-[76px] bg-[#FFE293] absolute -left-5 top-0"
                />
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <img
            src={office}
            alt=""
            loading="lazy"
            className="w-[590px] h-[492px] top-[2085px] left-[730px] "
          />
        </div>
      </div>
      <div className="flex justify-between p-8 m-6 items-center">
        <div className="w-[590px] h-[492px] top-[2613px] laft-[120px] ">
          <img
            src={law}
            loading="lazy"
            alt=""
            className=" w-[590px] h-[492px] "
          />
        </div>
        <div className="w-[590px] h-[492px] font-sans top-[2613px] left-[730px] shadow-2xl p-8 flex flex-col space-y-4">
          <h1 className="w-[214px] h-[28px] top-[22px] left-[42px] text-2xl font-bold leading-[28.2px] text-left ">
            Our Value Offering
          </h1>
          <p className="w-[548px] h-[364px] top-[68px] left-[22px] text-sm font-normal leading-[26px] text-left ">
            <li>
              Our lawyers index over 100 cases per week, with an average of 2+
              cases per person; this is used as evidence to support the case in
              court and get favourable judgments for the client.
            </li>
            <li>Support our clients through the pre and post court process.</li>
            <li>Team of 70+ Qualified lawyers</li>
            <li>
              Our legal associates support our clients to achieve cost
              efficiencies and faster case turnaround times.
            </li>
            <li>
              Our clients have been able to deploy more resources towards
              revenue generating activities because we do the ''Heavy Lifting".
            </li>
            <li>Experience with US Courts</li>
            <li>We offer a 30-Day trial period for our new clients.</li>
            <li>
              We are able to supplement your Paralegal and Junior associates
              workflow in a relatively short period of time to produce the
              highest quality work.
            </li>
            <li>
              We modify each client engagement suit our clients needs and
              processes.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
}
