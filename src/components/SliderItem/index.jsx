import s from "./index.module.css";

const SliderItem = ({children, ...props}) => {

  return (
    <div {...props} className={s.slideshow}>
      <div className={s.category}>
        {props.category}
      </div>

      <div className={s.image} style={{backgroundImage: `url("${props.img}")`}} />

      <div className={s.title}>
        {props.title}
      </div>  

      <div className={s.description}>
        {props.description}
      </div>  

      <div className={s.moreInfo}>
        Подробнее
      </div> 

      {children}  
    </div>
  );
};

export default SliderItem;
