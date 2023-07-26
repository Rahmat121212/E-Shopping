import React from 'react'
import { useAllFlexsQuery } from '../../store/services/flexService';
const Flex = () => {
  const { data, isFetching } = useAllFlexsQuery();
  if (!isFetching) {
    console.log("dataaaaa123->", data);
  }

  // Create an object with default values
  const flexData = {
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
  };

  // Set values from the hook data
  if (data?.categories?.length > 0) {
    const flexs = data.categories;
    flexData.image1 = `/uploads/flexs/${flexs[0]?.image || ""}`;
    flexData.image2 = `/uploads/flexs/${flexs[1]?.image || ""}`;
    flexData.image3 = `/uploads/flexs/${flexs[2]?.image || ""}`;
    flexData.image4 = `/uploads/flexs/${flexs[3]?.image || ""}`;
    flexData.image5 = `/uploads/flexs/${flexs[4]?.image || ""}`;
    flexData.image6 = `/uploads/flexs/${flexs[5]?.image || ""}`;
    console.log("flexData------>", flexData);
  }
  return (
    <>
   {/* flex is here 1 */}
   {!isFetching &&
    (data?.categories?.length > 0 ? (
      <div className="mb-5 md:mb-14 xl:mb-8 px-2.5 grid grid-cols-2 sm:grid-cols-9 gap-2 md:gap-2.5 max-w-[1920px] mx-auto">
        <div className="mx-auto col-span-full sm:col-span-5">
          <a
            className="h-full group flex justify-center relative overflow-hidden"
            href="/collections/mens-collection"
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
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271078%27%20height=%27425%27/%3e"
                />
              </span>
              <img
                alt="Flex 1"
                src={`${flexData.image1}`}
                decoding="async"
                data-nimg="intrinsic"
                className="bg-gray-300 object-cover w-full"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
            </span>
           
          </a>
        </div>
        <div className="mx-auto col-span-1 sm:col-span-2">
          <a
            className="h-full group flex justify-center relative overflow-hidden"
            href="/collections/new-sports"
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
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27425%27%20height=%27425%27/%3e"
                />
              </span>
              <img
                alt="New Sports"
                src={`${flexData.image2}`}
                decoding="async"
                data-nimg="intrinsic"
                className="bg-gray-300 object-cover w-full"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
            </span>
           
          </a>
        </div>
        <div className="mx-auto col-span-1 sm:col-span-2">
          <a
            className="h-full group flex justify-center relative overflow-hidden"
            href="/collections/dress-women"
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
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27425%27%20height=%27425%27/%3e"
                />
              </span>
              <img
                alt="Dress Women"
                src={`${flexData.image3}`}
                decoding="async"
                data-nimg="intrinsic"
                className="bg-gray-300 object-cover w-full"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
            </span>
            </a>
        </div>
        <div className="mx-auto col-span-1 sm:col-span-2">
          <a
            className="h-full group flex justify-center relative overflow-hidden"
            href="/collections/exclusive-sunglasses"
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
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27425%27%20height=%27425%27/%3e"
                />
              </span>
              <img
                alt="Exclusive Sunglasses"
                src={`${flexData.image4}`}
                decoding="async"
                data-nimg="intrinsic"
                className="bg-gray-300 object-cover w-full"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
            </span></a>
        </div>
        <div className="mx-auto col-span-1 sm:col-span-2">
          <a
            className="h-full group flex justify-center relative overflow-hidden"
            href="/collections/product-coupons"
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
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27425%27%20height=%27425%27/%3e"
                />
              </span>
              <img
                alt="Product Coupons"
                src={`${flexData.image5}`}
                decoding="async"
                data-nimg="intrinsic"
                className="bg-gray-300 object-cover w-full"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
            </span></a>
        </div>
        <div className="mx-auto col-span-full sm:col-span-5">
          <a
            className="h-full group flex justify-center relative overflow-hidden"
            href="/collections/new-backpack"
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
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271078%27%20height=%27425%27/%3e"
                />
              </span>
              <img
                alt="New Backpack"
                src={`${flexData.image6}`}
                decoding="async"
                data-nimg="intrinsic"
                className="bg-gray-300 object-cover w-full"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
            </span></a>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    ))}
  {/* flex end here 1*/}
  </>
  )
}

export default Flex
