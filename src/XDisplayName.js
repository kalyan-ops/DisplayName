import React,{useEffect,useState} from 'react';



const XDisplayName=()=>{
    const [firstName,setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [fullName,setFullName]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFullName(`${firstName} ${lastName}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                        required
                    />

                </div>

                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                        required
                    />
                    
                </div>
                <button type="submit">Submit</button>
            </form>
            {fullName && <div>Full Name: {fullName}</div>}  
        </div>
    )
}
export default XDisplayName;