const PrimaryButton = ({ label, action }) => {
  const baseClasses =
    "border rounded-full inline-flex items-center justify-center py-3 px-7 text-center font-medium text-white";
  const labelClasses = "text-xl"; // Adjust the font size here
  const hoverClasses = "hover:bg-[#1B44C8] hover:border-[#1B44C8]";
  const disabledClasses =
    "disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5";
  const activeClasses = "active:bg-[#1B44C8] active:border-[#1B44C8]";

  return (
    <button
      onClick={action}
      className={`bg-primary border-primary ${baseClasses} ${hoverClasses} ${disabledClasses} ${activeClasses}`}
    >
      <span className="mr-2">{/* Optionally, you can add an icon here */}</span>
      <span className={labelClasses}>{label}</span>
    </button>
  );
};

export const GhostButton = ({ label, action }) => {

  return (
    <button onClick={action}
    class="flex items-center px-4 py-2 border-2 border-black text-black rounded-lg bg-transparent hover:bg-black hover:text-white transition-all duration-300 transform active:scale-95">

      <span className="mr-2">{/* Optionally, you can add an icon here */}</span>
      <span>{label}</span>
    </button>
  );
};

const LikeButton = ({ isLoading, isFavorite, handleLike }) => {
  return (
    <button
      onClick={handleLike}
      disabled={isLoading}
      className={`flex items-center p-2 rounded-full transition-colors duration-200 
                  ${
                    isFavorite
                      ? "text-red-500"
                      : "text-gray-500 hover:text-red-500"
                  }`}
    >
      <svg
        className={`w-6 h-6 ${
          isFavorite ? "fill-current text-red-500" : "fill-none stroke-current"
        }`}
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  );
};

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  }

  return (
      <div class="flex justify-center">
    <form className="flex" onSubmit={handleSearchSubmit}>
        <div class="flex  w-full mx-7 lg:max-w-[400px] rounded-full border-gray-400 border-opacity-65   border bg-gray-100 px-2">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            class="flex w-full  bg-transparent px-3 text-gray-700 rtl:text-right outline-0"
            placeholder="Procure seu filme"
          />

          <div class="border-gray-400 border-opacity-70 my-1 border-l "></div>

          <button
            type="submit"
            class="relative rounded-full bg-transparent px-2 py-2"
          >
            <svg
              class="fill-none size-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="#999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
    </form>
      </div>
  );
};
export default SearchBar;

export { PrimaryButton, LikeButton, SearchBar };
