import Image from 'next/image'

function Item({ wishlistItem: { name, imageUrl, imageAlt, description, buylink } }) {
    return (
        <>
            <div className="mt-5 rounded-xl mx-6 h-24 bg-gray-300 grid grid-cols-4" data-bs-toggle="collapse" href={'#' + name} role="button" aria-expanded="false" aria-controls="collapseExample">
                {/* <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Link with href
                </a> */}
                <div className="relative col-span-1 w-full object-cover object-center" >
                    <Image className="rounded-l-xl" src={imageUrl} alt={imageAlt} layout="fill" objectFit="fill" />
                </div>
                <div className="block col-span-3 py-1 px-4">
                    <p className="sm:text-md xl:text-xl text-left">{description}</p>
                    <p className="sm:text-xs xl:text-md text-left">{buylink}</p>
                </div>
            </div>

            <div className="collapse" id={name}>
                <div className="px-6 my-2 flex   justify-center  bg-gray-200">
                    <button className="btn btn-primary" href="#">Reserve</button>
                </div>
            </div>
        </>
    );
}

export default Item;
