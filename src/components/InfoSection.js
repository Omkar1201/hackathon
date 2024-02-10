import React from "react";
import "../components/stylee.css"
const InfoSection = () =>{
    return(
        <div className="flex flex-col m-8 justify-between items-center ">
            <div className="m-4">
                <p className="font-bold text-green-600 pb-2 text-4xl">What We Offer</p>
            </div>

            <div className="flex ml-[3rem] gap-12  flex-row">
                <div>
                  <div className="img1"></div>

                    <div className=" bg-green-400 w-[300px] p-2 rounded-b-lg h-[170px]">
                        <h6  className="font-bold text-2xl text-white">Detection of Diseases affecting</h6>
                        <p className="text-white">Early detection and accurate diagnosis are crucial for implementing 
                            timely interventions and minimizing crop losses.
                           </p>
                    </div>
                </div>

                <div>
                 <div className="img2"></div>

                    <div className=" bg-green-400 w-[300px] p-2 rounded-b-lg h-[170px]">
                        <h6  className="font-bold text-2xl text-white">Environmental conditions</h6>
                        <p className="text-white"> Crop diseases pose significant threats to agricultural 
                            productivity and food security worldwide. </p>
                    </div>
                </div>

                <div>
                    <div className="img3"></div>

                    <div className=" bg-green-400 w-[300px] p-1 rounded-b-lg h-[170px]" >
                        <h6 className="font-bold text-2xl text-white"> Soil health</h6>
                        <p className="text-white">Leveraging advancements in artificial intelligence and machine learning 
                            can assist farmers and agricultural experts in identifying and managing 
                            Soil Helth effectively</p>
                    </div>
                </div>

            </div>



        </div>
    )
}
export default InfoSection;