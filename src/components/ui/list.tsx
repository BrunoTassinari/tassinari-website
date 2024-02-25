import { Icon } from './icon';

interface ListProps {
  items: any[];
}

export const List = ({ items }: ListProps) => (
  <ul>
    {items.map((item) => (
      <li key={item.id} className="my-1">
        <section className="my-1 flex items-center gap-3">
          {item.icon ? <Icon icon={item.icon} size={24} /> : null}
          <span className="m-0 text-[0.8rem] text-color-text">
            {item.title}
          </span>
        </section>
      </li>
    ))}
  </ul>
);
