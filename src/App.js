import { IoList, IoPersonAddSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
// import unq from "uniqid";
import { useSelector, useDispatch } from "react-redux";
import { selectData, addUserIn } from "./redux/dataSlice";

function App() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const templist = [];
  const [list, setList] = useState([]);
  const [user, setUser] = useState({ name: "", friendOf: "" });

  const addUser = () => {
    if (user.name.length < 2 && user.friendOf.length < 2) {
      alert("plz enter name");
    } else {
      dispatch(addUserIn(user));
      return;
    }
  };
  useEffect(() => {
    console.log(list);
  }, [list]);

  const findRelation = (value) => {
    // console.log(data);
    let fof = value.friendOf;
    if (!templist[value.name]) {
      templist.push(value.name);
    }
    if (!templist[value.friendOf]) {
      templist.push(value.friendOf);
    }
    // dispatch(addList(value));
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === fof) {
        // console.log(data[i]);
        var find = data[i];
        findRelation(find);
        return;
      }
    }
    // localStorage.setItem("list", JSON.stringify(list));
    setList(templist);
  };

  return (
    <div>
      <h1 className="text-center mt-2">Relation App</h1>
      <div className="container-fluid">
        {/* <p>demo</p> */}
        <h1>Add Friend</h1>
        <div className="input-group mb-3 ">
          <span className="input-group-text" id="basic-addon1">
            Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="input-group mb-3 ">
          <span className="input-group-text" id="basic-addon1">
            Friend Of
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Friend Of"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setUser({ ...user, friendOf: e.target.value })}
          />
        </div>
      </div>
      <div
        className="py-2 mx-1 text-center d-flex justify-content-center"
        style={{ borderRadius: 5 }}
      >
        <div
          className="py-2  px-3 bg-warning mx-1 text-center"
          style={{ borderRadius: 5, width: 60, cursor: "pointer" }}
          onClick={addUser}
        >
          <IoPersonAddSharp style={{ fontSize: 20 }} />
        </div>
      </div>
      <div className="container-fluid">
        <h1 className="text-center mb-3">Friends List</h1>
        <div className="container-fluid d-flex flex-row justify-content-center gap-3 align-content-center">
          {data?.map((i, index) => {
            return (
              <p
                key={index}
                className="bg-info px-2 text-center"
                style={{ borderRadius: 5, cursor: "pointer" }}
                onClick={() => findRelation(i)}
              >
                {i.name}
              </p>
            );
          })}
        </div>
      </div>

      <div className="container-fluid">
        <h1 className="text-center mb-3">Choose A Friends From Above List</h1>
        <div className="container-fluid d-flex flex-row justify-content-center gap-3 align-content-center">
          {list.map((i, index) => {
            if (list[index - 1] != i) {
              return (
                <>
                  <p
                    key={index}
                    className="text-success px-2 text-center"
                    style={{ borderRadius: 5, cursor: "pointer", fontSize: 20 }}
                  >
                    {i}
                  </p>
                  <BsArrowRight
                    style={{ marginTop: 7, fontSize: 20, fontWeight: "bold" }}
                  />
                </>
              );
            }
          })}
        </div>
      </div>
    </div>
  ); }

export default App;
