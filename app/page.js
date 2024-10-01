// 1. Static Metadata
// 2. Dynamic Metadata

export async function generateMetadata({ params, searchParams}) {
  const product = await getProduct(params.id);
  return { 
    title: product.title 
  }
}

// Output: 
// <head>
//  <title>My Unique Product</title> 
// </head>

export default function Page() {
  return (
    <h1>My Normal Next.js Page with Dynamic Metadata</h1>
  )
}

