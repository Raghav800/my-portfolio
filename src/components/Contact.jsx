import React from "react";
import { useState } from "react";

const Contact = () => {
  
  const [user, setUser] = useState({
    name:"",
    email:"",
    message:""
  })
  let name, value;
  const getUserData = (e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user, [name]:value})
  }

  const postData=async(e)=>{
    e.preventDefault()
    const {name,email,message} = user;

    if(name&&email&&message){
      const res = await fetch('https://portfolio-30510-default-rtdb.firebaseio.com/portfolio.json',{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message,
        })
      })
      if(res){
        setUser({
          name:"",
          email:"",
          message:"",
        })
        alert("Message sent successfully!")
      }
    }else{
      alert("Please fill all the fields!!")
    }
  }

  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
        <h1 className="text-primary font-semibold text-3xl mt-16">
      Connect with me:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
      Looks interesting? Contact to work with me! 
      </p>
      {/* social icons */}
      <div className="flex ">
        <a href="https://www.linkedin.com/in/raghav-agarwal-23a54b217/" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" className="w-[28px]"/>
        </a>
        <a className="ml-4" href="https://instagram.com/who_raghav_a?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" className="w-[28px]"/>
        </a>
        <a className="ml-4" href="https://github.com/Raghav800" target="_blank" rel="noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/3291/3291667.png" alt="" className="w-[28px]"/>
        </a>
        <a className="ml-4" href="mailto:agarwalraghav2612@gamil.com" target="_blank" rel="noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/9034/9034284.png" alt="" className="w-[28px]"/>
        </a>
      </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
            <p className="mt-16 text-white text-2xl mb-6">Contact me, let's make magic together</p>
            <form  method="POST">
                <input type="text" name="name" placeholder="Name:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded " value={user.name} onChange={getUserData}/>
                <input type="email" name="email" placeholder="Email:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3" value={user.email} onChange={getUserData}/>
                <textarea name="message" id="message" cols="54" rows="4" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2" value={user.message} placeholder="Message:" onChange={getUserData}></textarea>
                <button className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block" onClick={postData}>
                  Send
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
