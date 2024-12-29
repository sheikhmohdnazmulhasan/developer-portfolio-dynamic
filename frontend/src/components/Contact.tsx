"use client";
import { serverUrl } from "@/config";
import axios from "axios";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = {} as {
      name: string;
      email: string;
      message: string;
    };

    const isLoading = toast.loading("Processing");

    for (const key in defaultFormState) {
      if (formData.hasOwnProperty(key)) {
        //@ts-ignore: x
        result[key] = formData[key].value;
      }
    }

    if (typeof result?.message === "string" && result.message.length < 11) {
      toast.error("Message too short. Please provide more information.", {
        id: isLoading,
      });
      return;
    }

    try {
      const { data } = await axios.post(`${serverUrl}/send-email`, result);
      if (data.success) {
        toast.success("Contact info successfully send", { id: isLoading });
        e.target.reset();
      } else {
        toast.error("Something bad happened", { id: isLoading });
        e.target.reset();
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, { id: isLoading });
        e.target.reset();
      } else {
        toast.error("Something bad happened", { id: isLoading });
        e.target.reset();
      }
    }
  };

  return (
    <>
      <Toaster />
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.name.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
          <input
            type="email"
            placeholder="Your email address"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.email.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            rows={10}
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.message.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                message: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
        </div>
        <button
          className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
          type="submit"
        >
          Submit{" "}
        </button>
      </form>
    </>
  );
};
