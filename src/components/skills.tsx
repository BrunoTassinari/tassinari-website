import { List } from './list';
import { skills } from '../constants';

export const Skills = () => (
  <section className="flex justify-around">
    <List items={skills.frontend} />
    <List items={skills.backend} />
  </section>
);
