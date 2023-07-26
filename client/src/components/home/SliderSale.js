import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { FreeMode, Pagination } from "swiper";

export default function SliderSale() {
  return (
    <>
    <div className="mx-auto mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0">
  <a
    className="h-full group flex justify-center relative overflow-hidden"
    href="/collections/winter-collection"
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
        maxWidth: "100%"
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
          maxWidth: "100%"
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
            padding: 0
          }}
          alt=""
          aria-hidden="true"
          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271800%27%20height=%27570%27/%3e"
        />
      </span>
      <img
        alt="Winter Collection of Kid Items"
        src="./uploads/banner-8.jpg"
        decoding="async"
        data-nimg="intrinsic"
        className="bg-gray-300 object-cover w-full rounded-md"
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
          maxHeight: "100%"
        }}
      />
    </span>
  </a>
</div>

  </>
  );
}
