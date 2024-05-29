
function CV() {

    return (
        <div className='cv'>
            <h2 id="CV-Name"></h2>
            <div id='contact'>
                <p id="CV-Email"></p>
                <p id="CV-Phone"></p>
            </div>
         
            <div className="education">
                <h3>Education</h3>
                <div className="divider"></div>
                <div className="eduBlock">
                    <div className="eduInfo">
                        <h5 id="CV-Degree"></h5>
                        <h6 id="CV-College"></h6>
                    </div>
                    <div className="eduTime">
                            <h6 id="CV-CollegeTime"></h6>
                    </div>
                    </div>
                    
                    <div className="eduBlock">
                        <div className="eduInfo">
                            <h5 id="CV-Degree2"></h5>
                            <h6 id="CV-College2"></h6>
                        </div>
                        <div className="eduTime">
                            <h6 id="CV-CollegeTime2"></h6>
                        </div>
                    </div>
            </div>

            <div id="experience">
                <h3>Experience</h3>
                <div className="divider"></div>
                <div className="workBlock">
                    <h5 id="CV-Job"></h5>
                    <h6 id="CV-JobYears"></h6>
                    <p className="jobDesc" id="CV-JobDesc"></p>
                </div>
                <div className="workBlock">
                    <h5 id="CV-Job2"></h5>
                    <h6 id="CV-JobYears2"></h6>
                    <p className="jobDesc" id="CV-JobDesc2"></p>
                </div>
                <div className="workBlock">
                    <h5 id="CV-Job3"></h5>
                    <h6 id="CV-JobYears3"></h6>
                    <p className="jobDesc" id="CV-JobDesc3"></p>
                </div>
            </div>
        </div>
            
    )
  }
  
  export default CV