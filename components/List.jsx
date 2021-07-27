function List({ title, children }) {
  return (
    <div className="max-w-lg lg:max-w-xl 2xl:max-w-2xl xl:mx-16 mb-16">
      <div id="modal" className="flex flex-row items-center justify-center">
        <h1 className="font-extrabold text-center lg:text-4xl text-2xl mb-6 text-gray-100">{title}</h1>
      </div>
      <div className="bg-gray-200 w-full py-1 rounded-lg shadow-xl">
        {children}
      </div>
    </div>
  );
}

export default List;
