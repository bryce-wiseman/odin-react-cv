
export function addGeneralUpdate() {
    let nameInput = document.getElementById('nameInput')
    let emailInput = document.getElementById('emailInput')
    let phoneInput = document.getElementById('phoneInput')

    let generalToggleBtn = document.getElementById("generalToggleBtn")
    let generalUpdateBtn = document.getElementById('generalUpdateBtn')

    if(generalToggleBtn && generalUpdateBtn) {
        generalToggleBtn.onclick = () => {
            toggleGeneralDetails()
        }
        generalUpdateBtn.onclick = () => {
            updateGeneralInfo(nameInput.value, emailInput.value, phoneInput.value)
        }
    } else {
        setTimeout(addGeneralUpdate, 500)
    }
}

function toggleGeneralDetails() {
    let generalToggleBtn = document.getElementById('generalToggleBtn')
    let generalDetails = document.getElementById('generalInputs')

    generalDetails.classList.toggle('hidden')
    generalToggleBtn.classList.toggle('expanded')
}

function updateGeneralInfo(name, email, phone) {
    let CV_Name = document.getElementById('CV-Name')
    let CV_Email = document.getElementById('CV-Email')
    let CV_Phone = document.getElementById('CV-Phone')

    if (CV_Name && CV_Email && CV_Phone) {
        CV_Name.innerHTML = name
        CV_Email.innerHTML = email
        CV_Phone.innerHTML = phone
      } else {
        setTimeout(() => {updateGeneralInfo(name, email, phone)}, 500)
    }
}



export function addEducationUpdate() {
    let degreeInput = document.getElementById('degreeInput')
    let collegeInput = document.getElementById('collegeInput')
    let collegeYearsInput = document.getElementById('collegeYearsInput')

    let educationToggleBtn = document.getElementById("educationToggleBtn")
    let educationUpdateBtn = document.getElementById('educationUpdateBtn')

    if(educationToggleBtn && educationUpdateBtn) {
        educationToggleBtn.onclick = () => {
            toggleEducationDetails()
        }
        educationUpdateBtn.onclick = () => {
            updateEducationInfo(degreeInput.value, collegeInput.value, collegeYearsInput.value)
        }
    } else {
        setTimeout(addEducationUpdate, 500)
    }
}

function toggleEducationDetails() {
    let educationToggleBtn = document.getElementById('educationToggleBtn')
    let educationDetails = document.getElementById('educationInputs')

    educationDetails.classList.toggle('hidden')
    educationToggleBtn.classList.toggle('expanded')
}

function updateEducationInfo(degree, college, collegeYears) {
    let CV_Degree = document.getElementById('CV-Degree')
    let CV_College = document.getElementById('CV-College')
    let CV_CollegeTime = document.getElementById('CV-CollegeTime')

    if (CV_Degree && CV_College && CV_CollegeTime) {
        CV_Degree.innerHTML = degree
        CV_College.innerHTML = college
        CV_CollegeTime.innerHTML = collegeYears
      } else {
        setTimeout(() => {updateEducationInfo(degree, college, collegeYears)}, 500)
    }
}

export function addEducationUpdate2() {
    let degreeInput2 = document.getElementById('degreeInput2')
    let collegeInput2 = document.getElementById('collegeInput2')
    let collegeYearsInput2 = document.getElementById('collegeYearsInput2')

    let educationToggleBtn2 = document.getElementById("educationToggleBtn2")
    let educationUpdateBtn2 = document.getElementById('educationUpdateBtn2')

    if(educationToggleBtn2 && educationUpdateBtn2) {
        educationToggleBtn2.onclick = () => {
            toggleEducationDetails2()
        }
        educationUpdateBtn2.onclick = () => {
            updateEducationInfo2(degreeInput2.value, collegeInput2.value, collegeYearsInput2.value)
        }
    } else {
        setTimeout(addEducationUpdate2, 500)
    }
}

function toggleEducationDetails2() {
    let educationToggleBtn2 = document.getElementById('educationToggleBtn2')
    let educationDetails2 = document.getElementById('educationInputs2')

    educationDetails2.classList.toggle('hidden')
    educationToggleBtn2.classList.toggle('expanded')
}

function updateEducationInfo2(degree, college, collegeYears) {
    let CV_Degree2 = document.getElementById('CV-Degree2')
    let CV_College2 = document.getElementById('CV-College2')
    let CV_CollegeTime2 = document.getElementById('CV-CollegeTime2')

    if (CV_Degree2 && CV_College2 && CV_CollegeTime2) {
        CV_Degree2.innerHTML = degree
        CV_College2.innerHTML = college
        CV_CollegeTime2.innerHTML = collegeYears
      } else {
        setTimeout(() => {updateEducationInfo2(degree, college, collegeYears)}, 500)
    }
}



export function addWorkUpdate() {
    let jobTitleInput = document.getElementById('jobTitleInput')
    let jobYearsInput = document.getElementById('jobYearsInput')
    let jobDescriptionInput = document.getElementById('jobDescriptionInput')

    let workToggleBtn = document.getElementById("workToggleBtn")
    let workUpdateBtn = document.getElementById('workUpdateBtn')

    if(workToggleBtn && workUpdateBtn) {
        workToggleBtn.onclick = () => {
            toggleWorkDetails()
        }
        workUpdateBtn.onclick = () => {
            updateWorkInfo(jobTitleInput.value, jobYearsInput.value, jobDescriptionInput.value)
        }
    } else {
        setTimeout(addWorkUpdate, 500)
    }
}

function toggleWorkDetails() {
    let workToggleBtn = document.getElementById('workToggleBtn')
    let workDetails = document.getElementById('workInputs')

    workDetails.classList.toggle('hidden')
    workToggleBtn.classList.toggle('expanded')
}

function updateWorkInfo(jobTitle, jobYears, jobDescription) {
    let CV_Job = document.getElementById('CV-Job')
    let CV_JobYears = document.getElementById('CV-JobYears')
    let CV_JobDesc = document.getElementById('CV-JobDesc')

    if (CV_Job && CV_JobYears && CV_JobDesc) {
        CV_Job.innerHTML = jobTitle
        CV_JobYears.innerHTML = jobYears
        CV_JobDesc.innerHTML = jobDescription
      } else {
        setTimeout(() => {updateWorkInfo(jobTitle, jobYears, jobDescription)}, 500)
    }
}

export function addWorkUpdate2() {
    let jobTitleInput2 = document.getElementById('jobTitleInput2')
    let jobYearsInput2 = document.getElementById('jobYearsInput2')
    let jobDescriptionInput2 = document.getElementById('jobDescriptionInput2')

    let workToggleBtn2 = document.getElementById("workToggleBtn2")
    let workUpdateBtn2 = document.getElementById('workUpdateBtn2')

    if(workToggleBtn2 && workUpdateBtn2) {
        workToggleBtn2.onclick = () => {
            toggleWorkDetails2()
        }
        workUpdateBtn2.onclick = () => {
            updateWorkInfo2(jobTitleInput2.value, jobYearsInput2.value, jobDescriptionInput2.value)
        }
    } else {
        setTimeout(addWorkUpdate2, 500)
    }
}

function toggleWorkDetails2() {
    let workToggleBtn2 = document.getElementById('workToggleBtn2')
    let workDetails2 = document.getElementById('workInputs2')

    workDetails2.classList.toggle('hidden')
    workToggleBtn2.classList.toggle('expanded')
}

function updateWorkInfo2(jobTitle, jobYears, jobDescription) {
    let CV_Job2 = document.getElementById('CV-Job2')
    let CV_JobYears2 = document.getElementById('CV-JobYears2')
    let CV_JobDesc2 = document.getElementById('CV-JobDesc2')

    if (CV_Job2 && CV_JobYears2 && CV_JobDesc2) {
        CV_Job2.innerHTML = jobTitle
        CV_JobYears2.innerHTML = jobYears
        CV_JobDesc2.innerHTML = jobDescription
      } else {
        setTimeout(() => {updateWorkInfo2(jobTitle, jobYears, jobDescription)}, 500)
    }
}

export function addWorkUpdate3() {
    let jobTitleInput3 = document.getElementById('jobTitleInput3')
    let jobYearsInput3 = document.getElementById('jobYearsInput3')
    let jobDescriptionInput3 = document.getElementById('jobDescriptionInput3')

    let workToggleBtn3 = document.getElementById("workToggleBtn3")
    let workUpdateBtn3 = document.getElementById('workUpdateBtn3')

    if(workToggleBtn3 && workUpdateBtn3) {
        workToggleBtn3.onclick = () => {
            toggleWorkDetails3()
        }
        workUpdateBtn3.onclick = () => {
            updateWorkInfo3(jobTitleInput3.value, jobYearsInput3.value, jobDescriptionInput3.value)
        }
    } else {
        setTimeout(addWorkUpdate3, 500)
    }
}

function toggleWorkDetails3() {
    let workToggleBtn3 = document.getElementById('workToggleBtn3')
    let workDetails3 = document.getElementById('workInputs3')

    workDetails3.classList.toggle('hidden')
    workToggleBtn3.classList.toggle('expanded')
}

function updateWorkInfo3(jobTitle, jobYears, jobDescription) {
    let CV_Job3 = document.getElementById('CV-Job3')
    let CV_JobYears3 = document.getElementById('CV-JobYears3')
    let CV_JobDesc3 = document.getElementById('CV-JobDesc3')

    if (CV_Job3 && CV_JobYears3 && CV_JobDesc3) {
        CV_Job3.innerHTML = jobTitle
        CV_JobYears3.innerHTML = jobYears
        CV_JobDesc3.innerHTML = jobDescription
      } else {
        setTimeout(() => {updateWorkInfo3(jobTitle, jobYears, jobDescription)}, 500)
    }
}