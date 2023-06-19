import { Product } from '../Product'
import { useEffect, useState } from 'react'
import style from './style.module.scss'

export const ItemList =()=>{

    const [product, setProduct]= useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState(false)

    useEffect(()=>{

        const FetchData = async(id)=>{
            setLoading(true)
            try {
                const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
                const data = await response.json()
                
                setProduct(data)
                console.log(data)
                setLoading(false)
            } catch (error) {
               // console.log(error)
                setError(error)
            }
        }

        FetchData(22)

    }, [])

    return(
        <div className={style.productList}>
            {
                error ?
                <h1>An error coutched: {error.message}</h1> : null
            }
            {
                
                loading ? <h1>Loading</h1> : 
                product.images && product.images.length > 0 ?
                <Product key={product.key} image={product.images[0]} {...product}/> :
                <h1>No product data available</h1>
            
            }

        </div>
    )
}