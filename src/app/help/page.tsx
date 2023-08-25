import React from "react";
import Link from "next/link";
import { Container, Stack } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PortraitIcon from "@mui/icons-material/Portrait";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import KeyIcon from "@mui/icons-material/Key";
export default function page() {
  return (
    <Container sx={{ marginBlock: "15px" }}>
      <h3 className="text-2xl text-danger font-bold">
        ແນະນຳວີທີການນໍາໃຊ້ລະບົບ
      </h3>
      <Stack
        sx={{
          paddingTop: "10px",
          padding: "5px",
          borderBottom: "1px solid #e1e1e1",
        }}
      >
        <p className="text-dark">
          <PersonIcon fontSize="large" color="primary" />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores
          unde aspernatur deleniti nulla corrupti libero deserunt quas, debitis
          veritatis fugiat blanditiis dolorem maiores ipsa eum, quae esse
          nostrum error..
        </p>
        <Link href="/">
          ຕ້ອງການເຂົ້າລະບົບ ຄຣິກນີ້: <u>Click</u>
        </Link>
      </Stack>
      <Stack
        sx={{
          paddingTop: "10px",
          padding: "5px",
          borderBottom: "1px solid #e1e1e1",
        }}
      >
        <p className="text-dark">
          <PortraitIcon fontSize="large" color="primary" />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores
          unde aspernatur deleniti nulla corrupti libero deserunt quas, debitis
          veritatis fugiat blanditiis dolorem maiores ipsa eum, quae esse
          nostrum error..
        </p>
        <Link href="/">
          ຕ້ອງການເຂົ້າລະບົບ ຄຣິກນີ້: <u>Click</u>
        </Link>
      </Stack>
      <Stack
        sx={{
          paddingTop: "10px",
          padding: "5px",
          borderBottom: "1px solid #e1e1e1",
        }}
      >
        <p className="text-dark">
          <LocationOnIcon fontSize="large" color="primary" />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores
          unde aspernatur deleniti nulla corrupti libero deserunt quas, debitis
          veritatis fugiat blanditiis dolorem maiores ipsa eum, quae esse
          nostrum error..
        </p>
        <Link href="/">
          ຕ້ອງການເຂົ້າລະບົບ ຄຣິກນີ້: <u>Click</u>
        </Link>
      </Stack>
      <Stack
        sx={{
          paddingTop: "10px",
          padding: "5px",
          borderBottom: "1px solid #e1e1e1",
        }}
      >
        <p className="text-dark">
          <HelpCenterIcon fontSize="large" color="primary" />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores
          unde aspernatur deleniti nulla corrupti libero deserunt quas, debitis
          veritatis fugiat blanditiis dolorem maiores ipsa eum, quae esse
          nostrum error..
        </p>
        <Link href="/">
          ຕ້ອງການເຂົ້າລະບົບ ຄຣິກນີ້: <u>Click</u>
        </Link>
      </Stack>
      <Stack
        sx={{
          paddingTop: "10px",
          padding: "5px",
          borderBottom: "1px solid #e1e1e1",
        }}
      >
        <p className="text-dark">
          <KeyIcon fontSize="large" color="primary" />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores
          unde aspernatur deleniti nulla corrupti libero deserunt quas, debitis
          veritatis fugiat blanditiis dolorem maiores ipsa eum, quae esse
          nostrum error..
        </p>
        <Link href="/">
          ຕ້ອງການເຂົ້າລະບົບ ຄຣິກນີ້: <u>Click</u>
        </Link>
      </Stack>
    </Container>
  );
}
