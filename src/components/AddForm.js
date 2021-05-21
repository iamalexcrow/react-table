import React, { useEffect, useState } from 'react';
import { useTableContext } from '../context/context';
import { Formik, Field, ErrorMessage, useFormik, FormItem } from 'formik';
import * as Yup from 'yup';
import MaskedInput from "react-text-mask";
import styled, {css} from 'styled-components';

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

const AddForm = () => {
    const { addItem } = useTableContext();

    return (
        <Formik
            initialValues={{ id: '', firstName: '', lastName: '', email: '', phone: '' }}
            validateOnMount
            validationSchema={Yup.object({
                id: Yup.number()
                    .required('This field is required'),
                firstName: Yup.string()
                    .required('This field is required'),
                lastName: Yup.string()
                    .required('This field is required'),
                email: Yup.string().email('Invalid email address').required('This field is required'),
                phone: Yup.string().required('This field is required')

            })}
            onSubmit={(values, onSubmitProps) => {
                addItem(values);
                onSubmitProps.resetForm();
                console.log(values);
            }}
        >
            {props => {
                const {
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isValid
                } = props;
                return (
                    <FormWrapper onSubmit={handleSubmit}>
                        <FieldWrapper>
                            <label htmlFor="id">Id</label>
                            <Field name="id" type="number" placeholder="Enter id of a hacked person" />
                            {touched.id && errors.id ? (
                                <p>{errors.id}</p>
                            ) : null}
                        </FieldWrapper>
                        <FieldWrapper>
                            <label htmlFor="firstName"> First Name</label>
                            <Field name="firstName" type="text" placeholder="Enter first name of a hacked person" />
                            {touched.firstName && errors.firstName ? (
                                <p>{errors.firstName}</p>
                            ) : null}
                        </FieldWrapper>
                        <FieldWrapper>
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" placeholder="Enter last name of a hacked person" />
                            {touched.lastName && errors.lastName ? (
                                <p>{errors.lastName}</p>
                            ) : null}
                        </FieldWrapper>
                        <FieldWrapper>
                            <label htmlFor="email">Email Address</label>
                            <Field name="email" type="email" placeholder="Enter email of a hacked person" />
                            {touched.email && errors.email ? (
                                <p>{errors.email}</p>
                            ) : null}
                        </FieldWrapper>
                        <FieldWrapper>
                            <label htmlFor="phone">Phone Number</label>
                            <Field
                                name="phone"
                                render={({ field }) => (
                                    <MaskedInput
                                        {...field}
                                        mask={phoneNumberMask}
                                        id="phone"
                                        placeholder="Enter phone number of a hacked person"
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
                            {touched.phone && errors.phone ? (
                                <p>{errors.phone}</p>
                            ) : null}
                        </FieldWrapper>
                        <FieldWrapper>
                            <Button type="submit" disabled={!isValid}>
                                SUBMIT
                            </Button>
                        </FieldWrapper>
                    </FormWrapper>
                );
            }}
        </Formik>
    );
};

export default AddForm;

const Button = styled.button`
background: white;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    border: 2px solid #010100;
    border: 2px solid #010100;
    padding: 15px;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
    transition: 0.05s;
    margin-bottom: 10px;
    border-radius: 5px;
    ${props => props.disabled && css`
        border: 2px solid #c7c8ca;
        color: #c7c8ca;
  `}

    :hover {
        transition:0.05s;
        border: 2px solid #4966aa;
        color: #4966aa;
        ${props => props.disabled && css`
        border: 2px solid #c7c8ca;
        color: #c7c8ca;
  `}
    }
`

const FieldWrapper = styled.div`
width: 100%;
margin-top: 10px;
label {
    text-transform: uppercase;
    letter-spacing: 2px;
    display:block;
    margin: 0 0 5px 15px;
    font-weight:bold;
}
input {
    height: 30px;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0 0 0 15px;
    border: 1px solid #010100;
    border-radius: 6px;
    text-transform: uppercase;
    letter-spacing: 1px;
}
p {
    color: red;
    padding: 0px;
    margin: 3px 0 0 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0 0 0 15px;
}
button {
    width: 100%;
}
`

const FormWrapper = styled.form`
display: flex;
flex-direction: column;
`