import React from "react";
import "./style.css";

const Form = props => {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel"><h2>Book Search</h2></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="EX: Harry Potter"
                    onChange={props.handleInputChange}
                />
            </div>

            <button type="submit" className="submitBtn btn btn-light" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default Form