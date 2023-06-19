import style from './style.module.scss'

export const Product =({title, price, image, description})=>{

    return(
        <div className={style.container}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt={title}/>
            <p>{description}</p>
            <span>{price}</span>
        </div>
    )
}