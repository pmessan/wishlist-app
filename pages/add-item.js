import Input from '../components/Input';
import AreaInput from '../components/AreaInput';
import PhotoInput from '../components/PhotoInput';
import Form from '../components/Form';
import { useUser } from '../lib/hooks';
import Background from '../components/Background';
import Header from '../components/Header';
import Container from '../components/Container';

// import Button from '@material-ui/core/Button';

function AddItem() {
  // check if user is logged in
  const user = useUser({ redirectTo: '/login' });
  return (
    <>
      {user && (
        <Background>
          <Header title="Create New Item" />
          <Container>
            <Form title="Add New Item" buttonText="Add" action="/api/wishitems">
              <Input name="name" title="Item Name" placeholder="My new Item!" type="text" />
              <Input name="buyLink" title="Link to Buy" placeholder="https://amazon.com/" type="text" />
              <AreaInput name="description" title="Additional Details" rows="2" placeholder="What would this item mean to you?" />
              <PhotoInput title="Upload a picture" prompt="Image should ideally be square, with the gift item in focus." name="itemImg" />
            </Form>
          </Container>
          <div className="flex items-center justify-center mt-5">
            <a className="btn btn-danger w-1/6 mr-8" href="/api/logout">Logout</a>
            <a className="btn btn-danger w-1/6" href="/api/logout">Logout</a>
          </div>
        </Background>
      )}

    </>
  );
}

export default AddItem;
