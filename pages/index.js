import { useState } from 'react';

export default function HomePage() {
  const names = ['Mario', 'Luigi', 'Princess Peach', 'Mushroom'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
  }

  const mario ='https://mario.wiki.gallery/images/3/3e/MPSS_Mario.png'

  return (
    <div>
      <Header title="Super Mario Bros 🍄" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
      <img src={mario} alt="Mario" />
    </div>
  );
}