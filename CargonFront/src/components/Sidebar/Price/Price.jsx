import Input from "../../Input";
import "./Price.css";

const Price = ({ handleChange, selectedValue }) => {
  console.log(selectedValue);

  const filterOptions = [
    {
      value: "",
      title: "Todos",
    },
    {
      value: 150,
      title: "Até R$ 150",
    },
    {
      value: 250,
      title: "Até R$ 250",
    },
    {
      value: 350,
      title: "Até R$ 350",
    },
    {
      value: 500,
      title: "Até R$ 500",
    },
  ];
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Preço</h2>

        {filterOptions.map((option, index) => (
          <Input
            key={index}
            handleChange={handleChange}
            value={option.value}
            title={option.title}
            name={option.title}
            currentValue={selectedValue}
          />
        ))}
      </div>
    </>
  );
};

export default Price;
