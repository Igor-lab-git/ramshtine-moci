import { IframeParser } from "../../IframeParser/ui/IframeParser";
import style from "./style.module.scss";

export interface IUsers {
  id: number;
  userName: string;
  email: string;
  password: string;
  fullName: string;
  avatarUrl: string;
  role: string;
  createdAt: Date;
  lastLogin: Date;
  preferences: IPreferences;
  vide: string;
}

interface IPreferences {
  theme: string;
  notifications: boolean;
  language: string;
}

export interface IProps {
  dataUsers: IUsers[];
}

export const UserMaps = ({ dataUsers }: IProps) => {
  return (
    <>
      {dataUsers &&
        dataUsers.map((user) => (
          <div className={style.userCard} key={user.id}>
            <img className={style.img}src={user.avatarUrl}alt={user.avatarUrl}/>
            <p>{user.userName}</p>
            <p>{user.role}</p>
            <p>{user.fullName}</p>
            <div>
              <IframeParser iframe={user.vide} />
            </div>
          </div>
        ))}
    </>
  );
};
