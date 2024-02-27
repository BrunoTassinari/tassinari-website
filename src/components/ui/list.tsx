import { Icon } from './icon';

interface ListProps {
  items: any[];
  type?: 'column' | 'row';
  highlight?: boolean;
}

export const List = ({ items, type, highlight }: ListProps) => (
  <ul className={type === 'row' ? 'flex gap-4' : ''}>
    {items?.map((item) => (
      <li key={item.id} className="my-1">
        <section className="my-1 flex items-center gap-2">
          {item.icon ? <Icon icon={item.icon} size={24} /> : null}
          <span
            className={`m-0 text-[0.8rem] ${highlight ? 'text-color-primary' : 'text-color-text'}`}
          >
            {item.value}
          </span>
        </section>
      </li>
    ))}
  </ul>
);
