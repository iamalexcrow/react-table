import React from 'react';
import { useTableContext } from '../context/context';

const UserPage = () => {
    const { user } = useTableContext();
    return (
        <div>
            Выбран пользователь <b>{user.firstName}</b>
            Описание:
            <textarea value ={user.description}>
            </textarea>
            Адрес проживания: <b>{user.address.streetAddress}</b>
            Город: <b>{user.address.city}</b>
            Провинция/штат: <b>{user.address.state}</b>
            Индекс: <b>{user.address.zip}</b>
        </div>
    )
}

export default UserPage;