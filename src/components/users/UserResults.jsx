import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'
import GithubContext from '../../context/github/GithubContext'

const UserResults = () => {
    const {users, loading} = useContext(GithubContext)

    if(!loading) {//If the API request has been completed
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map(user => <UserItem key={user.id} user={user} />)}
            </div>
        )
    } else {//If the API request hasn't been completed
        return <Spinner />
    }

    
}
// xl: extra-large screen size
// lg: large screen size
// md: medium screen size
export default UserResults
