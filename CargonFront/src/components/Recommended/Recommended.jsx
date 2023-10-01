import Button from "../Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  const filterOptions = [
    {
      value: "",
      title: "Todos",
    },
    {
      value: "Nike",
      title: "Nike",
    },
    {
      value: "Adidas",
      title: "Adidas",
    },
    {
      value: "Puma",
      title: "Puma",
    },
  ];
  return (
    <>
      <div>
        <h2 className="recommended-title">Marca</h2>
        <div className="recommended-flex">
          {filterOptions.map((option, index) => (
            <Button
              key={index}
              onClickHandler={handleClick}
              value={option.value}
              title={option.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommended;
