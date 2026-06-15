"use client";
import image1 from "@/assets/bannar cow image.png";
import Image from "next/image";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

const RegisterPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const data: Record<string, String> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 h-full p-6 shadow-2xl border-t-2 border-base-300 mt-5 rounded-3xl animate__animated animate__slideInRight animate__slow">
        <div className="bg-[#14532D] text-white flex-1 rounded-3xl flex flex-col justify-center items-center px-5">
          <Image src={image1} height={400} width={400} alt="moon image"></Image>
          <h1 className="text-2xl font-bold">Join QurbaniHat this Eid</h1>
          <p className="text-xs">
            Register to book your Qurbani animal from trusted farmers across
            Bangladesh.
          </p>
        </div>
        <div className="flex justify-center items-center bg-white flex-1">
          <Form
            className="w-96 p-2"
            render={(props) => <form {...props} data-custom="foo" />}
            onSubmit={onSubmit}
          >
            <h1>Create Account</h1>
            <TextField isRequired name="name" type="text">
              <Label>Full Name</Label>
              <Input
                aria-label="Name"
                className="w-full"
                placeholder="Enter your name"
              />
            </TextField>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input className="w-full" placeholder="john@example.com" />
              <FieldError />
            </TextField>
            <TextField isRequired name="name" type="text">
              <Label>Photo URL</Label>
              <Input
                aria-label="Name"
                className="w-full"
                placeholder="Enter your Photo URL"
              />
            </TextField>
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input className="w-full" placeholder="Enter Your Password" />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>
            <div className="flex flex-col gap-2 mt-2">
              <Button className="w-full" type="submit">
                <Check />
                Submit
              </Button>
              <Button className="w-full" type="reset" variant="secondary">
                Reset
              </Button>
              <p className="text-center">or</p>
              <Button className="w-full" type="">
                Continue With Google
              </Button>
              <p className="text-center">Already have an account?<Link className="text-red-600" href={"#"}> Login →</Link></p>
             
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
