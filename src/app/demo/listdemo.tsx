"use client";
import Pagination from "@/components/pagination/pagination";
import React, { useState } from "react";
export default function Listdemo() { 
  const [limit, setLimit] = useState(10)
  const [currectpage, setcurrectpage] = useState(1)
  const data=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o', 'p','q','r','s','t','u','v','w','x','y','z'];
  return (
    <div className="p-4">
      <h4>List menu</h4>
      <div className="group-menu">
        <button
          type="button"
          color="secondary"
          className="btn btn-md btn-primary"
        > primary
        </button>
        <button type="button" color="secondary" className="btn btn-warning">
        warning
        </button>
        <button type="button" color="secondary" className="btn btn-error">
        error
        </button>
        <button type="button" color="secondary" className="btn btn-cancel">
        cancel
        </button>
        <button type="button" color="secondary" className="btn btn-secondary">
        secondary
        </button>
        <button type="button" color="secondary" className="btn btn-success">
        success
        </button>
        <button type="button" color="secondary" className="btn btn-default btn-sm">
        default sm
        </button>
        <button type="button" color="secondary" className="btn btn-default">
        default md
        </button>
        <button type="button" color="secondary" className="btn btn-md btn-default">
        default md
        </button>
        <button type="button" color="secondary" className="btn btn-default btn-lg">
        default lg
        </button>
      </div>
      <div className="mt-3">
        <h4>List Badge</h4>
        <span className="badge-primary">primary</span>
        <span className="badge-success">success</span>
        <span className="badge-warning">warning</span>
        <span className="badge-secondary">secondary</span>
        <span className="badge-error">error</span>
        <span className="badge-cancel">cancel</span>
      </div>
      <div className="mt-3">
        <h4>Pagination</h4> 
        <Pagination total={data} limit={limit} currectpage={currectpage} setLimit={setLimit} onChangepage={setcurrectpage}/>
      </div>
    </div>
  );
}
