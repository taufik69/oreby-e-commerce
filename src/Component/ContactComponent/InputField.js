import React from "react";

const InputField = (props) => {
  const { type, placeholder, inputhead } = props;

  return (
    <div>
      <h3 className="font-dmsans text-base font-bold text-primary">
        {inputhead}
      </h3>
      <props.inputType
        type={type}
        placeholder={placeholder}
        className=" mb-7 w-full  border-b-2 border-inputbottom  py-3.5 outline-none placeholder:text-sm"
      />
    </div>
  );
};

export default InputField;
