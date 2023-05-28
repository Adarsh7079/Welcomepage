import React from "react";

const Welcomepage=(props)=>{
    const name=props.name,img=props.image;
    console.log(props.image);
    return(
       <div className=" flex h-screen w-full  align-middle bg-[#fecaca]">
            <div className="bg-[url(./images/Ut.jpeg)] bg-no-repeat bg-cover 
            h-[800px]
            w-[850px]
            mx-auto
            shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
            mt-[3rem]
            rounded-lg
            
            ">
                {/* left */}
                <div className="flex mx-auto ml-5">
                    <img src={img}className=" absolute w-[100px] h-[100px] max-h-[400px] mt-[400px] ml-[10rem] "></img>
                    <div className=" absolute flex flex-col absolute bottom-[7rem] ml-[6rem] ">
                        <p className=" text-[2.4rem]  font-bold ">{props.name}</p>
                        <p className="  text-[2.4rem]  font-bold">{props.designation}</p>
                    </div>
                </div>


                {/* //right */}
                <div className="  ml-[20rem] mt-[1rem]">
                    <img src={props.logo} className="w-[100px] -[40px]"/>       
               </div>
            <div className=" flex flex-col w-11/12 mx-auto ml-[10rem] mt-[14rem] gap-10">
               
                <div className=" ">
                    <p className=" mx-auto text-[3.8rem] leading-[4rem] font-extrabold max-w-[100px]">WELCOME ABROAD!</p>
                </div>
                
                <div className="flex flex-col  mx-auto ml-[20rem]">
                    <h1 className=" text-[2.5rem] mx-auto font-bold text-green-600"><p>Get To Know Him!</p></h1>
                    <p className="text-[1.5rem] font-bold  "><span>"</span>I am that one friend <br/> who likes to learn <br/>and adopt quickely. <span>"</span></p>

                </div>
            </div>
        </div>
       </div>
    )
}
export default Welcomepage