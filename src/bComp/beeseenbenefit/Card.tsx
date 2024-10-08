import data from "./data";

export default function Card() {
  return (
    <div className="flex justify-between px-16 space-y-8 items-center flex-wrap my-10">
      {data.map((items) => (
        <div
          key={items.id}
          className="h-[470px] w-[387px] relative shadow-xl p-5 flex flex-col justify-center space-y-5 bg-[#FFFFFF]"
        >
          <div className="my-10">
            <img
              src={items.imgUrl}
              alt="title"
              className="w-[162px] absolute h-[121-12px] top-4 left-[113px] "
            />
          </div>

          <h5 className="h-6 font-bold text-xl leading-6 text-start">
            {items.title}
          </h5>
          <p className="w-[347px] h-[160px] text-sm font-normal leading-[16.45px] text-justify ">
            {items.text}
          </p>
        </div>
      ))}
    </div>
  );
}
