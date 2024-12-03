import ProductCategories from "../../components/ProductCategories/ProductCategories";
import ProductBranch from "../../components/ProductBranch/ProductBranch";
import { categories } from "../../assets/assets";
import { brands } from "../../assets/assets";
const Catalog = () => {
  return (
    <>
      <ProductCategories categories={categories} />
      <ProductBranch brands={brands} />
    </>
  );
};

export default Catalog;
