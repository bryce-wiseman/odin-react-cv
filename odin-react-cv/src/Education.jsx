import { addEducationUpdate, addEducationUpdate2 } from "./updateFunctions"

function Education() {

    return(
        <>
        <div className="infoBox" id="educationInfo">
            <div className="infoHeader" id="educationHeader">
                <p className="infoTitle" id="educationTitle">Education:</p>
                <button className="infoToggleBtn" id="educationToggleBtn" type="button">+</button>
            </div>
            <div className="infoInputs hidden" id="educationInputs">
                <label htmlFor="degreeInput">Degree:</label>
                <input type="text" name="degreeInput" id="degreeInput" />
                <br />
                <label htmlFor="collegeInput">College:</label>
                <input type="text" name="collegeInput" id="collegeInput" />
                <br />
                <label htmlFor="collegeYearsInput">Years Attended:</label>
                <input type="text" name="collegeYearsInput" id="collegeYearsInput" />
                <br />
                <button className="infoUpdateBtn" id="educationUpdateBtn">Update</button>
            </div>
    { addEducationUpdate() }
</div>

<div className="infoBox" id="educationInfo2">
            <div className="infoHeader" id="educationHeader2">
                <p className="optional">(optional) </p>
                <p className="infoTitle" id="educationTitle2">Education 2:</p>
                <button className="infoToggleBtn" id="educationToggleBtn2" type="button">+</button>
            </div>
            <div className="infoInputs hidden" id="educationInputs2">
                <label htmlFor="degreeInput2">Degree:</label>
                <input type="text" name="degreeInput2" id="degreeInput2" />
                <br />
                <label htmlFor="collegeInput2">College:</label>
                <input type="text" name="collegeInput2" id="collegeInput2" />
                <br />
                <label htmlFor="collegeYearsInput2">Years Attended:</label>
                <input type="text" name="collegeYearsInput2" id="collegeYearsInput2" />
                <br />
                <button className="infoUpdateBtn" id="educationUpdateBtn2">Update</button>
            </div>
        { addEducationUpdate2() }
        </div>
        </>
    )
}

export default Education