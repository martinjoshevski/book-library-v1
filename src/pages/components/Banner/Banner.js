import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Image
        src="https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
      />
    </div>
  );
}

export default Banner;
