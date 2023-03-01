import React from 'react'

function CashPopup() {
  return (
    <div>
      <div className='Cashpopup'>
      <h3>Upload Screen Shot</h3>
      
       
      </div>
      <div className='Cashpopup1'>
      <h3>Email:</h3>
      </div>
      <div className='Cashpopup2'>
      <h3>Preview Area :</h3>
      </div>
      <div className="button-Backword">
          <Ripples>
            <Link to="" className="link-tab-for-popup">
              <button type="submit" className="uploadform-btn">
                select
              </button>
            </Link>
          </Ripples>
          </div>
    </div>
  )
}

export default CashPopup
