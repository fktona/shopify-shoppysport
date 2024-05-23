'use client'
import { useState, useEffect, useContext, use } from "react"
import { formatter } from '../utils/helpers'
import ProductOptions from "./ProductOptions"
import { CartContext } from "../app/context/shopContext"
import axios from "axios"
import useSWR from 'swr'

// // setup inventory fetcher
// const fetchInventory = (url, id) =>
//   axios
//     .get(url, {
//       params: {
//         id: id,
//       },
//     })
//     .then((res) => res.data)

export default function ProductForm({ product }) {

  // const { data: productInventory } = useSWR(
  //   ['/api/?'+ product.handle],
  //   (url, id) => fetchInventory(url, id),
  //   { errorRetryCount: 3 }
  // )




  const { data: productInventory } = async ()  =>{
  
    const domain = process.env.SHOPIFY_STORE_DOMAIN
    const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN
  
    async function ShopifyData(query) {
      const URL = `https://${domain}/api/2022-10/graphql.json`
  
      const options = {
        endpoint: URL,
        method: "POST",
        headers: {
          "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query })
      }
  
      try {
        const data = await fetch(URL, options).then(response => {
          return response.json()
        })
  
        return data
      } catch (error) {
        throw new Error("Products not fetched")
      }
    }
  
    async function getProduct(handle) {
      const query = `
      {
        product(handle: "${handle}") {
          id
          variants(first: 25) {
            edges {
              node {
                id
                availableForSale
              }
            }
          }
        }
      }`
  
      const response = await ShopifyData(query)
  
      const product = response.data.product ? response.data.product : []
  
      return product
    }
  
    const product = await getProduct(product.handle)
    res.json(product)
  }

  useEffect(() => {
    console.log(productInventory)
  }, [productInventory])

  const [available, setAvailable] = useState(true)

  const { addToCart } = useContext(CartContext)

  const allVariantOptions = product.variants.edges?.map(variant => {
    const allOptions = {}

    variant.node.selectedOptions.map(item => {
      allOptions[item.name] = item.value
    })

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.url,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1
    }
  })

  const defaultValues = {}
  product.options.map(item => {
    defaultValues[item.name] = item.values[0]
  })

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
  const [selectedOptions, setSelectedOptions] = useState(defaultValues)

  function setOptions(name, value) {
    setSelectedOptions(prevState => {
      return { ...prevState, [name]: value }
    })

    const selection = {
      ...selectedOptions,
      [name]: value
    }

    allVariantOptions.map(item => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item)
      }
    })
  }

  useEffect(() => {
    if (productInventory) {
      const checkAvailable = productInventory?.variants.edges.filter(item => item.node.id === selectedVariant.id)

      if (checkAvailable[0]?.node.availableForSale) {
        setAvailable(true)
      } else {
        setAvailable(false)
      }
    }
  }, [productInventory, selectedVariant])

  return (
    <div className="flex flex-col w-full p-4 shadow-lg rounded-2xl md:w-1/3">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <span className="pb-3">{formatter.format(product.variants.edges[0].node.priceV2.amount)}</span>
      {
        product.options.map(({ name, values }) => (
          <ProductOptions
            key={`key-${name}`}
            name={name}
            values={values}
            selectedOptions={selectedOptions}
            setOptions={setOptions}
            selectedVariant={selectedVariant}
            productInventory={productInventory}
            available={available}
          />
        ))
      }
      {
        available ?
          <button
            onClick={() => {
              addToCart(selectedVariant)
            }}
            className="px-2 py-3 mt-3 text-white bg-black rounded-lg hover:bg-gray-800">Add To Card
          </button> :
          <button
            className="px-2 py-3 mt-3 text-white bg-gray-800 rounded-lg cursor-not-allowed">
              Sold out!
          </button>
      }

    </div>
  )
}
