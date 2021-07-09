import Image from 'next/image'

function Item({ wishlistItem }) {
    return (
        <div className=" mt-5 max-w-sm rounded-xl mx-6 h-24 bg-gray-300 grid grid-cols-4">
            <div className="relative col-span-1 w-full object-cover object-center">
                <Image src={wishlistItem.imageUrl} alt={wishlistItem.imageAlt} layout="fill" objectFit="scale-down" />
            </div>
            <div className="block col-span-3">
                <h1 className="text-lg text-center">{wishlistItem.description}</h1>
            </div>
        </div>
    );
}

export default Item;
