import { useState } from "react";

export default function Model() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Open Modal
      </button>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-500"
        >
          <div className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm">
            <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
              Its a simple Modal
            </div>
            <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </div>
            <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
              <button
                className="rounded-md border py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-300 active:bg-slate-100 "
                type="button"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-green-900 active:shadow-none ml-2"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
