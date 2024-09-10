import { useContext } from "react";
import Spinner from '../layout/Spinner';
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
    const {users, loading} = useContext(GithubContext);

    if(loading){
        return <Spinner />
    }

    return (
        <div className='grid gird-cols-1 gap-8 xl:grid-cals-4 lg:grid-cols-3 md:grid-cols-2'>
            {
                users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))
            }
        </div>
    );
}

export default UserResults;