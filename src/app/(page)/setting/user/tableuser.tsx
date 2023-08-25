import React from "react";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import Link from "next/link";

export default function Tableuser() {
  return (
    <div className="table-responesive">
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>User No.</th>
          <th>Name</th>
          <th>Username</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Date Created</th>
          <th>Status</th>
          <th style={{ width: "100px" }}>Action</th>
        </tr>
      </thead>
      <tbody className="tbody">
        <tr>
          <td>1</td>
          <td>No-1000</td>
          <td>Khouayue Kateeyue</td>
          <td>Khouayue</td>
          <td>020-7814-9878</td>
          <td>Khouayue@gmail.com</td>
          <td>20/10/2023</td>
          <td>
            <div className="badge-success">Active</div>
          </td>
          <td>
            <Link href="/setting/user/1" className="btn btn-sm btn-default">
              <MoreHorizRoundedIcon fontSize="small" />
            </Link>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>No-1000</td>
          <td>Khouayue Kateeyue</td>
          <td>Khouayue</td>
          <td>020-7814-9878</td>
          <td>Khouayue@gmail.com</td>
          <td>20/10/2023</td>
          <td>
            <div className="badge-success">Active</div>
          </td>
          <td>
            <Link href="/setting/user/1" className="btn btn-sm btn-default">
              <MoreHorizRoundedIcon fontSize="small" />
            </Link>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>No-1000</td>
          <td>Khouayue Kateeyue</td>
          <td>Khouayue</td>
          <td>020-7814-9878</td>
          <td>Khouayue@gmail.com</td>
          <td>20/10/2023</td>
          <td>
            <div className="badge-success">Active</div>
          </td>
          <td>
            <Link href="/setting/user/1" className="btn btn-sm btn-default">
              <MoreHorizRoundedIcon fontSize="small" />
            </Link>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>No-1000</td>
          <td>Khouayue Kateeyue</td>
          <td>Khouayue</td>
          <td>020-7814-9878</td>
          <td>Khouayue@gmail.com</td>
          <td>20/10/2023</td>
          <td>
            <div className="badge-warning">Active</div>
          </td>
          <td>
            <Link href="/setting/user/1" className="btn btn-sm btn-default">
              <MoreHorizRoundedIcon fontSize="small" />
            </Link>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>No-1000</td>
          <td>Khouayue Kateeyue</td>
          <td>Khouayue</td>
          <td>020-7814-9878</td>
          <td>Khouayue@gmail.com</td>
          <td>20/10/2023</td>
          <td>
            <div className="badge-success">Active</div>
          </td>
          <td>
            <Link href="/setting/user/1" className="btn btn-sm btn-default">
              <MoreHorizRoundedIcon fontSize="small" />
            </Link>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>No-1000</td>
          <td>Khouayue Kateeyue</td>
          <td>Khouayue</td>
          <td>020-7814-9878</td>
          <td>Khouayue@gmail.com</td>
          <td>20/10/2023</td>
          <td>
            <div className="badge-success">Active</div>
          </td>
          <td>
            <Link href="/setting/user/1" className="btn btn-sm btn-default">
              <MoreHorizRoundedIcon fontSize="small" />
            </Link>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>No-1000</td>
          <td>Khouayue Kateeyue</td>
          <td>Khouayue</td>
          <td>020-7814-9878</td>
          <td>Khouayue@gmail.com</td>
          <td>20/10/2023</td>
          <td>
            <div className="badge-warning">Active</div>
          </td>
          <td>
            <Link href="/setting/user/1" className="btn btn-sm btn-default">
              <MoreHorizRoundedIcon fontSize="small" />
            </Link>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>No-1000</td>
          <td>Khouayue Kateeyue</td>
          <td>Khouayue</td>
          <td>020-7814-9878</td>
          <td>Khouayue@gmail.com</td>
          <td>20/10/2023</td>
          <td>
            <div className="badge-success">Active</div>
          </td>
          <td>
            <Link href="/setting/user/1" className="btn btn-sm btn-default">
              <MoreHorizRoundedIcon fontSize="small" />
            </Link>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>No-1000</td>
          <td>Khouayue Kateeyue</td>
          <td>Khouayue</td>
          <td>020-7814-9878</td>
          <td>Khouayue@gmail.com</td>
          <td>20/10/2023</td>
          <td>
            <div className="badge-warning">Active</div>
          </td>
          <td>
            <Link href="/setting/user/1" className="btn btn-sm btn-default">
              <MoreHorizRoundedIcon fontSize="small" />
            </Link>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>No-1000</td>
          <td>Khouayue Kateeyue</td>
          <td>Khouayue</td>
          <td>020-7814-9878</td>
          <td>Khouayue@gmail.com</td>
          <td>20/10/2023</td>
          <td>
            <div className="badge-success">Active</div>
          </td>
          <td>
            <Link href="/setting/user/1" className="btn btn-sm btn-default">
              <MoreHorizRoundedIcon fontSize="small" />
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
