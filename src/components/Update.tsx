import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { updateUser } from '../actions/userActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../store';


interface UpdateProps {
  userId: number;
}

const Update: React.FC<UpdateProps> = ({ userId }) => {
  const dispatch = useDispatch<ThunkDispatch<RootState, null, AnyAction>>();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState(0);
  const [zipcode, setZipcode] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [isValid, setIsValid] = useState<boolean>(false);

  // Use the useParams hook to access the userId parameter
  // from the route.


const handleFirstnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(event.target.value);
};

const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value);
};

const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
};

const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isValid) {
      const updateUserAction = updateUser(userId as unknown as number , {
        name: { firstname, lastname },
        email,
        address: {
          geolocation: { lat,long },
          city,
          street,
          number,
          zipcode
        },
        id: userId as unknown as number ,
        username: '',
        password: '',
        phone: ''
      });
      dispatch(updateUserAction);
      setFirstname('');
      setLastname('');
      setEmail('');
      setIsValid(false);
    }
};

  return (
    <div>
      <h1>Atualizar usuário</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={firstname} onChange={handleFirstnameChange} />
        </label>
        <br />
        <label>
          Sobrenome:
          <input type="text" value={lastname} onChange={handleLastnameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>Cidade:</label><input type="text" value={city} onChange={(e) => setCity(e.target.value)} /><br />
        <label>Rua:</label><input type="text" value={street} onChange={(e) => setStreet(e.target.value)} /><br />
        <label>Número:</label><input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} /><br />
        <label>CEP:</label><input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} /><br />
        <label>Latitude:</label><input type="text" value={lat} onChange={(e) => setLat(e.target.value)} /><br />
        <label>Longitude:</label><input type="text" value={long} onChange={(e) => setLong(e.target.value)} /><br />

        <button onClick={() => {
          if (firstname.trim() !== '' && lastname.trim() !== '' && email.includes('@')) {
            setIsValid(true)
          }
        }}>Atualizar</button>

      </form>

      {!isValid && <p>Preencha corretamente os campos de nome e e-mail.</p>}
    </div>
  )
}

export default Update;