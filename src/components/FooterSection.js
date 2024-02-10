import React from "react";
import "./stylee.css"
const FooterSection = () =>{

    return(
<div className="relative">
    <section className="bg-[#304146] relative flex flex-col rounded-md">
        <div className="flex flex-row justify-evenly mt-7 ">
            <div className="flex flex-col max-w-[370px]">
                {/* <img src={"./images/razorpayX.svg"} height={"70px"} width={"200px"} className={"cursor-pointer"}> </img> */}
                <p className="text-white mt-4">
                </p>
               
            </div>
            <div className="flex flex-col ">
                <h2 className="text-green-600 font-bold text-xl">Accept Payments</h2>
                <div className="flex flex-col space-y-2">
                <p className="text-white"><a href="#">RazorPayX</a></p>
                <p className="text-white"><a href="#">Current Accounts</a></p>
                <p className="text-white"><a href="#">PayOuts</a></p>
                <p className="text-white"><a href="#">View Live Demo</a></p>
                </div>
            </div>
        <div className="flex flex-col ">
                <h2 className="text-green-600 font-bold text-xl">Developers</h2>
                <div className="flex flex-col space-y-2">
                    <p className="text-white"><a href="#">RazorPayX</a></p>
                    <p className="text-white"><a href="#">Current Accounts</a></p>
                    <p className="text-white"><a href="#">PayOuts</a></p>
                    <p className="text-white"><a href="#">View Live Demo</a></p>
                </div>
        </div>
        <div className="flex flex-col ">
                <h2 className=" text-green-600 font-bold text-xl">BANKING PLUS</h2>
                <div className="flex flex-col space-y-2">
                    <p className="text-white"><a href="#">RazorPayX</a></p>
                    <p className="text-white"><a href="#">Current Accounts</a></p>
                    <p className="text-white"><a href="#">PayOuts</a></p>
                    <p className="text-white"><a href="#">View Live Demo</a></p>
                </div>
        </div>
        </div>
        <div className="bg-[#2f3939] h-[0.15rem] w-full mt-4"></div>
        <div className="flex flex-row justify-center items-center mt-2  relative ">
        <h2 className="text-green-600">Register for Free</h2>
        <button className="bg-green-600 text-white font-bold rounded-md w-24 justify-center h-7 ml-3 hover:text-white hover:shadow-md  ">Sign Up</button>
        </div>
        <div className=" h-[0.15rem] w-full"></div>
        {/* <div className="flex flex-row mx-auto space-x-7 z-100 mt-10 ">
            {/* <img src="../images/facebook-icon.svg"></img>
            <img src="{../images/facebook-icon.svg}"></img> */}
            {/* <img src="../images/facebook-icon.svg" alt="" className="cursor-pointer"></img>
            <img src="../images/instagram-icon.svg" alt="" className="cursor-pointer"></img>
            <img src="../images/linkedin-icon.svg" alt="" hight="30px" width="30px" className="rounded-xl cursor-pointer"></img>
            <img src="../images/twitter-icon.svg" alt="" className="cursor-pointer"></img> */}
        {/* </div> */}
        <div className="flex flex-row justify-center items-center bg-[#252c2d] h-10 changess transition all duration-1000 text-white mt-5"> <p>&#169; 2023 Copyright. BhairuTailwind.com</p></div>

    </section>
</div>
)
}

export default FooterSection;