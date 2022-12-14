import './App.css';
import { PostContainer } from './components/PostContainer';

function App() {
    /* const {users, isLoading, error} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, []) */

    return (
        <div className="App">
            {/* {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users, null, 2)} */}
            <PostContainer />
        </div>
    );
}

export default App;
