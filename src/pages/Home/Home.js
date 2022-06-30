import * as home from "../../components";

const Home = () => {
  return (
    <>
      <home.Header />
      <home.Services />
      <home.Customers />
      <home.Connects />
      <home.Reviews />
      <home.Info />
      <home.Blogs blog={false} />
    </>
  );
};

export default Home;
