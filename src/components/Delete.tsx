import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../actions/userActions';

interface DeleteProps {
  userId: number;
}

interface ICommand {
  execute(): void;
}

class DeleteUserCommand implements ICommand {
  constructor(private readonly userId: number, private readonly dispatch: any) {}

  execute(): void {
    this.dispatch(deleteUser(this.userId));
  }
}

const Delete: React.FC<DeleteProps> = ({ userId }) => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    const command = new DeleteUserCommand(userId, dispatch);
    command.execute();
  }, [userId, dispatch]);

  return (
    <button onClick={handleDelete}>Excluir</button>
  );
};

export default Delete;
