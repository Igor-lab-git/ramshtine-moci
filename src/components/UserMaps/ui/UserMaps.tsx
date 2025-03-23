// import { IProduct } from "../../../mocs/type";
import style from "./style.module.scss";

import { IProduct } from "../../../mocs/type";


interface IProps {
  data: IProduct[]
}

export const UserMaps = ({data}: IProps) => {
  return (
    <div className={style.wrapperCard}>
      {data.map((item) => (
        <div className={style.productCard} key={item.id}>
          <img className={style.img} src={item.imgUrl} alt="" />
          <span>{item.productName}</span>
          <p>{item.descripteon}</p>
          <div>
            <span>{item.price}</span>
            <button>Купить</button>
          </div>
        </div>
      ))}
    </div>
  );
};
