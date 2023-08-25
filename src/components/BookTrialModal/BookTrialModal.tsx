import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import * as Yup from "yup";
import { useFormik } from "formik";
import X from "../../assets/icons/x.svg";
import s from "./BookTrialModal.module.scss";

const BookTrialSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email("Invalid email address").required("Required"),
  number: Yup.string()
    .min(7, "Must contain 7 characters or more")
    .required("Required"),
});

const BookTrialModal = ({
  teacherName,
  teacherPhoto,
  isModalOpen,
  setIsModalOpen,
}: {
  teacherName: string;
  teacherPhoto: string;
  isModalOpen: boolean;
  setIsModalOpen: Function;
}) => {
  const nodeRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      picked: "",
      name: "",
      email: "",
      number: "",
    },
    onSubmit: (values, actions) => {
      console.log(JSON.stringify(values, null, 2));
      actions.resetForm({
        values: { picked: "", name: "", email: "", number: "" },
      });
    },
    validationSchema: BookTrialSchema,
  });

  const handleRadioButtons = (e: React.ChangeEvent<HTMLInputElement>) => {
    const radio = e.target as HTMLInputElement;
    formik.values.picked = radio.value;
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
        <h2 className={s.title}>Book trial lesson</h2>
        <div className={s.scrollableFormArea}>
          <p className={s.caption}>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </p>
          <div className={s.teacherWrapper}>
            <div className={s.teacherPhoto}>
              <img
                className={s.teacherImage}
                src={teacherPhoto}
                alt="teacher"
              />
            </div>
            <div>
              <span className={s.teacherCaption}>Your teacher</span>
              <span className={s.teacherName}>{teacherName}</span>
            </div>
          </div>
          <fieldset className={s.radioWrapper}>
            <legend className={s.legend}>
              What is your main reason for learning English?
            </legend>

            <div>
              <label className={s.formControl}>
                <input
                  type="radio"
                  id="career"
                  name="reason"
                  value="Career and business"
                  onChange={(e) => handleRadioButtons(e)}
                />
                Career and business
              </label>
            </div>

            <div>
              <label className={s.formControl}>
                <input
                  type="radio"
                  id="lesson"
                  name="reason"
                  value="Lesson for kids"
                  onChange={(e) => handleRadioButtons(e)}
                />
                Lesson for kids
              </label>
            </div>

            <div>
              <label className={s.formControl}>
                <input
                  type="radio"
                  id="abroad"
                  name="reason"
                  value="Living abroad"
                  onChange={(e) => handleRadioButtons(e)}
                />
                Living abroad
              </label>
            </div>
            <div>
              <label className={s.formControl}>
                <input
                  type="radio"
                  id="exams"
                  name="reason"
                  value="Exams and coursework"
                  onChange={(e) => handleRadioButtons(e)}
                />
                Exams and coursework
              </label>
            </div>
            <div>
              <label className={s.formControl}>
                <input
                  type="radio"
                  id="hobby"
                  name="reason"
                  value="Culture, travel or hobby"
                  onChange={(e) => handleRadioButtons(e)}
                />
                Culture, travel or hobby
              </label>
            </div>
          </fieldset>
          <label className={s.nameInputWrapper}>
            <input
              className={s.nameInput}
              id="name"
              name="name"
              type="name"
              placeholder="Full Name"
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
          <label className={s.numberInputWrapper}>
            <input
              className={s.numberInput}
              id="number"
              name="number"
              type="text"
              placeholder="Phone number"
              onChange={formik.handleChange}
              value={formik.values.number}
            />
          </label>
        </div>
        <button className={s.submitButton} type="submit">
          Book
        </button>
      </form>
    </CSSTransition>
  );
};

export default BookTrialModal;
