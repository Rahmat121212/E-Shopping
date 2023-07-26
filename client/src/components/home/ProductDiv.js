import React from 'react'
import Product from '../../screens/home/Product'
import { useRandomCategoriesQuery } from '../../store/services/categoryService'
import HomeProduct from './HomeProduct';

const ProductDiv = () => {
    const { data, isFetching } = useRandomCategoriesQuery();
    return (
        <div className=" px-2 sm:px-4 md:px-4 lg:px-4  ">
            <div className="mb-10 md:mb-14 xl:mb-10 border border-gray-300 rounded-md pt-5 md:pt-6 lg:pt-7 pb-5 lg:pb-7 px-2 md:px-5 lg:px-2 ">
                <div className="flex items-center justify-between -mt-2 mb-0">
                    <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold capitalize text-heading">
                        products
                    </h3>
                </div>
                {!isFetching &&
                    data?.categories?.length > 0 &&
                    data?.categories.map((category) => (
                        <HomeProduct category={category} key={category._id} />
                    ))}

                {/* <div
                        className="group box-border overflow-hidden flex rounded-md cursor-pointer  bg-white ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start"
                        role="button"
                        title="Wayfarer Sunglasses"
                    >
                        <div className="flex mb-3 md:mb-3.5 pb-0">
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
                                        src="./uploads/1d080ad9-e5b1-4277-82f5-8c6934b6d67d.png"
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
                               
                            </span>
                            <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                        </div>
                        <div className="w-full overflow-hidden p-2 ltr:pl-0 rtl:pr-0">
                            <h2 className="truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading">
                                Wayfarer Sunglasses
                            </h2>
                            <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                                Our optical engineers developed these sunglasses for hiking.
                                Ideal for occasional use in the mountains.
                            </p>
                            <div
                                className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
       text-heading"
                            >
                                <span className="inline-block false">$20.00</span>
                                <del className="sm:text-base font-normal text-gray-800">
                                    $25.00
                                </del>
                            </div>
                        </div>
                    </div> */}

            </div>
        </div>
    )
}

export default ProductDiv
