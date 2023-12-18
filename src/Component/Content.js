import React from "react";
import PostFooter from "./PostFooter";

function Content() {
  return (
    <div className="m-3">
      <div className="font-normal text-lg">
        <p className=" overflow-hidden text-ellipsis w-fit">
          How you maximize productivity? Learn how one platform powered
          ...
          <span
            className="text-[#5A5A5A]"
          >
            See more
          </span>
        </p>
      </div>
      <div className="w-full h-[45vw] bg-[#ECE9E9] m-1 mt-2">

      </div>
      <div className="">
        <p>
        Watch the demo to see how you can see more deals no matter what.
        </p>
        <p className="mt-3 text-[#9E9D9D]">
        salesforce.com
        </p>
      </div>
      <div className="mt-5 text-center">
        <p className="text-[#0075FA] text-xl font-normal">Learn More</p>
      </div>
    </div>
  );
}

export default Content;
