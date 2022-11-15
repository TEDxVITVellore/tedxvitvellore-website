import {React, useEffect} from 'react';
import {useNavigate, Outlet, useParams } from 'react-router-dom';

function Events() {
    const navigate = useNavigate();
    const { eventName } = useParams();

    useEffect(() => {
        if(!eventName){
            navigate("/notfound")
        }
    })
    

    
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Events