import { memo } from "react";
import { products } from "../Components/products";

export default memo(function About() {
    return (
        <>
            <div className="products">
                <div className="product">
                    {products.map(product => {
                        return <div className="product-item" key={product.id}>
                            <h3>{product.category}</h3>
                            <img src={product.picture} />
                            <button>Watch More</button>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}
)