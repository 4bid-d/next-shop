import "./product-card.css"
import { IProduct } from './../../services/ProductService';
import Link from "next/link";

interface IProductCardProps{
  product : IProduct 
}

function ProductCard(props:IProductCardProps ) {
  const productObj : IProduct = props.product
  return (
    <div className="product-card">
        <div className="product-image-div">
           <img className="product-image" src={productObj.thumbnail} alt="" />
        </div>
        <div className="card-content">  
            <div className="card-title">
                {productObj.title}
            </div>
            <div className="product-price">
              {`RS: ${  productObj.price}`}
            </div>
            <Link href={`/products/details/${productObj.id}`}>
              <button className="view-details-btn" >View Details</button>
            </Link>
        </div>
    </div>
  )
}

export default ProductCard
