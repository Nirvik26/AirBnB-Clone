import React from "react";

interface globeProp {
    setGlobe: any;
    setCurrency?:any
}

function Globe(props:globeProp) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-stone-700 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex">
              <h1 onClick={()=> props.setGlobe(false)} className="cursor-pointer">X</h1>
              <h3
                className="ml-4 text-xl font-semibold leading-6 text-gray-900"
                id="modal-title"
              >
                Currency
              </h3>
            </div>
            <hr />
            <div className="grid grid-cols-4 p-8 text-gray-500">
              <div onClick={()=> props.setCurrency("NPR")} className="mt-3 ml-3 cursor-pointer">
                <h1>Nepal Rupees</h1>
                <h1>NPR</h1>
              </div>
              <div onClick={()=> props.setCurrency("INR")} className="mt-3 ml-3 cursor-pointer">
                <h1>Indian Rupees</h1>
                <h1>INR</h1>
              </div>
              <div onClick={()=> props.setCurrency("AUD")} className="mt-3 ml-3 cursor-pointer">
                <h1>Australian Dollar</h1>
                <h1>AUD</h1>
              </div>
              <div onClick={()=> props.setCurrency("USD")} className="mt-3 ml-3 cursor-pointer">
                <h1>United States Dollar</h1>
                <h1>USD</h1>
              </div>
              <div onClick={()=> props.setCurrency("BRL")} className="mt-3 ml-3 cursor-pointer">
                <h1>Brazilian Real</h1>
                <h1>BRL</h1>
              </div>
              <div onClick={()=> props.setCurrency("CAD")} className="mt-3 ml-3 cursor-pointer">
                <h1>Canadian Dollar</h1>
                <h1>CAD</h1>
              </div>
              <div onClick={()=> props.setCurrency("HKD")} className="mt-3 ml-3 cursor-pointer">
                <h1>Hong Kong Dollar</h1>
                <h1>HKD</h1>
              </div>
              <div onClick={()=> props.setCurrency("EUR")} className="mt-3 ml-3 cursor-pointer">
                <h1>Euro</h1>
                <h1>EUR</h1>
              </div>
              <div onClick={()=> props.setCurrency("JPY")} className="mt-3 ml-3 cursor-pointer">
                <h1>Japanese Yen</h1>
                <h1>JPY</h1>
              </div>
              <div onClick={()=> props.setCurrency("BGN")} className="mt-3 ml-3 cursor-pointer">
                <h1>Bulgaian Lev</h1>
                <h1>BGN</h1>
              </div>
              <div onClick={()=> props.setCurrency("CNY")} className="mt-3 ml-3 cursor-pointer">
                <h1>Chinese Yuan</h1>
                <h1>CNY</h1>
              </div>
              <div onClick={()=> props.setCurrency("AED")} className="mt-3 ml-3 cursor-pointer" >
                <h1>Emirati Dirham</h1>
                <h1>AED</h1>
              </div>
              <div onClick={()=> props.setCurrency("TRY")} className="mt-3 ml-3 cursor-pointer">
                <h1>Turkish Lira</h1>
                <h1>TRY</h1>
              </div>
              <div onClick={()=> props.setCurrency("SAR")} className="mt-3 ml-3 cursor-pointer">
                <h1>Saudi Arabian Riyal</h1>
                <h1>SAR</h1>
              </div>
              <div onClick={()=> props.setCurrency("PHP")} className="mt-3 ml-3 cursor-pointer">
                <h1>Philippine Peso</h1>
                <h1>PHP</h1>
              </div>
              <div onClick={()=> props.setCurrency("NZD")} className="mt-3 ml-3 cursor-pointer">
                <h1>New Zealand Dollar</h1>
                <h1>NZD</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Globe;
