import React, { useState } from 'react'
import axios from "axios"
const Registration = () => {
    const [name, Setname] = useState("");
    const [email, Setemail] = useState("");
    const [phone, Setphone] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/register', {
                name, email, phone,


            });
            if (res && res.data.success) {
                alert(res.data && res.data.message);

            } else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    };


    return (

        <>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputEmail1" value={name} onChange={(e) => Setname(e.target.value)} placeholder='Enter Your Name' required />
                </div><br />
                <div className="mb-3">
                    <input type="email" className="form-control" value={email} onChange={(e) => Setemail(e.target.value)} id="exampleInputEmail1" placeholder='Enter Your Email' required />
                </div><br />

                <div className="mb-3">
                    <input type="number" className="form-control" id="exampleInputEmail1" value={phone} onChange={(e) => Setphone(e.target.value)} placeholder='Enter Your phone ' required />
                </div><br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Registration
