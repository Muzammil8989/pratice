import React from 'react'

export default async function page({params}:{params:Promise<{productId:string}>}) {
  const productId = (await params).productId
  return (
    <div>Product Details {productId}</div>
  )
}