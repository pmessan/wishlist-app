function Item({ itemDescription }) {
    return (
        <div className="block my-5 max-w-md rounded-xl mx-6 h-36 bg-gray-300 py-6">
            <h1 className="text-2xl font-bold text-center ">{itemDescription}</h1>
        </div>
    );
}

export default Item;
