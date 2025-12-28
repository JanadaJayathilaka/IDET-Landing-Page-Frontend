import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

////////validation Fields///////////
const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

///////Handle Form submit ///////////
const handleLoginUser = async (values, actions) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/auth/client/login",
      values
    );

    ////save token to local storage ////
    localStorage.setItem("token", data.token);
    actions.setStatus({ success: "Customer logged in successfully!" });
    actions.resetForm();
  } catch (error) {
    actions.setStatus({
      error: error.response?.data?.message || "Error logging in customer",
    });
  } finally {
    actions.setSubmitting(false);
  }
};
const LoginForm = () => {
  const inputClass =
    "w-full mt-1 px-3 py-2 rounded-lg bg-[#121212] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500";
  return (
    <div className="w-[60%] mx-auto bg-gray-900 p-8 mt-10 text-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6  text-center">Login Customer</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleLoginUser}
      >
        {/* passing status */}
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          status,
        }) => (
          <Form onSubmit={handleSubmit} className="space-y-5">
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

            {/* email */}
            <div>
              <label className="font-medium">Email</label>
              <input
                name="email"
                type="email"
                /*schemas name*/ className={inputClass}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && (
                <p className="text-xs text-red-400 mt-1">{errors.email}</p>
              )}
            </div>
            {/* password */}
            <div>
              <label className="font-medium">Password</label>
              <input
                name="password"
                type="password"
                /*schemas name*/ className={inputClass}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <p className="text-xs text-red-400 mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-500 hover:bg-green-600 text-black rounded py-3 mt-4 shadow-md transition duration-300 ease-in-out"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
