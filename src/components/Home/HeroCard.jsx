import React from "react";
import Button from "../Shared/Button";

const HeroCard = ({ content }) => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2">
      <div className="md:max-w-xl max-w-sm bg-[rgba(102,197,175,.9)]  text-white mr-[15px] px-8 pt-12 pb-14 rounded">
        <h1 className="md:text-6xl text-3xl font-poppins font-bold  mb-5">
          {content.title}
        </h1>
        <p>{content.description}</p>
        <Button className="bg-white text-light-green mt-10 mb-5 cursor-pointer">
          <a href={content.buttonLink}>{content.buttonTitle}</a>
        </Button>
      </div>
    </div>
  );
};

export default HeroCard;
