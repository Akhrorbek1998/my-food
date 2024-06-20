import { FaPlus } from "react-icons/fa6";

const AddNewDish = () => {
  return (
    <div className="w-[221px] h-[289px] rounded flex flex-col items-center justify-center border-dashed border-2 border-primary cursor-pointer">
      <span className="mb-4">
        <FaPlus color="#EA7C69" size={24} />
      </span>
      <p className="text-lg font-normal text-primary">Add new dish</p>
    </div>
  );
};

export default AddNewDish;
