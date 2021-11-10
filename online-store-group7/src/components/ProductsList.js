import { useSelector } from "react-redux";
import "../styleFiles/productsList.css"
import { useState } from "react";
import Product from "./Product";
import Pagination from "./Pagination";

function ProductsList() {
  const state = useSelector((state)=>{
    return {
      product: state.ProductsReducer.products,
    }
  })
const [filterProduct,setFilterProduct]= useState(state.product);
console.log("filterProduct");
console.log(filterProduct);

  // product list >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//pagination start from page 1
const [currentPage, setCurrentPage] = useState(1);
// how many post inside each page
const [productPerPage,setProductPerPage] = useState(16);

// Get current posts
//                      1*10=10  > 2*10=20  >3*10=30
const indexOfLastPost = currentPage * productPerPage;
//                      10-10=0  > 20-10=10
const indexOfFirstPost = indexOfLastPost - productPerPage;
// returns a copy of a portion of an array into a new array object 
  // selected from start to end ( end not included)
const currentProduct = filterProduct.slice(indexOfFirstPost, indexOfLastPost);
// Change page based on clicking number from pagination file

const paginate = pageNumber => setCurrentPage(pageNumber);
// product list >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
                    let sort = e.target.value
                    console.log("Value before set");
                  console.log(sort);
                  console.log("product");
                  console.log(state.product.pricePr);
                  if(sort!==""){
                      console.log("state.product before sort");
                      const products =state.product.sort((a,b)=>{
                          if(sort==='lowest'){
                              if (a.pricePr>b.pricePr) {
                                  console.log(b.pricePr);
                                  console.log(a.pricePr);
                                  return 1
                              }else{ return -1}
                          }else{
                              if (a.pricePr<b.pricePr) {
                                  return 1
                              }else{ return -1}
                          }
                      })
                      setFilterProduct(products)
                      console.log(filterProduct);
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
                  let arrOfCategory=["Electronics","Video Games","Shoes","Kitchen","Furniture","Camping & Hiking","Fashion","Toys & Games"]
                  let category = e.target.value
                  console.log("Value before set");
                  console.log(category);
                  console.log("product");
  
                  if(arrOfCategory.includes(category)){
                      console.log("state.product before sort");
                      const products = state.product.filter((a)=>{
                        console.log(a.typePr);
                        return a.typePr == category                
                      })
                      setFilterProduct(products)
                      console.log(filterProduct);
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
             <Product products={currentProduct}/>
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