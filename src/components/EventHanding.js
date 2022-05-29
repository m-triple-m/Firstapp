import { useState } from "react";

const EventHanding = () => {
  const [myImg, setMyImg] = useState(
    "https://yt3.ggpht.com/ytc/AKedOLTHsf56D4QSxWa_hAX74o4i6Q_sqzKdNn7XNqw8hw=s900-c-k-c0x00ffffff-no-rj"
  );

  const handleClick = () => {
    alert("You clicked the wrong button!!");
  };

  let c = 1;

  const updateCount = () => {
    c++;
    console.log(c);
  };

  const [count, setCount] = useState(10);
  const [email, setEmail] = useState("");

  const updateState = () => {
    setCount(count + 1);

    console.log(count);
  };

  return (
    <div className="container">
      <h1 className="text-center">Event Handling</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log("clicked!!");
        }}
      >
        Just Click IT!!
      </button>

      <button className="btn btn-danger" onClick={handleClick}>
        Dont Click
      </button>

      <input
        className="form-control"
        onChange={(e) => {
          setMyImg(e.target.value);
        }}
        value={myImg}
      />
      <img src={myImg} alt="" />

      <h1>C : {c}</h1>

      <button className="btn btn-success" onClick={updateCount}>
        Add Count
      </button>

      <h1>State Variable : {count}</h1>

      <button className="btn btn-warning" onClick={updateState}>
        Increment State
      </button>

      <input
        className="form-control mt-5"
        onChange={(e) => {
          //   console.log("value changed");
          console.log(e.target.value);

          setEmail(e.target.value);
        }}
      />
      <h2>{email}</h2>
    </div>
  );
};

export default EventHanding;
