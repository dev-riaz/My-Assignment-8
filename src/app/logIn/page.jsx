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

const LoginPage = () => {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      const { data, error } = await authClient.signIn.email({
        email: e.target.email.value,
        password: e.target.password.value,
      });

      if (error) {
        setErrorMessage(error.message || "Login failed!");
        toast.error(error.message || "Login failed!");
        setLoading(false);
        return;
      }

      toast.success("Login Successful!");

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong!");
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };
  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
    } catch (error) {
      console.error(error);
      toast.error("Google Sign In Failed!");
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 p-6 shadow-2xl border-t-2 border-base-300 rounded-3xl animate__animated animate__slideInLeft animate__slow">
        {/* Left Side */}
        <div className="order-2 md:order-1 flex justify-center items-center bg-white">
          <Form
            className="w-full max-w-md p-2 space-y-4"
            render={(props) => <form {...props} />}
            onSubmit={onSubmit}
          >
            <h1 className="text-3xl font-bold text-center">Please Login</h1>

            {errorMessage && (
              <div className="w-full rounded-lg bg-red-100 border border-red-300 p-3">
                <p className="text-red-600 text-sm">{errorMessage}</p>
              </div>
            )}

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

            <TextField
              isRequired
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
              <Description className="text-green-700">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            <div className="flex flex-col gap-2 mt-2 w-full">
              <Button
                className="w-full bg-[#0c4532] text-white"
                type="submit"
                isDisabled={loading}
              >
                {loading ? "Logging In..." : "Login"}
              </Button>

              <Button className="w-full bg-yellow-400 text-black" type="reset">
                Reset
              </Button>

              <p className="text-center">or</p>

              <Button
                onClick={handleGoogleSignIn}
                className="w-full bg-white text-black border border-gray-400"
                type="button"
              >
                <Image src={image2} width={20} height={20} alt="Google Logo" />
                Continue With Google
              </Button>

              <p className="text-center">
                Don not have an account?
                <Link
                  className="text-red-600 ml-1 font-semibold"
                  href="/register"
                >
                  Register →
                </Link>
              </p>
            </div>
          </Form>
        </div>

        {/* Right Side */}
        <div className="order-1 md:order-2 bg-[#14532D] text-white rounded-3xl flex flex-col justify-center items-center px-5 py-10">
          <Image
            src={image1}
            height={400}
            width={400}
            alt="QurbaniHat Banner"
          />

          <h1 className="text-2xl font-bold text-center mt-4">
            Welcome Back to QurbaniHat
          </h1>

          <p className="text-sm text-center mt-2">
            Login to browse, book and manage your Qurbani animals with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
