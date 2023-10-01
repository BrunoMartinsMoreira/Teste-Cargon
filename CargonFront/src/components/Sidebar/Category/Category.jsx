import "./Category.css";
import Input from "../../Input";

function Category({ handleChange, selectedValue }) {
  const filterOptions = [
    {
      value: "Camiseta",
      title: "Camiseta",
    },
    {
      value: "Regata",
      title: "Regata",
    },
    {
      value: "Calção",
      title: "Calção",
    },
    {
      value: "Acessório",
      title: "Acessório",
    },
  ];
  return (
    <div>
      <h2 className="sidebar-title">Categoria</h2>
      <label className="sidebar-label-container">
        <input
          checked={!selectedValue}
          onChange={handleChange}
          type="radio"
          value=""
          name="test"
        />
        <span className="checkmark"></span>Todos
      </label>
      <div>
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
    </div>
  );
}

export default Category;
