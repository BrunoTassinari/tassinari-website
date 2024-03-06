interface GridProps {
  children: any;
}

interface GridItemProps {
  item: any;
  onClick: () => void;
}

export const GridContainer = ({ children }: GridProps) => {
  return (
    <div className="grid grid-cols-1 gap-y-12 gap-x-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-12">
      {children}
    </div>
  );
};

export const GridItem = ({ item, onClick }: GridItemProps) => {
  return (
    <div className="group cursor-pointer">
      <button
        type="button"
        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-color-bg xl:aspect-h-8 xl:aspect-w-7"
        aria-label="Click project to see more details"
        onClick={onClick}
      >
        <img
          src={`/${item.image}.png`}
          alt={item.alt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </button>
      <h3 className="mt-2 text-sm lg:text-base text-color-text">
        {item.subtitle}
      </h3>
      <p className="mt-1 text-lg lg:text-xl font-medium text-color-primary ">
        {item.title}
      </p>
      <div className="border-b-2 border-color-primary w-full mt-2" />
    </div>
  );
};
