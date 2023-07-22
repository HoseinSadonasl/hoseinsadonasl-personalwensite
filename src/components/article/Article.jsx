import PropType from "prop-types";

const Article = ({ title, description }) => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-gray-600 text-lg font-YekanBd">{title}</h2>
      <p className="text-gray-600 text-lg font-YekanTn">{description}</p>
    </section>
  );
};

Article.PropType = {
  title: PropType.string,
  description: PropType.string,
};

export default Article;
