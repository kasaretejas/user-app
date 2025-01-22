import React from 'react'
import { useState,useEffect } from 'react'

//const users = [{name:'raj'},{name:'tejas'},{name:'raj'},{name:'tejas'},{name:'raj'},{name:'tejas'}]
export default function Users() {
  let [users,setUsers]=useState(null)
  const fetchUsers=async ()=>
  {
      let response=await fetch("https://api.github.com/users")
      let userData = await response.json()
      console.log(userData);
      setUsers(userData)
  }

  useEffect(()=>{fetchUsers()},[])
  return (
    <div> 
      <div className='container mt-3'>
        <div className='row'>
          {
             users && users.map(user=>{
              return(
                <>
                  <div className='col-4 mb-3' key={user.id}>
                  <div className="card" style={{width:18+"rem"}}>
                    <img src={user.avatar_url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{user.login}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
