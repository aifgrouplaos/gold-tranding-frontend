"use client";
import { ILoginResponse } from "@/types/datetype";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import LoadingButton from "@mui/lab/LoadingButton";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import {
  TextField,
  Container,
  InputAdornment,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import { EAuth } from "@/enums/auth";
import { SetLocalstorage } from "@/utils/login";
import Link from "next/link";
export default function Formlogin() {
  const rounter = useRouter();
  const [menulogin, setMenulogin] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [formlogin, setFormlogin] = React.useState({
    username: "",
    password: "",
  });
  const onkey = (e: any) => {
    setFormlogin({ ...formlogin, [e.target.name]: e.target.value });
  };
  const login = async (e: any) => {
    e.preventDefault();
    // console.log(JSON.stringify(formlogin));
    setMenulogin(true);
    try {
      ("use server");
      const api = await fetch(process.env.NEXT_PUBLIC_URL + EAuth.login, {
        method: "post",
        body: JSON.stringify(formlogin),
        headers: { "Content-Type": "application/json" },
      });
      const data: ILoginResponse = await api.json();
      if (data.success) {
        toast.success(data.message);
        SetLocalstorage(data);
        rounter.push("/dashboard");
      } else {
        setMenulogin(false);
        toast.error(data.message);
      }
    } catch (error) {
      setMenulogin(false);
      toast.error("ກາລຸນາກວດເບີ່ງ Nextwork");
    }
  };

  return (
    <Container>
      <form className="flex flex-col gap-1 mb-5" onSubmit={login} name="formlogin"> 
        <Stack>
          <b>Username or Email</b>
          <TextField
            required
            // size="small"
            fullWidth
            name="username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PermIdentityIcon />
                </InputAdornment>
              ),
            }}
            onChange={onkey}
            value={formlogin.username}
            id="username"
            placeholder="Enter Username or Email"
          />
        </Stack>

        <Stack pt={1}>
          <b>Password</b>
          <TextField
            fullWidth
            required
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={onkey}
            value={formlogin.password}
            id="password"
            placeholder="Enter Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack className="text-end">
          <Link href="/forgotpassword" className="text-underline my-3">
            Forgot Password
          </Link>
        </Stack>
        {/* <LoadingButton
          loading={menulogin}
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
        >
          <LogoutRoundedIcon fontSize="small" />
          <span className="ml-2"> Sign In</span>
        </LoadingButton> */}
        <input type="submit" className="btn btn-lg btn-secondary" disabled={menulogin} />
      </form>
    </Container>
  );
}
