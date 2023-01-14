import {type NextPage} from "next";
import {api} from "utils";


const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main>
          <p>
              {hello.data?.greeting}
          </p>
      </main>
    </>
  );
};

export default Home;
