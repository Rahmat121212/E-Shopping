import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAllCategoriesQuery } from '../../store/services/categoryService';
import { FcAbout } from 'react-icons/fc';
import { TbBrandAirbnb } from 'react-icons/tb';
import { useAllBrandsQuery } from '../../store/services/brandService';
const SideBar = ({closeSidebar,side}) => {
    console.log("Sidev",side);
    const [toggle,setToggle] = useState('hidden');
    const [toggleB,setToggleB] = useState('hidden');
    const [arrow,setArrow] = useState('');
    const [arrowB,setArrowB] = useState('');
    const dropDown = () =>{
      if (toggle == `hidden`){
        setToggle('')
        setArrow(`rotate-180`)
      }else{
        setToggle('hidden')
        setArrow(`rotate-0`)
      }
      
    }
    const dropDownB = () =>{
      if (toggleB == `hidden`){
        setToggleB('')
        setArrowB(`rotate-180`)
      }else{
        setToggleB('hidden')
        setArrowB(`rotate-0`)
      }
      
    }
    console.log("Sta To",toggle);
    const {data ,isFetching} =useAllCategoriesQuery();
    const {data:brand,isFetching:isfetching} = useAllBrandsQuery()
  return (
    <div className={`${side == `-left-[300px]` ? "" : ` fixed inset-0 z-30 bg-black/50` } `} >
        
  <div className={`fixed top-0 ${side}  w-[300px] h-screen bg-white z-40 transition-all duration-200 `} >
    <div className="text-black text-xl">
      <div className="p-2.5 mt-1 flex items-center justify-between rounded-md ">
      <div className="h-24 w-24   rounded-full">
        <img src="/logo.jpg" alt="logo" className='w-24 h-24  rounded-full object-cover' />
      </div>
      <i
        className="bi bi-x-lg absolute top-9 right-4  text-black block cursor-pointer text-lg"
        onClick={closeSidebar}
      ></i>
      </div>
      <div>
      

        <Link to="/" className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer ">
          <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-black">Home</span>
        </Link>
        

        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  " onClick={dropDown}>
        <i className="bi bi-bar-chart mr-2 inline-block text-lg"></i>
          <div className="flex justify-between w-full items-center" >
            <span className="text-[15px] ml-4 text-black">Categories</span>
            <span className={`text-sm  ${arrow} `} >
              <i className='bi bi-chevron-down'></i>
            </span>
          </div>
        </div>
        
        <div className={` ${toggle} leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto`}>
          {
            data?.categories?.length > 0 && data?.categories?.map((cat, index) => (
              <ul  key={index}>
                <li className="group relative"  >
                  - <Link to={`/cat-products/${cat.name}`} className="cursor-pointer p-2  rounded-md mt-1"
                   >
                    {cat.name}
                  </Link>
                </li>
              </ul>
            )) }
        </div>
        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  " onClick={dropDownB}>
        <TbBrandAirbnb className="mr-2 inline-block text-lg" size={23} />
          <div className="flex justify-between w-full items-center" >
            <span className="text-[15px] ml-4 text-black">Top Brands</span>
            <span className={`text-sm  ${arrowB} `} >
              <i className='bi bi-chevron-down'></i>
            </span>
          </div>
        </div>
        
        <div className={` ${toggleB} leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto`}>
        {
          brand?.brands?.length > 0 && brand?.brands?.map((br,index)=>(
            <ul key={index} >
            <li className="group relative">
            - <Link to={`/cat-products/${br.name}`} className="cursor-pointer p-2  rounded-md mt-1"
                   >
                    {br.name}
                  </Link>
            </li>
          </ul>
          ))
         }
          
        </div>
        <Link to="/about" className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer ">
          <FcAbout/>
          <span className="text-[15px] ml-4 text-black">About</span>
        </Link>
        
      </div>
    </div>
  </div>
    </div>
  

  )
}

export default SideBar