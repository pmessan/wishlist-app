import Layout from '../components/Layout';
import Link from 'next/link'

function handler(values) {
    const { userfile } = values;
    const data = new FormData();
    data.append("file", userfile);
    fetch("/api/wishitem/upload", {
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data"
        // },
        body: data
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });

    // const formData = new FormData();
    // const { actualFile } = values;
    // console.log("here!")
    // formData.append('fileName', actualFile)


    // const options = {
    //     method: 'POST',
    //     body: formData
    // }

    // const response = fetch(`/api/wishitems/upload`, options);

    // if (response.status === 200) {
    //     console.log('happy days')
    // }

}

function AddItem({ home }) {
    return (
        <Layout>
            <div className="max-w-md lg:max-w-2xl 2xl:max-w-3xl mx-auto px-8 py-24">
                <div className="flex flex-row items-center justify-center" >
                    <h1 className="font-extrabold text-center lg:text-4xl text-2xl mb-6 text-gray-100" >Add New Wishlist Item</h1>
                </div>
                <div className="bg-gray-50 mx-4  px-6 md:px-12 rounded-xl shadow-xl flex flex-col flex-grow ">
                    <form action="/api/wishitems/upload" method="POST" onSubmit={handler}>
                        <div className="py-12 w-full">
                            <div className="max-w-md">
                                <div className="grid grid-cols-1 gap-6">
                                    <label className="block">
                                        <span className="text-gray-700 font-bold">Item Name</span>
                                        <input
                                            type="text"
                                            className="mt-0 block w-full px-0.5 rounded-md border-gray-300 focus:ring-0 focus:outline-none focus:border-purple-500"
                                            placeholder="My new gift!"
                                            name="itemName"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="text-gray-700 font-bold">Link to buy</span>
                                        <input
                                            type="text"
                                            className="mt-0 block w-full px-0.5 rounded-md border-gray-300 focus:ring-0 focus:outline-none focus:border-purple-500"
                                            placeholder="https://amazon.com/"
                                            name="itemUrl"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="text-gray-700 font-bold">Description</span>
                                        <textarea
                                            className="mt-0 block w-full px-0.5 rounded-md border-gray-300 focus:ring-0 focus:outline-none focus:border-purple-500"
                                            rows="2"
                                            placeholder="What would this gift mean to you?"
                                            name="description"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="text-gray-700 font-bold">Upload a picture</span><br />
                                        <p className="text-xs leading-snug text-gray-600 mb-2">Image should ideally be square, with the gift item in focus.</p>
                                        <input type="file" id="img" name="img" accept="image/*" className="w-28" change="fileName" />
                                    </label>
                                    <button type="submit" className="
                                                inline-block
                                                bg-indigo-600
                                                text-white
                                                px-2
                                                py-1
                                                rounded-lg
                                                shadow-md
                                                font-semibold
                                                text-sm
                                                sm:text-base
                                                hover:bg-indigo-400
                                                transform
                                                transition
                                                hover:-translate-y-0.5
                                                focus:outline-none
                                                focus:ring
                                                focus:ring-offset-2
                                                focus:ring-indigo-500
                                                focus:ring-opacity-50
                                                active:bg-indigo-600
                                                w-28" >Submit</button>

                                </div>
                            </div>
                        </div>

                    </form>

                </div>
                <h2 className="text-center text-xl text-gray-200 font-bold mt-4 ">
                    <Link href="/">
                        <a> &lt; Back to home</a>
                    </Link>
                </h2>
            </div>

        </Layout>
    )
}

export default AddItem