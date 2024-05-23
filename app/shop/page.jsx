import ProductCard from '../../components/ProductCard'
import { getAllProducts } from '../../lib/shopify'


const  ProductList = async () => {
    const products =  await getAllProducts()
  return (
    <div className="bg-white " id="product">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6">
         FITNESS PRODUCTS
        </h2>
         <h2 className="my-1 max-w-md pb-4  text-gray-700 md:max-x-3xl">
       Enhance your workout with our wide range of fitness equipment and apparel
      </h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            products.map(product => (
              <ProductCard key={product.node.id} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProductList