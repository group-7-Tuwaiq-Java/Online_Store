import "../styleFiles/productsList.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Product from "./Product";
import Pagination from "./Pagination";

function ProductsList() {
  const state = useSelector((state) => {
    return {
      product: state.ProductsReducer.products,
    };
  });
  const [filterProduct, setFilterProduct] = useState(state.product);
  //pagination start from page 1
  const [currentPage, setCurrentPage] = useState(1);
  // how many post inside each page
  const [productPerPage, setProductPerPage] = useState(16);
  // Get current posts
  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;
  // returns a copy of a portion of an array into a new array object
  // selected from start to end ( end not included)
  const currentProduct = filterProduct.slice(indexOfFirstPost, indexOfLastPost);
  // Change page based on clicking number from pagination file
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="filterInList">
        <div className="col-md-4">{`${filterProduct.length} products found.`}</div>
        {/* section for sort from lower to upper and the reverce */}
        <div className="col-md-4">
          <label>
            Order by price
            <select
              className="form-control"
              onChange={(e) => {
                let sort = e.target.value;
                if (sort !== "") {
                  const products = state.product.sort((a, b) => {
                    if (sort === "lowest") {
                      if (a.pricePr > b.pricePr) {
                        return 1;
                      } else {
                        return -1;
                      }
                    } else {
                      if (a.pricePr < b.pricePr) {
                        return 1;
                      } else {
                        return -1;
                      }
                    }
                  });
                  setFilterProduct(products);
                }
              }}
            >
              <option value="">all</option>
              <option value="lowest">Lowest to highest</option>
              <option value="highest">Highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="filter">
          <label>
            Filter by Category
            <select
              className="form-control"
              onChange={(e) => {
                let arrOfCategory = [
                  "Electronics",
                  "Video Games",
                  "Shoes",
                  "Kitchen",
                  "Furniture",
                  "Camping & Hiking",
                  "Fashion",
                  "Toys & Games",
                ];
                let category = e.target.value;
                if (arrOfCategory.includes(category)) {
                  const products = state.product.filter((a) => {
                    return a.typePr == category;
                  });
                  setFilterProduct(products);
                }
              }}
            >
              <option value="">all</option>
              <option value="Electronics">Electronics</option>
              <option value="Video Games">Video Games</option>
              <option value="Shoes">Shoes</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Furniture">Furniture</option>
              <option value="Camping & Hiking">Camping & Hiking</option>
              <option value="Fashion">Fashion</option>
              <option value="Toys & Games">Toys & Games</option>
            </select>
          </label>
        </div>
      </div>
      <div>
        <Product products={currentProduct} />
        <Pagination
          productPerPage={productPerPage}
          totalProducts={filterProduct.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default ProductsList;
