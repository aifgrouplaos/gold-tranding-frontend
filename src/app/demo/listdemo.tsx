"use client";
import Pagination from "@/components/pagination/pagination";
import Inputradio from "@/components/tools/radio/radio";
import Switch from "@/components/tools/switch/switch";
import CurrencyInput from 'react-currency-input-field';
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

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
    <div className="p-4 bg-white">
      <h4>List menu</h4>
      <div className="group-menu">
        <button
          type="button"
          color="secondary"
          className="btn btn-md btn-primary"
        >
          primary
        </button>
        <button type="button" color="secondary" className="btn btn-secondary">
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
        <h4>Input updateload file</h4>
        <label htmlFor="">Upload file</label>
        <input type="file" className="form-control" />
        <hr className="my-3" />
        <label>Drag and Drop File / Upload file</label>
        <FileUploader handleChange={(file: any) => {
          console.log(file); 
        }} label="Drag and Drop files, or Upload: " onSelect={(file: any) => {
          console.log(file); 
        }} name="file" types={['jpeg', 'jpg', 'png', 'gif']} />
      </div>

      <div className="mt-3">
        <h4>List Textfield Number Format</h4>
        <CurrencyInput
          id="input-example"
          name="input-name"
          className="form-control"
          placeholder="Please enter a number"
          defaultValue={1000000}
          decimalsLimit={2}
          onValueChange={(value, name) => console.log(value, name)}
        />
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
        className="mt-2"
          id="label1"
          name="status"
          title="laos"
          value="lao"
          color="primary"  
          />
        <Inputradio
        className="mt-2"
          id="label2"
          name="status"
          value="thailand"
          title="thailand"
          color="secondary"
        />
        <Inputradio
        className="mt-2"
          id="label3"
          name="status"
          title="Japan"
          value="japan"
          color="warning"
        />
        <Inputradio
        className="mt-2"
          id="label4"
          name="status"
          value="korea"
          title="Korea"
          color="success"
        />
        <Inputradio
        className="mt-2"
          id="label5"
          name="status"
          value="vietnam"
          title="Vietnam"
          color="error"
        />
        <Inputradio
        className="mt-2"
          id="label6"
          name="status"
          value="cambodian"
          title="cambodian"
          color="secondary"
        />
        <Inputradio
        className="mt-2"
          id="label7"
          name="status"
          value="english"
          title="english"
          color="info"
        />
      </div>
      <div>
        <h4>List menu switch</h4>

        <Switch
          name="status"
          defaultChecked={status}
          onClick={() => setStatus(!status)}
          color="default"
        />
        <span>Default</span>
        <Switch
          name="status"
          defaultChecked={status}
          onClick={() => setStatus(!status)}
          color="primary"
        />
        <span>Primary</span>
        <Switch
          name="status"
          defaultChecked={status}
          onClick={() => setStatus(!status)}
          color="error"
        />
        <span>Error</span>
        <Switch
          name="status"
          defaultChecked={status}
          onClick={() => setStatus(!status)}
          color="warning"
        />
        <span>Warning</span>
        <Switch
          name="status"
          defaultChecked={status}
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
      <hr />
    </div>
  );
}
