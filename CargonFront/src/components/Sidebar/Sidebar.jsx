import Category from "./Category/Category";
import Price from "./Price/Price";
import Size from "./Size/Size";
import "./Sidebar.css";

const Sidebar = ({ handleChange, selectedValue }) => {
  return (
    <>
      <section className="sidebar">
        <Size handleChange={handleChange} selectedValue={selectedValue} />
        <Category handleChange={handleChange} selectedValue={selectedValue} />
        <Price handleChange={handleChange} selectedValue={selectedValue} />
      </section>
    </>
  );
};

export default Sidebar;
