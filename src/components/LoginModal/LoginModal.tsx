import React, { useState, useRef } from 'react'
import s from './LoginModal.module.scss'
import { CSSTransition } from 'react-transition-group';
import * as Yup from 'yup';
import { useFormik } from "formik";
import X from '../../assets/icons/x.svg';
import Eye from '../../assets/icons/eye-off.svg';
import EyeOn from '../../assets/icons/eye-on.svg';

const LoginSchema = Yup.object().shape({
   email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
   password: Yup.string()
            .min(7, 'Must contain 7 characters or more')
            .required('Required'),
 });

const LoginModal = ({ isModalOpen, setIsModalOpen }: { isModalOpen: boolean; setIsModalOpen: Function; }) => {
  const [status, setStatus] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);
  const nodeRef = useRef(null);
  const formik = useFormik({
     initialValues: {
        email: '',
        password: '',
     },
     onSubmit: (values, actions) => {
       console.log(JSON.stringify(values, null, 2));
       actions.resetForm({values: { email: '', password: ''}});
        },
     validationSchema: LoginSchema,
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
        <button type="button" className={s.closeButton} onClick={() => setIsModalOpen()}>
            <img src={X} alt="close" />
          </button>
          <h2 className={s.title}>Log In</h2>
          <p className={s.caption}>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
        <label>
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
          <button className={s.passwordShownButton} type="button" onClick={togglePassword}><img src={ passwordShown ? Eye : EyeOn } alt="toggle show password" /></button>
        </label>
        <button className={s.submitButton} type="submit">Log In</button>
        </form>
    </CSSTransition>
  )
}

export default LoginModal