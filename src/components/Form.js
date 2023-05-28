
import { useNavigate } from "react-router-dom";


const Form=(props)=>{

    let setName=props.setName,setDes=props.setDes,setImage=props.setImage,setLogo=props.setLogo;
    const navigate = useNavigate();

       function submitHandler(event) {
        event.preventDefault();
        console.log("Printing the formData ");
        navigate("/Welcomepage");
      }
    
    return(
        <div className="flex flex-col items-center mt-2 gap-y-3 h-screen bg-[#fecaca] mt-0 ">
           <form  className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] 	px-8 py-5 mt-60 rounded-sm">
              <label className=" flex ">Name</label>
              <input
                className="w-full h-7 border-2 border-gray-200 rounded-[6px]"
                type="text"
                placeholder="abcd"
                onChange={(e)=>props.setName(e.target.value)}
              />
              <label className=" flex ">Designation</label>
             
              <input
                className="w-full h-7 border-2 border-gray-200 rounded-[6px]"
                type="text"
                placeholder="abcd"
                onChange={(e)=>setDes(e.target.value)}
                
              />
             
               <label className=" flex " >Image</label>
              <input
                className="w-full h-7 border-2 border-gray-200 rounded-[6px]"
                type="file"
                placeholder="abcd"
                onChange={(e)=>setImage(e.target.files)}
                
              />
              <label className=" flex ">logo</label>
            
              <input
                className="w-full h-7 border-2 border-gray-200 rounded-[6px]"
                type="file"
                placeholder="abcd"
                onChange={(e)=>setLogo(e.target.files)}
                
              />
              <button className="bg-green-500 w-[100px] h-[40px] mt-3 rounded-sm" onClick={submitHandler}>Submit</button>
           </form>
        </div>
    );
}

export default Form