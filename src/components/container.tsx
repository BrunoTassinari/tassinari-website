interface ContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

interface HeaderContainerProps {
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

export const HeaderContainer = ({ title, subtitle }: HeaderContainerProps) => (
  <section className="flex flex-col ">
    <span className="text-[0.8rem] text-color-primary uppercase">
      {subtitle}
    </span>
    <span className="text-[1.5rem] font-bold uppercase text-color-text">
      {title}
    </span>
  </section>
);
