import {UserCard} from "./UserCard"

export const Profile = ({ users }) => {
    return (
        <ul >
            {users.map((user, index) => 
                <li key={index}>
                    <UserCard user={user} />
                </li>)
                }            
        </ul>)
}