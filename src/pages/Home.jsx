import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

const Home = () => {
    return (
        <div>
            {/* <h1 className="text-6xl">Welcome</h1> */}
            {/* {process.env.REACT_APP_GITHUB_TOKEN} */}
            <UserSearch />
            <UserResults />
        </div>
    )
}

export default Home
