import ProductDetail from "@/components/products/productDetail"


export default function ProductDetailPage({ params }: { params: { id: number } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail productId={params.id} />
      {/* <RelatedProducts productId={params.id} /> */}
    </div>
  )
}

