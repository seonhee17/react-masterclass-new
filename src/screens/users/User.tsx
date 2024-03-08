import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

function User(){
    const { userId }  = useParams();

   // console.log(params);

    return (
        <div>
            <h1>{userId} : {users[Number(userId)-1].name}</h1>
            <hr />
            {/* /followers 슬래시를 넣으면 localhost:3001/followers로 이동함. */}
            <Link to="followers" >see Followers</Link>
            <Outlet />
            {/* Route 스크린에 자식이 있다면 
            outlet 이 자식을 렌더 해준다.*/}       
            </div>

    
    
    );
}

export default User; 