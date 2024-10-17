import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {

  // consume
  const {page , handlePageChange , totalPages} = useContext(AppContext);

  /*
  function increaseHandler (page) {
    handlePageChange(page-1);
  }
  */

  return (
    <div>
      <div>
        { page > 1 &&
          (
            <button onClick={ () => handlePageChange(page-1)}>
              Previous
            </button>
          )
        }

        { page < totalPages &&
          (
            <button onClick={ () => handlePageChange(page+1)}>
              Next
            </button>
          )
        }

        <p> {page} of {totalPages} </p>
      </div>
    </div>
  )
}
