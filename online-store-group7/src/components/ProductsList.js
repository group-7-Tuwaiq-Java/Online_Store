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
    const currentProduct = state.product.slice(indexOfFirstPost, indexOfLastPost);
    // Change page based on clicking number from pagination file

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <Product products={currentProduct}/>
            <Pagination
              productPerPage={productPerPage}
              totalProducts={state.product.length}
              paginate={paginate}
            />
        </div>
    );
}
  
export default ProductsList;