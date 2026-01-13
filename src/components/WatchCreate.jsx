import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { apiConfig } from "../api/apiConfig";

const WatchSchema = Yup.object().shape({
  modelNumber: Yup.string().required("Model Number is required"),
  brand: Yup.string().required("Brand is required"),
  price: Yup.number()
    .positive("Price must be a positive number")
    .required("Price is required"),
  type: Yup.string().required("Type is required"),
});

const WatchCreate = ({ onWatchCreated }) => {
  const inputClass =
    "w-full mt-1 px-3 py-2 rounded-lg bg-[#121212] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="w-[60%] mx-auto bg-gray-900 p-8 mt-10 text-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Watch</h2>

      <Formik
        initialValues={{
          modelNumber: "",
          brand: "",
          price: "",
          type: "",
        }}
        validationSchema={WatchSchema}
        onSubmit={async (values, { resetForm, setStatus, setSubmitting }) => {
          try {
            const response = await axios.post(
              `${apiConfig.createWatch}`,
              values
            );
            if (response.data.success === true) {
              setStatus({ success: "Watch created successfully!" });
              console.log("Created Watch:", response.data);
              setTimeout(() => {
                resetForm();
                setStatus(null);
                onWatchCreated();
              }, 2000);
            } else {
              setStatus({
                error: response.data.message || "Error creating watch",
              });
            }
          } catch (error) {
            setStatus({
              error:
                error.response?.data?.message ||
                "Server error please try again",
            });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ status, isSubmitting }) => (
          <Form className="space-y-5">
            {/* SUCCESS / ERROR ALERTS */}
            {status?.success && (
              <div className="p-3 bg-green-600/20 text-green-300 border border-green-600 rounded-md">
                {status.success}
              </div>
            )}
            {status?.error && (
              <div className="p-3 bg-red-600/20 text-red-300 border border-red-600 rounded-md">
                {status.error}
              </div>
            )}

            {/* Model Number */}
            <div>
              <label className="font-medium">Model Number</label>
              <Field
                name="modelNumber"
                className={inputClass}
                placeholder="e.g., WM001"
              />
              <ErrorMessage
                name="modelNumber"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Brand */}
            <div>
              <label className="font-medium">Brand</label>
              <Field
                name="brand"
                className={inputClass}
                placeholder="e.g., Rolex"
              />
              <ErrorMessage
                name="brand"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Price */}
            <div>
              <label className="font-medium">Price</label>
              <Field
                name="price"
                type="number"
                className={inputClass}
                placeholder="e.g., 999.99"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Type */}
            <div>
              <label className="font-medium">Type</label>
              <Field name="type" as="select" className={inputClass}>
                <option value="">Select a type</option>
                <option value="analog">Analog</option>
                <option value="digital">Digital</option>
                <option value="smart">Smart</option>
                <option value="mechanical">Mechanical</option>
              </Field>
              <ErrorMessage
                name="type"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-500 hover:bg-green-600 text-black rounded py-3 mt-4 shadow-md transition duration-300 ease-in-out disabled:opacity-50"
            >
              {isSubmitting ? "Creating..." : "Create Watch"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default WatchCreate;
