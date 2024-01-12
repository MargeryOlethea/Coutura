/* eslint-disable react/prop-types */
export default function ButtonNavbar({ name, onClick }) {
  return (
    <>
      <p
        onClick={onClick}
        className="font-semibold text-black hover:bg-gradient-to-r hover:from-rose-200 hover:to-amber-400 hover:bg-clip-text hover:text-transparent hover:scale-110 transform transition duration-300 ease-in-out "
      >
        {name}
      </p>
    </>
  );
}
