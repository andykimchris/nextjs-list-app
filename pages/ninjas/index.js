import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log("response", response);
  const data = await response.json();
  console.log("data", data);

  return {
    props: {
      users: data,
    },
  };
};

const Ninjas = ({ users }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {users.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
