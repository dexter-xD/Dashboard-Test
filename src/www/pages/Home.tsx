import CreateUserForm from '../components/forms/CreateUserForm';
import RootLayout from '../layouts/Root';

const Home = () => {
  return (
    <RootLayout>
      <div class='text-2xl font-bold text-green-500'>Tailwind is working!</div>

      <CreateUserForm />
    </RootLayout>
  );
};

export default Home;
