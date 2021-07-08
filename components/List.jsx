import Item from './Item';

function List({ title, children }) {
    return (
        <div className="bg-indigo-300 mt-20 ml-8 py-6 rounded-lg">
            <div>
                <h1 className="font-extrabold text-center text-2xl " >{title}</h1>
            </div>
            {children}
        </div>
    );
}

export default List;
