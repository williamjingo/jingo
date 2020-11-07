import React from "react";

const MessageForm = () => {
  return (
    <React.Fragment>
      <h2 className="mb-3">Leave message</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Name</label>
            <input
              type="text"
              placeholder="Your Name*"
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              placeholder="Your Email*"
              className="form-control"
              id="inputEmail4"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Message</label>
          <textarea
            style={{ resize: "none" }}
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Message..."
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-dark btn-lg">
          Send Message
        </button>
      </form>
    </React.Fragment>
  );
};

export default MessageForm;
