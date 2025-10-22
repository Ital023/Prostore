import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { Product } from "@/types";

const HomePage = async () => {
  const latestProducts: Product[] = await getLatestProducts();
  return <>
    <ProductList data={latestProducts} title="Newest Arrivals"/>
  
  </>;
}
 
export default HomePage;