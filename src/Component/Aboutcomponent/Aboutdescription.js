import React from "react";

const Aboutdescription = ({ title }) => {
  return (
    <div className="mb-28">
      <h2
        className="mb-3 font-dmsans text-xl text-primary
      "
      >
        {title}
      </h2>
      <p className="font-dmsans text-sm font-normal text-seconddary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an printer took a galley of type and scrambled it
        to make a type specimen book.
      </p>
    </div>
  );
};

export default Aboutdescription;
