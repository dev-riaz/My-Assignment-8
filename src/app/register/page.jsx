"use client";

import image1 from "@/assets/bannar cow image.png";
import image2 from "@/assets/gmail.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");

    const { data, error } = await authClient.signUp.email({
      name: e.target.name.value,
      email: e.target.email.value,
      image: e.target.image.value,
      password: e.target.password.value,
    });

    if (error) {
      setErrorMessage(error.message || "Registration failed!");
      return;
    }

    toast.success("Registration Successful!");

    setTimeout(() => {
      router.push("/logIn");
    }, 1000);
  };
  const handleGoogleSignUp = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.error(error);
      toast.error("Google Sign In Failed!");
    }
  };

  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 h-full p-6 shadow-2xl border-t-2 border-base-300 mt-5 rounded-3xl animate__animated animate__slideInRight animate__slow">
        {/* Left Side */}
        <div className="bg-[#14532D] text-white flex-1 rounded-3xl flex flex-col justify-center items-center px-5">
          <Image src={image1} height={400} width={400} alt="Banner Image" />
          <h1 className="text-2xl font-bold mt-4">Join QurbaniHat this Eid</h1>
          <p className="text-xs text-center">
            Register to book your Qurbani animal from trusted farmers across
            Bangladesh.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex justify-center items-center bg-white flex-1">
          <Form
            className="w-96 p-2"
            render={(props) => <form {...props} />}
            onSubmit={onSubmit}
          >
            <h1 className="text-2xl font-bold mb-3">Create Account</h1>

            {errorMessage && (
              <div className="w-full bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded mb-3">
                {errorMessage}
              </div>
            )}

            {/* Name */}
            <TextField isRequired name="name" type="text">
              <Label>Full Name</Label>
              <Input className="w-full" placeholder="Enter your name" />
            </TextField>

            {/* Email */}
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

            {/* Image */}
            <TextField isRequired name="image" type="text">
              <Label>Photo URL</Label>
              <Input className="w-full" placeholder="Enter your photo URL" />
            </TextField>

            {/* Password */}
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

            {/* Buttons */}
            <div className="flex flex-col gap-2 mt-4 w-full">
              <Button className="w-full bg-[#0c4532] text-white" type="submit">
                Register
              </Button>

              <Button
                className="w-full bg-yellow-400 text-black"
                type="reset"
                variant="secondary"
              >
                Reset
              </Button>

              <p className="text-center">or</p>

              <Button
                onClick={handleGoogleSignUp}
                className="w-full bg-white text-black border border-gray-400"
                type="button"
              >
                <Image src={image2} width={20} height={20} alt="Google Logo" />
                Continue With Google
              </Button>

              <p className="text-center">
                Already have an account?{" "}
                <Link className="text-red-600" href="logIn">
                  Login →
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
