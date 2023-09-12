import Link from "next/link";
import React from "react"; 
import Inputradio from "@/components/tools/radio/radio";
import Summary from "./summary";
import Icongoback from "@/icon/icongoback";
import Iconsaveoutline from "@/icon/iconsaveoutline";  
import Iconbilloutline from "@/icon/iconbilloutline";

export default function Formcreateorder() {
  return (
    <>
      <div className="grid grid-cols-12 mb-4 gap-5">
        <div className="col-span-12 lg:col-span-7 flex  flex-wrap  items-center gap-2">
          <Link href="/order" className="bg-white rounded-lg p-2">
            <Icongoback />
          </Link>
          <span className="font-bold text-xl">Create New Position Order</span>
        </div>
        <div className="col-span-12 lg:col-span-5 flex flex-wrap gap-3  lg:justify-end">
          <button className="btn btn-md btn-cancel">
            <Iconsaveoutline/> Save Draft
          </button>
          <button className="btn btn-md btn-success">
            <Iconsaveoutline /> Create Order
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-8 bg-white rounded-lg py-3 px-5">
          <div className="flex items-center text-xl gap-2">
            <Iconbilloutline />
            <span>Position Order Information</span>
          </div>

          <div className="grid grid-cols-12 gap-5 mt-3">
            <div className="col-span-12 lg:col-span-6 xl:col-span-3">
              <label>
                AIF Position Order Type
                <span className="text-danger">*</span>
              </label>
              <Inputradio id="buy" name="status" title="BUY" color="primary" />
            </div>
            <div className="col-span-12 lg:col-span-6 xl:col-span-3">
              <Inputradio
                id="sell"
                name="status"
                title="SELL"
                color="error"
                className="lg:mt-5"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5 mt-3">
            <div className="col-span-12 lg:col-span-6">
              <label>
                Customer Infor <span className="text-danger">*</span>
              </label>
              <select name="customer" id="customer" className="form-select">
                <option value="">--Please Select--</option>
              </select>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <b>
                Seller Infor <span className="text-danger">*</span>
              </b>
              <select name="seller" id="seller" className="form-select">
                <option value="">--Please Select--</option>
              </select>
            </div>

            <div className="col-span-12 lg:col-span-3">
              <label>
                Gold Type
                <span className="text-danger">*</span>
              </label>
              <Inputradio
                id="trading"
                name="goldtype"
                title="trading"
                color="warning"
              />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <Inputradio
                id="physical"
                name="goldtype"
                title="physical"
                color="primary"
                className="lg:mt-5"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <b>
                Position Order Date <span className="text-danger">*</span>
              </b>
              <input type="date" name="orderdate" className="form-control" />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <label>
                Supplier Port Name <span className="text-danger">*</span>
              </label>
              <select name="customer" id="customer" className="form-select">
                <option value="">--Please Select--</option>
              </select>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <label>
                Supplier Port No. <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="supplier_no"
                className="form-control"
                placeholder="Enter Supplier No"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <label>
                Supplier Port Date <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                name="supplier_no"
                className="form-control"
                placeholder="--Select Date--"
              />
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <label>
                Spot/oz<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="supplier_no"
                className="form-control"
                placeholder="Enter Spot Number"
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <label>
                Spot/kg(USD) 
              </label>
              <input
                type="text"
                disabled
                name="supplier_no"
                className="form-control"
                placeholder="-"
              />
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <label>
                Quantity/(kg)<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="supplier_no"
                className="form-control"
                placeholder="Enter Quantity"
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <label>
                Price/kg(USD)<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="supplier_no"
                className="form-control"
                placeholder="Enter Pricing"
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <label>
                Margin (%)<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="supplier_no"
                className="form-control"
                placeholder="Enter Magin"
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <label>
                Margin (USD)<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="supplier_no"
                className="form-control"
                placeholder="Enter Margin"
              />
            </div>

            <div className="col-span-12">
              <label>Remark</label>
              <textarea
                name="remark"
                id="remark"
                placeholder="Remark..."
                className="form-control"
                rows={3}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 ">
          <Summary />
        </div>
      </div>
    </>
  );
}
