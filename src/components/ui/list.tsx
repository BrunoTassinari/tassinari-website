import { Icon } from './icon';

interface ListProps {
  items: any[];
  type?: 'column' | 'row';
  highlight?: boolean;
  action?: () => void;
}

interface LinkedListProps {
  items: any[];
  type?: 'column' | 'row';
  action?: () => void;
  linkStyle?: string;
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

export const LinkedList = ({
  items,
  type,
  action,
  linkStyle,
}: LinkedListProps) => (
  <ul className={type === 'row' ? 'flex gap-4 justify-between' : ''}>
    {items?.map((item) => (
      <li key={item.id} className={type !== 'row' ? 'my-2' : ''}>
        <section className="flex items-center gap-2">
          {item.icon ? <Icon icon={item.icon} size={24} /> : null}
          <a
            href={`#${item.id}`}
            {...(action ? { onClick: action } : {})}
            className={`m-0 text-base ${linkStyle}`}
          >
            {item.value}
          </a>
        </section>
      </li>
    ))}
  </ul>
);
