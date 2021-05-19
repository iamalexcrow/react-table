import React from 'react';
import { useForm } from "react-hook-form";
import {useTableContext} from '../context/context';

const AddForm = () => {
    const {addItem} = useTableContext();

    const { register, handleSubmit, watch, formState: {errors, isValid, isDirty } } = useForm();
    const onSubmit = (data) => addItem(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="id">Id:</label>
            <input type="number"{...register("id", { required: true, maxLength: 4 })} />
            {errors.id && "Id is required"}

            <label htmlFor="firstName">First name:</label>
            <input type="text" {...register("firstName", { required: true })} />
            {errors.firstName && "First name name is required"}

            <label htmlFor="lastName">Last name:</label>
            <input type="text" {...register("lastName", { required: true })} />
            {errors.lastName && "Last name is required"}

            <label htmlFor="email">Email:</label>
            <input type="email"{...register("email", { required: true })} />
            {errors.email && "email is required"}

            <label htmlFor="number">Number:</label>
            <input type="number" {...register("phone", { required: true })} />
            {errors.number && "Phone Number name is required"}

            <button disabled={!isDirty || !isValid}>ADD</button>
            <button onClick={() => console.log(isDirty, isValid)}>ADddD</button>
            {errors && <p>{errors.message}</p>}

        </form>
    )
}

export default AddForm;