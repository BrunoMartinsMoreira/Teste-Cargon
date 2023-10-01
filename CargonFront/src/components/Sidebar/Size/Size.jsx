import Input from "../../Input";
import "./Size.css";

const Size = ({ handleChange, selectedValue }) => {
  console.log(selectedValue);

  const filterOptions = [
    {
      value: "",
      title: "Todos",
    },
    {
      value: "XPP",
      title: "XPP",
    },
    {
      value: "P",
      title: "P",
    },
    {
      value: "M",
      title: "M",
    },
    {
      value: "G",
      title: "G",
    },
    {
      value: "39",
      title: "39",
    },
    {
      value: "44",
      title: "44",
    },
  ];
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Tamanho</h2>

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

export default Size;
