interface ContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Container = ({ id, className, children }: ContainerProps) => (
  <section
    className={`w-full mt-10 flex flex-col relative gap-[20px] ${className}`}
  >
    <div
      id={id}
      className="absolute pointer-events-none -top-[80px] lg:-top-[12px]"
    />
    {children}
  </section>
);

export const Header = ({ title, subtitle }: HeaderProps) => (
  <section className="flex flex-col gap-2">
    <div className="overflow-hidden">
      <span className="text-[0.8rem] bg-color-primary text-color-text-secondary p-1 px-2 rounded-md uppercase">
        {subtitle}
      </span>
    </div>
    <span className="text-[1.5rem] font-bold uppercase text-color-text">
      {title}
    </span>
  </section>
);
