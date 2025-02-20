import ProductDetail from "@/components/products/productDetail"
import RelatedProducts from "@/components/products/relatedProducts"
export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const productId = (await params).id;
  

  return (
    <div className="container mx-auto px-4 py-8">
      
      <ProductDetail productId={productId} />
      <RelatedProducts productId={productId} />
    </div>
  )
}

