const EditDish = ({ image, title, price, order }) => {
  return (
    <div className="w-[221px] h-[289px] pt-4 relative flex flex-col items-center  rounded-2xl mb-3 cursor-pointer transition-all duration-300 border border-base-dark-line  ease-out hover:scale-95">
      <img
        className="w-[132px] h-[132px] block mx-auto mb-4 rounded-full object-cover transition-all duration-300 hover:scale-105"
        src={image}
        alt={title}
        width={132}
        height={132}
      />
      <h3 className="mb-1 text-center text-sm w-[144px] font-medium leading-[18.2px]">
        {title}
      </h3>
      <div className="flex justify-center gap-1 items-center mb-4 text-sm font-normal leading-[19.6px] text-gray-300">
        <span>{price}</span>
        <span>.</span>
        <span>{order}</span>
      </div>
      <button className="w-full py-4 bg-base-primary gap-3 rounded-b-2xl absolute bottom-0 flex justify-center items-center">
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9512 16.0075C17.2543 16.0075 17.5 16.2484 17.5 16.5455C17.5 16.8178 17.2935 17.0429 17.0257 17.0785L16.9512 17.0834H11.2258C10.9227 17.0834 10.677 16.8426 10.677 16.5455C10.677 16.2731 10.8835 16.0481 11.1514 16.0124L11.2258 16.0075H16.9512ZM11.3827 3.6806C12.4217 2.66213 14.1069 2.66213 15.1459 3.6806L16.2245 4.73791C17.2635 5.75638 17.2635 7.40829 16.2245 8.42675L8.11717 16.3739C7.65359 16.8283 7.02506 17.0833 6.36901 17.0833H3.04878C2.74035 17.0833 2.49249 16.8342 2.50017 16.532L2.58369 13.248C2.6003 12.6273 2.85939 12.0355 3.30722 11.5965L11.3827 3.6806ZM10.755 5.81592L4.08332 12.3573C3.83438 12.6013 3.69012 12.9308 3.68089 13.2755L3.61121 16.0071L6.36901 16.0075C6.69352 16.0075 7.00559 15.8955 7.2519 15.6932L7.34108 15.6131L14.0458 9.04092L10.755 5.81592ZM14.3698 4.44136C13.7594 3.84305 12.7691 3.84305 12.1588 4.44136L11.5317 5.05508L14.8217 8.28008L15.4484 7.66599C16.0249 7.10092 16.0569 6.20369 15.5445 5.60171L15.4484 5.49867L14.3698 4.44136Z"
              fill="#EA7C69"
            />
          </svg>
        </span>
        <span className=" text-primary">Edit dish</span>
      </button>
    </div>
  );
};

export default EditDish;
// p-6 w-[200px] h-[226px] uppercase text-center bg-[#1F1D2B] relative rounded-2xl mt-[40px] mb-6 cursor-pointer transition-all duration-150 hover:shadow-lg hover:shadow-[#332e4f]
