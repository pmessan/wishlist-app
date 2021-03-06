import Input from '../components/Input';
import AreaInput from '../components/AreaInput';
import PhotoInput from '../components/PhotoInput';
import Form from '../components/Form';
// import { useUser } from '../lib/hooks';
import Background from '../components/Background';
import Header from '../components/Header';
import Container from '../components/Container';
import LinkButton from '../components/LinkButton';
import { useAdmin } from '../lib/admin-hooks';

// import Button from '@material-ui/core/Button';

function AddItem() {
  // check if admin is logged in
  const admin = useAdmin();
  console.log('add item');
  console.log(admin);
  return (
    <>
      {admin && (
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
          <div className="container mx-auto flex flex-row justify-center mt-5 mb-12">
            <LinkButton text="Back to Home" href="/" styles="btn btn-primary w-36 mr-8" />
            <LinkButton text="Logout" href="/api/logout" styles="btn btn-danger w-36 mr-8" />
          </div>
        </Background>
      )}

    </>
  );
}

export default AddItem;
