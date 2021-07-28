export default function Container({ children }) {
  return (
    <>
      <div className="bg-gray-50 mx-4 px-12 rounded-lg shadow-xl flex flex-col flex-grow ">
        {children}
      </div>
    </>
  );
}
