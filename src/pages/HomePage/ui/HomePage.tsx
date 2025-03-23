import { JSX, useEffect } from "react";
import { Container } from "../../../components/Container";
import { UserMaps } from "../../../components/UserMaps/ui/UserMaps";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../store/ui/thunk";
import { getProduct } from "../../../store/ui/productSelector";





export const HomePage = (): JSX.Element => {

const dispatch = useDispatch();
const {data} = useSelector(getProduct);

useEffect(() =>{
  dispatch(getAllProduct() as any)
}, [dispatch])

  return (
    <>
    <Container>
      <UserMaps data={data}/>
    </Container>
    </>
  )
}
