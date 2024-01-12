/* eslint-disable react/prop-types */
export default function UploadImage({ file, setFile }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <>
      <div className="relative rounded-3xl border-dashed border-2 border-gray-500 hover:border-rose-400 p-3 flex justify-center items-center h-80">
        <input
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          type="file"
          name="imgUrl"
          onChange={handleFileChange}
        />
        <svg
          className="w-8 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
        {file ? (
          <span className="text-gray-400 ml-2">{file.name}</span>
        ) : (
          <span className="text-gray-400 ml-2">Upload Image</span>
        )}
      </div>
    </>
  );
}
