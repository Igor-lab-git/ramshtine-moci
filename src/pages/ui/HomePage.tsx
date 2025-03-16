import { JSX, useEffect} from "react"
import { Container } from "../../components/Container";
import { UserMaps } from "../../components/UserMaps/ui/UserMaps";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/user/selector";
import { getAllUsers } from "../../store/user/thunk";



export const HomePage = (): JSX.Element => {
 
  const dispatch = useDispatch();
  const {data} = useSelector(getUser)
    
  useEffect(() => {
    dispatch(getAllUsers() as any)
  }, [dispatch])



  return (
    <div>
      <Container>
        <UserMaps dataUsers={data}/>
      </Container>
    </div>
  )
}
