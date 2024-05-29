import { addGeneralUpdate } from "./updateFunctions"

function General() {

    return (
      <div className="infoBox" id="generalInfo">
      <div className="infoHeader" id="generalHeader">
          <p className="infoTitle" id="generalTitle">General Info:</p>
          <button className="infoToggleBtn" id="generalToggleBtn" type="button">+</button>
      </div>
      <div className="infoInputs hidden" id="generalInputs">
          <label htmlFor="nameInput">Name:</label>
          <input type="text" name="nameInput" id="nameInput" />
          <br />
          <label htmlFor="emailInput">Email:</label>
          <input type="email" name="emailInput" id="emailInput" />
          <br />
          <label htmlFor="phoneInput">Phone Number:</label>
          <input type="text" name="phoneInput" id="phoneInput" />
          <br />
          <button className="infoUpdateBtn" id="generalUpdateBtn">Update</button>
      </div>
  { addGeneralUpdate() }
  </div>
    )
}

export default General