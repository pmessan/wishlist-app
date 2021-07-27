import Layout from '../components/Layout';
import Input from '../components/Input';
import AreaInput from '../components/AreaInput';
import PhotoInput from '../components/PhotoInput';
// import Button from '@material-ui/core/Button';

function AddItem() {
  return (
    <Layout>
      <div className="max-w-sm lg:max-w-2xl 2xl:max-w-3xl mx-auto px-8 py-24">
        <div id="modal" className="flex flex-row items-center justify-center">
          <h1 className="font-extrabold text-center lg:text-4xl text-2xl mb-6 text-gray-100">Create Your List</h1>
        </div>
        <div className="bg-gray-50 mx-4 px-12 rounded-lg shadow-xl flex flex-col flex-grow ">
          <form action="/api/wishitems" method="POST" encType="multipart/form-data">
            <div className="py-12 w-full">
              <div className="max-w-md">
                <div className="grid grid-cols-1 gap-6">
                  <Input name="name" title="Item Name" placeholder="My new Item!" />
                  <Input name="buyLink" title="Link to Buy" placeholder="https://amazon.com/" />
                  <AreaInput name="description" title="Additional Details" rows="2" placeholder="What would this item mean to you?" />
                  <PhotoInput title="Upload a picture" prompt="Image should ideally be square, with the gift item in focus." name="itemImg" />
                  <button type="submit" className="btn btn-primary w-3/12">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default AddItem;
