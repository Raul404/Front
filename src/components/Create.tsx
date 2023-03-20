import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { createUser } from "../actions/userActions";
import { User } from "../types/UserType";
import { RootState } from "../store";

type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;

const Create: React.FC = React.memo(() => {
  const dispatch = useDispatch<AppDispatch>();
  const [userData, setUserData] = useState<User>({
    name: { firstname: '', lastname: '' },
    email: '',
    address: {
      geolocation: { lat: '', long: '' },
      city: '',
      street: '',
      number: 0,
      zipcode: ''
    },
    id: 0,
    username: '',
    password: '',
    phone: ''
  });

  const handleFirstNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserData((prevUserData) => ({
        ...prevUserData,
        name: { ...prevUserData.name, firstname: event.target.value },
      }));
    },
    []
  );
  
  const handleLastNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserData((prevUserData) => ({
        ...prevUserData,
        name: { ...prevUserData.name, lastname: event.target.value },
      }));
    },
    []
  );
  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    dispatch(createUser(userData));
    setUserData({
      name: { firstname: '', lastname: '' },
      email: '',
      address: {
        geolocation: { lat: '', long: '' },
        city: '',
        street: '',
        number: 0,
        zipcode: ''
      },
      id: 0,
      username: '',
      password: '',
      phone: ''
    });
  }, [dispatch, userData]);

  return (
    <div>
      <h1>Criar usuário</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Primeiro Nome:
          <input type="text" onChange={handleFirstNameChange} />
        </label>
        <label>
          Último Nome:
          <input type="text" onChange={handleLastNameChange} />
        </label>
        <br />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
});
export default Create