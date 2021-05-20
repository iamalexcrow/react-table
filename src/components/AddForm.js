import React, { useEffect, useState } from 'react';
import { useTableContext } from '../context/context';
import { Formik, Field, Form, ErrorMessage, useFormik, FormItem } from 'formik';
import * as Yup from 'yup';
import MaskedInput from "react-text-mask";


const phoneNumberMask = [
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
];

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const AddForm = () => {
const {addItem} = useTableContext();

    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '' }}
            validateOnMount
            validationSchema={Yup.object({
                id: Yup.number()
                    .required('Required'),
                firstName: Yup.string()
                    .required('Required'),
                lastName: Yup.string()
                    .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                phone: Yup.string().required('Required')

            })}
            onSubmit={(values, { setSubmitting }) => {
                addItem(values);
                console.log(values);
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                    isValid
                } = props;
                return (
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="id">First Name</label>
                        <Field name="id" type="number" />
                        <ErrorMessage name="id" />

                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" />

                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" />

                        <label htmlFor="phone" style={{ display: "block" }}>Phone Number</label>
                        <Field
                            name="phone"
                            render={({ field }) => (
                                <MaskedInput
                                    {...field}
                                    mask={phoneNumberMask}
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.phone && touched.phone
                                            ? "text-input error"
                                            : "text-input"
                                    }
                                />
                            )}
                        />

                        {errors.phone && touched.phone && (
                            <div className="input-feedback">{errors.phone}</div>
                        )}

                        <button type="submit" disabled={!isValid}>
                            Submit
                        </button>
                    </form>
                );
            }}
        </Formik>
    );
};

export default AddForm;

