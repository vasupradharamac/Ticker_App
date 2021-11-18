import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { useState } from 'react';


function TitleComp(){
    let [user,setuser]=useState("Default User")
    const welcometext="Complete your KYC"
    return(
        <div className="col-md-6 col-xl-6">
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col" style={{color: "rgb(255,255,255)"}}>
                        <div className="row">
                            <div className="col">
                                <br /><br />
                                <h4 className="small font-weight-bold">Hi {user},</h4> <br></br>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2 className="small font-weight-bold" style={{"fontSize": "20px"}}><strong>
                                {welcometext}    
                                </strong><br /></h2>
                                <h1 className="small font-weight-bold">and experience the world class bitcoin app defi </h1><br/>
                                <h1 className="small font-weight-bold"><strong>Start your KYC -></strong> </h1><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TitleComp;