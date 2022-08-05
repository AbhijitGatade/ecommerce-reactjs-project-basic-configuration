import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../images/brand-1.jpg'
const Administration = () => {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 bg-danger pt-3 ">
                <ul className='text-white' >
                <li ><Link to="/administration" className="menu-item"> Dashboard </Link> </li>
                <li ><Link to="/productcategories" className='text-white'> Product Categories </Link> </li>
                <li ><Link to="/administration" className='text-white'> Product </Link> </li>
                <li ><Link to="/administration"className='text-white' > Orders </Link> </li>
                <li ><Link to="/administration"className='text-white' > Failed Orders </Link> </li>
                <li ><Link to="/administration" className='text-white'> Log Out </Link> </li>
                </ul>
                </div>
                <div className="col-lg-10">

                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Administration;

