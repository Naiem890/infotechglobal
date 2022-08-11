import React from "react";
import Button from "../Shared/Button";

const ContactForm = () => {
  return (
    <form className="grid md:grid-cols-2 gap-8">
      <input
        type="text"
        placeholder="Name"
        class="input bg-light-blue w-full text-base"
      />
      <input
        type="email"
        placeholder="Email"
        class="input bg-light-blue w-full text-base"
      />
      <input
        type="number"
        placeholder="Phone Number"
        class="input bg-light-blue w-full text-base col-span-full"
      />
      <textarea
        type="text"
        placeholder="Your Message Here"
        class="textarea bg-light-blue w-full text-base col-span-full h-44"
      />
      <div className="-mt-8">
        <Button
          type="submit"
          className="bg-dark-blue hover:bg-light-green mt-6 text-white"
        >
          Submit Now
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
