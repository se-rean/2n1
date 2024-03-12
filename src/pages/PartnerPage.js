import React from "react";
import Table from '../components/Table'
const PartnerPage = () => {
  return (
    <div className="content-container flex justify-center items-center bg-prmBG pb-10">
      <div className="w-[70%] mt-20 flex justify-center flex-col gap-10"> 
         <h1 className='text-[20px]  lg:tracking-wide font-[600] lg:text-[35px] lg:font-[700] lg:leading-[2rem] text-primaryText'>BNI PARTNERS</h1>
         <Table />
      </div>
    </div>
  )
}

export default PartnerPage