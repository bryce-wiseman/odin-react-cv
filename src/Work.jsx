import { addWorkUpdate, addWorkUpdate2, addWorkUpdate3 } from "./updateFunctions"

function Work() {

    return(
        <>
        <div className="infoBox" id="workInfo">
            <div className="infoHeader" id="workHeader">
                <p className="infoTitle" id="workTitle">Work Experience:</p>
                <button className="infoToggleBtn" id="workToggleBtn" type="button">+</button>
            </div>
            <div className="infoInputs hidden" id="workInputs">
                <label htmlFor="jobTitleInput">Job Title:</label>
                <br />
                <input type="text" name="jobTitleInput" id="jobTitleInput" />
                <br />
                <label htmlFor="jobYearsInput">Years Worked:</label>
                <br />
                <input type="text" name="jobYearsInput" id="jobYearsInput" />
                <br />
                <label htmlFor="jobDescriptionInput">Description:</label>
                <br />
                <textarea name="jobDescriptionInput" id="jobDescriptionInput" rows={8} />
                <br />
                <button className="infoUpdateBtn" id="workUpdateBtn">Update</button>
            </div>
        { addWorkUpdate() }
        </div>

        <div className="infoBox" id="workInfo2">
            <div className="infoHeader" id="workHeader2">
                <p className="optional">(optional)</p>
                <p className="infoTitle" id="workTitle2">Work Experience 2:</p>
                <button className="infoToggleBtn" id="workToggleBtn2" type="button">+</button>
            </div>
            <div className="infoInputs hidden" id="workInputs2">
                <label htmlFor="jobTitleInput2">Job Title:</label>
                <br />
                <input type="text" name="jobTitleInput2" id="jobTitleInput2" />
                <br />
                <label htmlFor="jobYearsInput2">Years Worked:</label>
                <br />
                <input type="text" name="jobYearsInput2" id="jobYearsInput2" />
                <br />
                <label htmlFor="jobDescriptionInput2">Description:</label>
                <br />
                <textarea name="jobDescriptionInput2" id="jobDescriptionInput2" rows={8} />
                <br />
                <button className="infoUpdateBtn" id="workUpdateBtn2">Update</button>
            </div>
        { addWorkUpdate2() }
        </div>

        <div className="infoBox" id="workInfo3">
            <div className="infoHeader" id="workHeader3">
                <p className="optional">(optional)</p>
                <p className="infoTitle" id="workTitle3">Work Experience 3:</p>
                <button className="infoToggleBtn" id="workToggleBtn3" type="button">+</button>
            </div>
            <div className="infoInputs hidden" id="workInputs3">
                <label htmlFor="jobTitleInput3">Job Title:</label>
                <br />
                <input type="text" name="jobTitleInput3" id="jobTitleInput3" />
                <br />
                <label htmlFor="jobYearsInput3">Years Worked:</label>
                <br />
                <input type="text" name="jobYearsInput3" id="jobYearsInput3" />
                <br />
                <label htmlFor="jobDescriptionInput3">Description:</label>
                <br />
                <textarea name="jobDescriptionInput3" id="jobDescriptionInput3" rows={8} />
                <br />
                <button className="infoUpdateBtn" id="workUpdateBtn3">Update</button>
            </div>
        { addWorkUpdate3() }
        </div>
        </>
        
    )
}

export default Work