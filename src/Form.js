import react, {useState} from 'react'
const form = ()=>{
    const[userRegistration,setuserRegistration]=useState({
        username:"",email:"",password:""
    });
    const[records,setrecords]=useState([]);
    const handleInput = (e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
        setuserregistration({...userRegistration,[name]:value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault();

        const newRecord={...userRegistration, id:new Date().getTime().toString()}
        console.log(records);
        setrecords([...records,newRecord]);
        console.log(records);

        setuserregistration({username:"",email:"",password:""});
    }
    return(
        <>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Fullname</label>
                <input type="text" autoComplete="off" value={userRegistration.username} onChange={handleInput} name="username"id="" />
            </div>

            <div>
                <label htmlFor="email">email</label>
                <input type="email" autoComplete="off" value={userRegistration.email} onChange={handleInput} name="email"id="" />
            </div>

            <div>
                <label htmlFor="password">password</label>
                <input type="password" autoComplete="off" value={userRegistration.password} onChange={handleInput} name="password"id="" />
            </div>
            <button type="submit">Submit</button>
        </form>
        <div>
            {
                records.map((curElem)=>
                {
                    const {id,username,email,password}=curElem;
                    return(
                        <div className="showDataStyle"key={curElem.id}>
                            <p>{curElem.username}</p>
                            <p>{curElem.email}</p>
                            <p>{curElem.password}</p>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default form;