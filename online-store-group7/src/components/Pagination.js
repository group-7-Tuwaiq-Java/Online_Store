function Pagination({ productPerPage, totalProducts, paginate }) {

    //Create array have the all pages number depending on the number of products
    const pageNumbers = [];
    //Math.ceil() used to round the number to its nearest integer in Upward direction of rounding
    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            {/* when the number page clicked */}
            <a onClick={() => paginate(number)} 
            className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    );
}
  
export default Pagination;