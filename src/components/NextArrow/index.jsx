import s from "./index.module.css";
import { RightCircleFilled } from "@ant-design/icons"

function NextArrow(props) {
  const { style, onClick } = props;

  return (
    <div className={s.nextBtnBlock}>
      <div
        className={s.nextBtn}
        style={{...style}}
        onClick={onClick}
      >
        <RightCircleFilled />
      </div>

      <div className={s.nextBtnText}>
        следующее<br/>объявление
      </div>
    </div>
  );
}

export default NextArrow;
