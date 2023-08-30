"use client";
import Pagination from "@/components/pagination/pagination";
import Inputradio from "@/components/tools/radio/radio";
import Switch from "@/components/tools/switch/switch";
import React, { useState } from "react";

export default function Listmenu() {
  const [limit, setLimit] = useState(10);
  const [status, setStatus] = useState(true);
  const [currectpage, setcurrectpage] = useState(1);
  const data = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <div className="p-4"> 
      <h4>List menu</h4>
      <div className="group-menu">
        <button
          type="button"
          color="secondary"
          className="btn btn-md btn-primary"
        >
          primary
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
        <button
          type="button"
          color="secondary"
          className="btn btn-md btn-block-primary"
        >
          primary
        </button>
        <button
          type="button"
          color="secondary"
          className="btn btn-block-warning"
        >
          warning
        </button>
        <button type="button" color="secondary" className="btn btn-block-error">
          error
        </button>
        <button
          type="button"
          color="secondary"
          className="btn btn-block-cancel"
        >
          cancel
        </button>
        <button
          type="button"
          color="secondary"
          className="btn btn-block-secondary"
        >
          secondary
        </button>
        <button
          type="button"
          color="secondary"
          className="btn btn-block-success"
        >
          success
        </button>
        <button
          type="button"
          color="secondary"
          className="btn btn-default btn-sm"
        >
          default sm
        </button>
        <button type="button" color="secondary" className="btn btn-default">
          default md
        </button>
        <button
          type="button"
          color="secondary"
          className="btn btn-md btn-default"
        >
          default md
        </button>
        <button
          type="button"
          color="secondary"
          className="btn btn-default btn-lg"
        >
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
        <h4>List Textfield</h4>
        <label htmlFor="">text field Default</label>
        <input type="text" className="form-control" />
        <label htmlFor="">text field lg</label>
        <input type="text" className="form-control form-control-lg" />
        <label htmlFor="">text field md</label>
        <input type="text" className="form-control form-control-md" />
        <label htmlFor="">text field sm</label>
        <input type="text" className="form-control form-control-sm" />
        <label htmlFor="">text field Error</label>
        <input type="text" className="form-control error" />
        <label htmlFor="">text field success</label>
        <input type="text" className="form-control success" />
      </div>

      <div className="mt-3">
        <h4>List menu Radio</h4>
        <Inputradio
          id="label1"
          name="status"
          title="laos"
          color="primary"
        />
        <Inputradio
          id="label2"
          name="status"
          title="thailand"
          color="secondary"
        />
        <Inputradio
          id="label3"
          name="status"
          title="Japan"
          color="warning"
        />
        <Inputradio
          id="label4"
          name="status"
          title="Korea"
          color="success"
        />
        <Inputradio
          id="label5"
          name="status"
          title="Vietnam"
          color="error"
        />
      </div>
      <div>
        <h4>List menu switch</h4>

        <Switch
          name="status"
          checked={status}
          onClick={() => setStatus(!status)}
          color="default"
        />
        <span>Default</span>
        <Switch
          name="status"
          checked={status}
          onClick={() => setStatus(!status)}
          color="primary"
        />
        <span>Primary</span>
        <Switch
          name="status"
          checked={status}
          onClick={() => setStatus(!status)}
          color="error"
        />
        <span>Error</span>
        <Switch
          name="status"
          checked={status}
          onClick={() => setStatus(!status)}
          color="warning"
        />
        <span>Warning</span>
        <Switch
          name="status"
          checked={status}
          onClick={() => setStatus(!status)}
          color="success"
        />
        <span>Success</span>
      </div>
      <div className="mt-3">
        <h4>Pagination</h4>
        <Pagination
          total={data}
          limit={limit}
          currectpage={currectpage}
          setLimit={setLimit}
          onChangepage={setcurrectpage}
        />
      </div>
    </div>
  );
}
