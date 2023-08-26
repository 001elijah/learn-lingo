import React, { useState, useRef } from "react";
import s from "./RegistrationModal.module.scss";
import { CSSTransition } from "react-transition-group";
import * as Yup from "yup";
import { useFormik } from "formik";
import X from "../../assets/icons/x.svg";
import Eye from "../../assets/icons/eye-off.svg";
import EyeOn from "../../assets/icons/eye-on.svg";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(7, "Must contain 7 characters or more")
    .required("Required"),
});

const RegistrationModal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Function;
}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const nodeRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values, actions) => {
      console.log(JSON.stringify(values, null, 2));
      actions.resetForm({ values: { name: "", email: "", password: "" } });
    },
    validationSchema: RegistrationSchema,
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={isModalOpen}
      nodeRef={nodeRef}
      timeout={{ enter: 700, exit: 700 }}
      classNames={{
        enterActive: s.modalEnterActive,
        exitActive: s.modalExitActive,
      }}
    >
      <form className={s.modal} ref={nodeRef} onSubmit={formik.handleSubmit}>
        <button
          type="button"
          className={s.closeButton}
          onClick={() => setIsModalOpen()}
        >
          <img src={X} alt="close" />
        </button>
        <h2 className={s.title}>Registration</h2>
        <p className={s.caption}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <label className={s.nameInputWrapper}>
          <input
            className={s.nameInput}
            id="name"
            name="name"
            type="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </label>
        <label className={s.emailInputWrapper}>
          <input
            className={s.emailInput}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
        <label className={s.passwordInputWrapper}>
          <input
            className={s.passwordInput}
            id="password"
            name="password"
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button
            className={s.passwordShownButton}
            type="button"
            onClick={togglePassword}
          >
            <img src={passwordShown ? Eye : EyeOn} alt="toggle show password" />
          </button>
        </label>
        <button className={s.submitButton} type="submit">
          Sign Up
        </button>
      </form>
    </CSSTransition>
  );
};

export default RegistrationModal;