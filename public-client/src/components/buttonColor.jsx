/* eslint-disable react/prop-types */
export default function ButtonColor({ name, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="border border-black rounded-full p-2 px-5 hover:bg-gradient-to-r hover:from-rose-200 hover:to-amber-400 hover:font-bold hover:border-none hover:scale-110 transition duration-500 ease-in-out active:bg-gradient-to-l"
      >
        {name}
      </button>
    </>
  );
}
