import PropType from "prop-types";

const Experiance = ({ company, jobTitle, start, end, description }) => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-gray-600 text-lg font-YekanBd">
        {`${company} - `}
        <span className="text-gray-600 text-lg font-YekanReg">{jobTitle}</span>
      </h2>
      <div className="flex flex-row">
        <h2 className="text-gray-400 text-lg font-YekanReg">{start}</h2>
        <h2 className="text-gray-400 text-lg font-YekanReg">
          {end ? ` الی  ${end} ` : " تا کنون مشغول به فعالیتم "}
        </h2>
      </div>
      <p className="text-gray-800 text-md font-YekanReg">{description}</p>
      <hr />
    </section>
  );
};

Experiance.PropType = {
  company: PropType.string,
  jobTitle: PropType.string,
  start: PropType.string,
  end: PropType.string,
  description: PropType.string,
};

export default Experiance;
