import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
const CustomerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  contactNumber: Yup.string().required("Contact Number is required"),
  shippingAddress: Yup.object().shape({
    addressLine1: Yup.string().required("Address Line 1 is required"),
    addressLine2: Yup.string(),
    city: Yup.string().required("City is required"),
    postalCode: Yup.string().required("Postal Code is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
  }),
});

const CustomerCreate = () => {
  const inputClass =
    "w-full mt-1 px-3 py-2 rounded-lg bg-[#121212] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500";
  return (
    <div className="w-[60%] mx-auto bg-gray-900 p-8 mt-10 text-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6  text-center">Create Customer</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          contactNumber: "",
          shippingAddress: {
            addressLine1: "",
            addressLine2: "",
            city: "",
            postalCode: "",
            state: "",
            country: "",
          },
        }}
        validationSchema={CustomerSchema}
        onSubmit={async (values, { resetForm, setStatus }) => {
          try {
            const response = await axios.post(
              "http://localhost:5000/api/customers/create",
              values
            );
            if (response.data.status === true) {
              setStatus({ success: "Customer created successfully!" });
              console.log("Created Customer:", response.data.customer);
              resetForm();
            } else {
              setStatus({
                error: response.data.message || "Error creating customer",
              });
            }
          } catch (error) {
            setStatus({
              error:
                error.response?.data?.message ||
                "Server error please try again",
            });
          }
        }}
      >
        {/* passing status */}
        {({ status }) => (
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

            {/* Name */}
            <div>
              <label className="font-medium">Name</label>
              <Field name="name" /*schemas name*/ className={inputClass} />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>
            {/* email */}
            <div>
              <label className="font-medium">Email</label>
              <Field name="email" /*schemas name*/ className={inputClass} />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>
            {/* password */}
            <div>
              <label className="font-medium">Password</label>
              <Field
                name="password"
                /*schemas name*/ className={inputClass}
                type="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>
            {/* contactNumber */}
            <div>
              <label className="font-medium">Contact Number</label>
              <Field
                name="contactNumber"
                /*schemas name*/ className={inputClass}
              />
              <ErrorMessage
                name="contactNumber"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>
            <h2 className="text-xl font-bold mb-6  text-center">
              Shipping Address
            </h2>
            {/* addressLine1 */}
            <div>
              <label className="font-medium">Address Line 1</label>
              <Field
                name="shippingAddress.addressLine1"
                /*schemas name*/ className={inputClass}
              />
              <ErrorMessage
                name="shippingAddress.addressLine1"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>
            {/* addressLine2 */}
            <div>
              <label className="font-medium">Address Line 2</label>
              <Field
                name="shippingAddress.addressLine2"
                /*schemas name*/ className={inputClass}
              />
              <ErrorMessage
                name="shippingAddress.addressLine2"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>
            {/* city */}
            <div>
              <label className="font-medium">City</label>
              <Field
                name="shippingAddress.city"
                /*schemas name*/ className={inputClass}
              />
              <ErrorMessage
                name="shippingAddress.city"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>
            {/* postalcpde */}
            <div>
              <label className="font-medium">Postal Code</label>
              <Field
                name="shippingAddress.postalCode"
                /*schemas name*/ className={inputClass}
              />
              <ErrorMessage
                name="shippingAddress.postalCode"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>
            {/* state */}
            <div>
              <label className="font-medium">State</label>
              <Field
                name="shippingAddress.state"
                /*schemas name*/ className={inputClass}
              />
              <ErrorMessage
                name="shippingAddress.state"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>
            {/* country */}
            <div>
              <label className="font-medium">Country</label>
              <Field
                name="shippingAddress.country"
                /*schemas name*/ className={inputClass}
              />
              <ErrorMessage
                name="shippingAddress.country"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-black rounded py-3 mt-4 shadow-md transition duration-300 ease-in-out"
            >
              Create Customer
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomerCreate;
