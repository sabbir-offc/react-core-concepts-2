// import './Friends.css'
export default function Friend({ friend }) {
    console.log(friend)
    const {name, email, address} = friend;
  return (
    <div className="box">
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <p>Address: {address.street}</p>
    </div>
  );
}
