

import ProductDetail from "@/components/products/productDetail"
import RelatedProducts from "@/components/products/relatedProducts"
import MainPadding from "@/components/theme/MainPadding";
export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const productId = (await params).id;
  return (
    <MainPadding className=" py-8">
      <ProductDetail productId={productId} />
      <RelatedProducts />
    </MainPadding>
  )
}

