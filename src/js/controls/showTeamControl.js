import memberA from '../../footerTeam.json';
import { renderTeam } from '../render';

export function showTeam() {
  const aaaJSON = JSON.stringify(team);
  console.log('team', team);
  console.log('json', aaaJSON);
  const member = JSON.parse(aaaJSON);
  console.log(member);
  renderTeam(member);
}
const team = [
  {
    photo_face: require('../../images/movie_time_22.jpg'),
    full_name: 'Anna Lazarenko',
    role: 'Developer/Scram master',
    git_page: 'https://github.com/AniaLaz',
    telegram: 'https://t.me/AniaLaz',
    id: 4,
  },

  {
    photo_face: require('../../images/movie_time_22.jpg'),
    full_name: 'Ganna Kovchyk',
    role: 'Developer/',
    git_page: 'https://github.com/GannaKov',
    telegram: 'https://t.me/Ganna_GannochKa',
    id: 5,
  },
];
