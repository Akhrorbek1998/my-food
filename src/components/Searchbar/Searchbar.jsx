const Searchbar = () => {
  return (
    <div className="flex items-center justify-between mb-6 pt-6">
      <div>
        <h2 className="text-[28px] leading-[39.2px] font-semibold mb-1">
          Jaegar Resto
        </h2>
        <p className="text-base leading-[22.4px] font-normal text-lighter">
          Mon Dec 11 2023
        </p>
      </div>

      <form>
        <div className="w-[220px] p-[14px] flex justify-between items-center gap-2 rounded-md bg-[#2D303E] border-2 border-base-dark-line">
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            className="w-full bg-transparent text-sm  ring-0 outline-none"
            type="text"
            placeholder="Search for food, coffe, etc.."
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
