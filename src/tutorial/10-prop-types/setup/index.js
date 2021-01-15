import react from "react"
import {useFetch} from '../../9-custom-hooks/setup/2-useFetch';
import Product from "./products";

const url = "https://api.github.com/users";

const Index = () => {
    const {products} = useFetch(url);
    return (
        <div>
            <h2>Products</h2>
            <section className="products">
                {
                    products?.map((product) => {
                        return <Product key={product.id} {...product}></Product>
                    })
                }
            </section>
        </div>
    )
}

export default Index;