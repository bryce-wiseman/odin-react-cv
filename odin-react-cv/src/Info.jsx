import General from "./General"
import Education from "./Education"
import Work from "./Work"

function Info() {

    return(
        <>
           <div className="info">
             <General />
             <Education />
             <Work />
           </div>
        </>
    )
}


export default Info