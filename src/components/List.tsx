import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';
import { fetchUsers } from '../actions/userActions';
import { User } from '../types/UserType';

const List: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
  const users = useSelector((state: RootState) => state.user.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Lista de usuários</h1>
      <ul>
        {Array.isArray(users) && users.map((user: User) => (
          <li key={user.id}>
            {user.name.firstname} {user.name.lastname}
            
            <br />
            Email: {user.email}
            <br />
            Telefone: {user.phone}
            <br />
            {/* Passando o id do usuário como um parâmetro de URL */}
            <Link to={`/delete/${user.id}`}>Excluir</Link>
            <Link to={`/update/${user.id}`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;