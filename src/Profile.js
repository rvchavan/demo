function name(e) {
  return <h1>{e}</h1>;
}

const Profile = (props) => {
  return (
    <>
      <h1>{props.data}</h1>
      {name("Vitthal")}
    </>
  );
};

export default Profile;
