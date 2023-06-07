import React from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"

const Choice=()=>{
    const navigate=useNavigate();
    function handlefb()
    {
        toast.success("Facebook Selected !!");
        navigate("/fb");
    }
    function handleInsta()
    {
        toast.success("Instagarm Selected !!");
        navigate("/insta");
    }
    function handlefblinkedin()
    {
        toast.success("Linkedin Selected!!");
        navigate("/linkedin");
    }
    return(
        <div>
            <div className=" flex flex-row  gap-3 justify-center mt-[20rem] ">
                <button className=" bg-red-500 hover:bg-green-400 
                   w-[100px] h-[45px] rounded-md" onClick={handlefb}>
                    FaceBook
                </button>
                <button  className=" bg-red-500 hover:bg-green-400 
                   w-[100px] h-[45px] rounded-md " onClick={handleInsta}>
                    Instagram
                </button>
                <button  className=" bg-red-500 hover:bg-green-400 
                   w-[100px] h-[45px] rounded-md" onClick={handlefblinkedin}>
                    Linkedin
                </button>
            </div>
        </div>
    )
};

export default Choice;