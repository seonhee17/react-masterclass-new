import { useParams } from "react-router-dom";
import { users } from "../../db";

function User(){
    const { userId }  = useParams();

   // console.log(params);

    return <h1>{userId} : {users[Number(userId)-1].name}</h1>;
}

export default User; 