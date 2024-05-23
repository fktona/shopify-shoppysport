import { getProductsInCollection } from "../lib/shopify"
import ProductList from "../components/ProductList"
import Hero from "../components/Hero"
import Head from 'next/head'
import CollectionSection from "../components/collectionSection"

export default async function Home() {

  const products =  await getProductsInCollection()
  
  console.log(products)

  return (
    <div className="">
      <Head>
        <title>Modern eCommerce Course</title>
       
      </Head>
      <Hero />
      <ProductList products={products} />
      <CollectionSection />
    </div>
  )
}

