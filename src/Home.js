import Profile from "./Profile";

function Home(props) {
  console.log(props);
  return (
    <>
      <h1>{props.title.Fname}</h1>
      <h1>{props.title.Lname}</h1>
      <h1>{props.title.company}</h1>
      <h1>{props.title.dob}</h1>
      <h1>{props.title.age}</h1>
      <Profile data="Sandy" />
    </>
  );
}

export default Home;
