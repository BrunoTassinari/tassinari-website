interface GridProps {
  children: any;
}

interface GridItemProps {
  item: any;
}

export const GridContainer = ({ children }: GridProps) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {children}
    </div>
  );
};

export const GridItem = ({ item }: GridItemProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-color-bg xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={`assets/${item.image}.png`}
          alt={item.alt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-2 text-sm text-color-text">{item.subtitle}</h3>
      <p className="mt-1 text-lg font-medium text-color-primary ">
        {item.title}
      </p>
      <div className="border-b-2 border-color-primary w-full mt-2" />
    </div>
  );
};
