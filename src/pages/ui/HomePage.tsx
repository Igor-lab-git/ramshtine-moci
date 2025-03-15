import { JSX, useEffect, useState } from "react"
import { Container } from "../../components/Container";
import { UserMaps } from "../../components/UserMaps/ui/UserMaps";
import { IUsers } from "../../components/UserMaps/ui/UserMaps"



export const HomePage = (): JSX.Element => {

  const[dataUsers, setDataUsers] = useState<IUsers[] | []>([]);

  const urlData: string = '5e4768bc-3571-4a82-8653-1284e42b0c7d';

  const getAllUsers = async(strUrl: string) => {
    const data = await fetch(`https://mocki.io/v1/${strUrl}`);
    return await data.json();
  }

  useEffect(() => {
    getAllUsers(urlData).then((data => setDataUsers(data)))
  }, [])



  return (
    <div>
      <Container>
        <UserMaps dataUsers={dataUsers}/>
      </Container>
    </div>
  )
}
