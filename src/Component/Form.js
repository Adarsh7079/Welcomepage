import React from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"

const Form=(props)=>{

function check(){

// Sort results by id in descending order, take two
// and return the age as an integer.
console.log("chala");

// Sort results by id in descending order, take two
// and return the age as an integer.

fetch('https://sheetdb.io/api/v1/58f61be4dda40?sort_by=id&sort_order=desc&limit=2&cast_numbers=age')
  .then((response) => response.json())
  .then((data) => console.log(data));


  };

  const createSheet=()=>{
    fetch('https://sheetdb.io/api/v1/uixs0tw989ut0', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'name': "INCREMENT",
                'image': "Mark",
                'logo': 18
            }
        ]
    })
})
  .then((response) => response.json())
  .then((data) => console.log(data));

  }
   
  let setName=props.setName,setDes=props.setDes,setImage=props.setImage,setLogo=props.setLogo,selectedSize=props.selectedSize
  ,name=props.name,designation=props.designation,image=props.image,logo=props.logo;
  const navigate = useNavigate();

     function submitHandler(event) {
      event.preventDefault();
      if(name.length==0 || image.length==0 || logo.length==0)
      {
        toast.error("Dear all field are required");
      }
      else{
        

        toast.success("Card Generated Successfully !!");
        navigate("/welcomepage");
      }
    }
   

  return(
      <div className="flex flex-col items-center mt-2 gap-y-3 h-screen bg-[#fecaca]  ">
         <form  className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] 	px-8 py-5 mt-60 rounded-sm flex flex-col gap-2">
            <div>
              <label className=" flex ">Name</label>
              <input
                className="w-full h-7 border-2 border-gray-200 rounded-[6px]"
                type="text"
                placeholder="abcd"
                onChange={(e)=>props.setName(e.target.value)}
              />
            </div>
            <div>
              <label className=" flex ">Designation</label>
              <input
                className="w-full h-7 border-2 border-gray-200 rounded-[6px]"
                type="text"
                placeholder="abcd"
                onChange={(e)=>setDes(e.target.value)}
                
              />
            </div>
           
            <div>
              <label className=" flex " >Image</label>
              <input
                className="w-full h-7 border-2 border-gray-200 rounded-[6px]"
                type="file"
                placeholder="abcd"
                accept="image/png,image/jpeg,.txt,.doc"
                onChange={(e)=>setImage(e.target.files[0])}  
              />
            </div>
            <div>
              <label className=" flex ">logo</label>
              <input
                className="w-full h-7 border-2 border-gray-200 rounded-[6px]"
                type="file"
                placeholder="abcd"
                accept="image/png,image/jpeg,.txt,.doc"
                onChange={(e)=>setLogo(e.target.files[0])}
              />
            </div>
           
            <button  className="bg-green-500 w-[100px] h-[40px] mt-3 rounded-sm grid place-content-center mx-auto" onClick={submitHandler}>Submit</button>
         </form>
      </div>
    );
}

export default Form;
