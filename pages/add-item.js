import Layout from '../components/Layout';
import Button from '@material-ui/core/Button';

function AddItem({ home }) {
    return (
        <Layout>
            <div className="max-w-sm lg:max-w-2xl 2xl:max-w-3xl mx-auto px-8 py-24">
                <div id="modal" className="flex flex-row items-center justify-center" >
                    <h1 className="font-extrabold text-center lg:text-4xl text-2xl mb-6 text-gray-100" >{"Create Your list"}</h1>
                </div>
                <div className="bg-gray-50 mx-4 px-12 rounded-lg shadow-xl flex flex-col flex-grow ">
                    <form action="#" method="POST">
                        <div className="py-12 w-full">
                            <div className="max-w-md">
                                <div className="grid grid-cols-1 gap-6">
                                    <label className="block">
                                        <span className="text-gray-700 font-bold">Item name</span>
                                        <input
                                            type="text"
                                            className="mt-0 block w-full px-0.5 rounded-md border-gray-300 focus:ring-0 focus:outline-none focus:border-purple-500"
                                            placeholder="My new gift!"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="text-gray-700 font-bold">Link to buy</span>
                                        <input
                                            type="text"
                                            className="mt-0 block w-full px-0.5 rounded-md border-gray-300 focus:ring-0 focus:outline-none focus:border-purple-500"
                                            placeholder="https://amazon.com/"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="text-gray-700 font-bold">Additional details</span>
                                        <textarea
                                            className="mt-0 block w-full px-0.5 rounded-md border-gray-300 focus:ring-0 focus:outline-none focus:border-purple-500"
                                            rows="2"
                                            placeholder="What would this gift mean to you?"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="text-gray-700 font-bold">Upload a picture</span><br />
                                        <p className="text-xs leading-snug text-gray-600 mb-2">Image should ideally be square, with the gift item in focus.</p>
                                        <input type="file" id="img" name="img" accept="image/*"></input>
                                    </label>
                                    <button type="submit" className="btn btn-primary w-3/12" >Submit</button>
                                </div>
                            </div>
                        </div>

                    </form>

                </div>
            </div>

        </Layout>
    )
}

export default AddItem