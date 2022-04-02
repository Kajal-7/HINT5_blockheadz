import React from 'react'
import "./Form.css";

const Form = () => {
  return (
    <div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    
    
    <div class="container contact" id="form">
        <div class="row" id="form1">
            <div class="col-md-3">
                <div class="contact-info">
                    <img id="env" src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
                    <h2 class="title">Tell Us About You</h2>
                    {/* <h4>We would love to hear from you !</h4> */}
                </div>
            </div>
            <div class="col-md-9">
                <div class="contact-form">
                    <div class="form-group" >
                      <label class="control-label col-sm-2" for="Organisation"> Organisation:</label>
                      <div class="col-sm-10">          
                        <input type="text" class="form-control" id="fname" placeholder="Enter Organisation Name" name="fname"/>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-sm-2" for="Phone">Phone:</label>
                      <div class="col-sm-10">          
                        <input type="text" class="form-control" id="lname" placeholder="Enter Phone number" name="lname"/>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-sm-2" for="Location">Location:</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" id="email" placeholder="Enter Location" name="email"/>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-sm-2" for="comment">Description:</label>
                      <div class="col-sm-10">
                        <textarea class="form-control" rows="5" id="comment"></textarea>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-sm-2" for="Deadline">Deadline:</label>
                      <div class="col-sm-10">
                        <input type="date" class="form-control" id="email" placeholder="Enter Deadline" name="email"/>
                      </div>
                    </div>
                    <div class="form-group">        
                      <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-default">Submit</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Form