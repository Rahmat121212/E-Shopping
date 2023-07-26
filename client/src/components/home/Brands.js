import React from 'react'
import { useAllBrandsQuery } from '../../store/services/brandService'

const Brands = () => {
   const {data,isFetching}= useAllBrandsQuery();
   console.log("S",data);
  return (
   <>
   {
    !isFetching ? (<div className="mb-10 px-2 sm:px-4 md:px-4  xl:px-4 ">
    <div className="flex items-center justify-between -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
      <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">
        Top Brands
      </h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 md:gap-3 lg:gap-5 xl:gap-7">
      {
        data?.brands?.length > 0 && data?.brands?.map((brand,index)=>(
          <a
        className="group flex justify-center text-center relative overflow-hidden rounded-md"
        href="/search?brand=fashnetic"
      >
        <span
          style={{
            boxSizing: "border-box",
            display: "inline-block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: "relative",
            maxWidth: "100%",
          }}
        >
          <span
            style={{
              boxSizing: "border-box",
              display: "block",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              maxWidth: "100%",
            }}
          >
            <img
              alt=""
              aria-hidden="true"
              src={`./uploads/brand/${brand.image}`}
              style={{
                display: "block",
                maxWidth: "100%",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
              }}
            />
          </span>
          <div className="absolute inset-0 w-full h-full bg-black/5 flex items-center justify-center p-4 z-10 text-white font-thin">
          {brand.name}
        </div>
        </span>
        
        <div className="absolute top left bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" ></div>
        
      </a>
        ))
      }
    </div>
</div>) : ("Loading....")
   }
   </>
  )
}

export default Brands
