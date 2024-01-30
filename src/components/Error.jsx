import { useSelector } from 'react-redux';

import { selectError } from '../redux/contacts/selectors';

export const Error = () => {
  const error = useSelector(selectError);
  return (
    <div className="h-lvh w-screen bg-center bg-cover bg-no-repeat fixed items-center flex justify-center top-0 left-0 bg-[url('https://st2.depositphotos.com/30163966/43944/i/600/depositphotos_439441096-stock-photo-a-vintage-dial-telephone-handset.jpg')] bg-lime-600">
      <h1 className="text-3xl font-bold items-center flex justify-center text-yellow-300">
        Oops... Sorry, something went wrong. {error}.
      </h1>
    </div>
  );
};
