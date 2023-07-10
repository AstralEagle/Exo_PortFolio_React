import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';
import ProjectItem from '../components/ProjectItem';

//Image
import GroupomaniaImg from '../assets/Groupomania.png';
import LyricImg from '../assets/lyrics_run2.png';
import MorpionImg from '../assets/morpion.png';

const projects = [
  {
    name: 'Reservia',
    desc: "Mise en place d'un site web de vitrine pour une agence de voyage. Prise en chage du responsive.",
    techno: ['html', 'css'],
  },
  {
    name: 'Groupomania',
    desc: "Mise ne place d'une API Rest et d'un front end en React. L'objectif était de créer un réseaux social d'entreprise. Les utilisateur pouvais envoyer des posts, les likers et commenter ainsi que de créer des salon avec un lien a partagée pour inviter ses amis dans le chanel afin de s'envoyer des message. Je devais aussi développer un système d'administration.",
    techno: ['html', 'css', 'javascript'],
    img: GroupomaniaImg,
  },
  {
    name: "Lyric's Run",
    desc: "Mise en place d'une application android. Possibilité de créer un lyric et écrire dedans. Puis on peut lancer une démo pour faire défiler le texte écrit automatiquement et metre de la musique ou de lancer une video youtube sur la meme page de l'application.",
    techno: ['Java'],
    img: LyricImg,
  },
  {
    name: 'Morpion',
    desc: "Projet en Javascrip. Mise en place d'une API Rest et WebSocket. Possibilité de créer une partie de Morpion et de jouer avec ses amis. Tableau des scores pour se comparer au autres joueurs.",
    techno: ['html', 'css', 'javascript'],
    img: MorpionImg,
  },
];

const Project = () => {
  return (
    <DefaultTemplate>
      <h1>Projet</h1>
      <div>
        {projects.map((x, i) => (
          <ProjectItem item={x} key={i} />
        ))}
      </div>
    </DefaultTemplate>
  );
};

export default Project;
