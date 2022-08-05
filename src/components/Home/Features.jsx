import React from "react";
import FeatureBlock from "./FeatureBlock";
import FeatureImg1 from "./../../assets/feature-1.png";
import FeatureImg2 from "./../../assets/feature-2.png";
import FeatureImg3 from "./../../assets/feature-3.png";
import FeatureImg4 from "./../../assets/feature-4.png";

const Features = () => {
  return (
    <div className="container grid gap-x-4 gap-y-4 grid-cols-4 pt-24 pb-20">
      <FeatureBlock img={FeatureImg1} title={"Solution Focused"} />
      <FeatureBlock img={FeatureImg2} title={"Customer Oriented"} />
      <FeatureBlock img={FeatureImg3} title={"99.99% Success"} />
      <FeatureBlock img={FeatureImg4} title={"Decision Maker"} />
    </div>
  );
};

export default Features;
