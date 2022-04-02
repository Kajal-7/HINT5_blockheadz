import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { db } from "../../data/firebase";
import { useAuthContext } from "../../data/auth.js";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  getDoc
} from "firebase/firestore";
const Form = () => {

  const { user } = useAuthContext();
  const [orgName, setOrgName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [location, setLoc] = useState("");
  const [des, setDes] = useState("");
  const [deadline, setdeadline] = useState("");
  const [success,setSuccess]=useState(false);
  const [val,setVal]=useState();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      organisationName: orgName,
      phoneNo: phoneNo,
      location: location,
      des: des,
      deadline: deadline,
    };

    const jobColRef = collection(db, "Opportunities");
    const userColRef = doc(db, "users", user.uid);
    try {
     
      // await getDoc(userColRef).then((doc)=>{
      //   console.log(doc.data().OpportunitiesPosted)
      //    setVal( doc.data().OpportunitiesPosted);
      // })
      await addDoc(jobColRef, data).then(
        // updateDoc(userColRef, {
        //   OpportunitiesPosted: 2
        // }),
        setSuccess(true),
        setDes(""),
        setLoc(""),
        setOrgName(""),
        setPhoneNo(""),
        setdeadline("")

      );

      navigate("/recruit-volunteers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

      <div class="container contact" id="form">
        <div class="row" id="form1">
          <div class="col-md-3">
            <div class="contact-info">
              <img
                id="env"
                src="https://image.ibb.co/kUASdV/contact-image.png"
                alt="image"
              />
              <h2 class="title">Tell Us About You</h2>
              {/* <h4>We would love to hear from you !</h4> */}
            </div>
          </div>
          <div class="col-md-9">
            <div class="contact-form">
              <div class="form-group">
                <label class="control-label col-sm-2" for="Organisation">
                  {" "}
                  Organisation:
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="fname"
                    placeholder="Enter Organisation Name"
                    name="fname"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="Phone">
                  Phone:
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="lname"
                    placeholder="Enter Phone number"
                    name="lname"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="Location">
                  Location:
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Enter Location"
                    name="email"
                    value={location}
                    onChange={(e) => setLoc(e.target.value)}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="comment">
                  Description:
                </label>
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    rows="5"
                    id="comment"
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="Deadline">
                  Deadline:
                </label>
                <div class="col-sm-10">
                  <input
                    type="date"
                    class="form-control"
                    id="email"
                    placeholder="Enter Deadline"
                    name="email"
                    value={deadline}
                    onChange={(e) => setdeadline(e.target.value)}
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button
                    type="submit"
                    class="btn btn-default"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
