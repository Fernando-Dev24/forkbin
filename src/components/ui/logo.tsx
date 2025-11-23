interface Props {
  className?: string;
}

export const Logo = ({ className = "w-[100px] md:w-[150px]" }: Props) => {
  return (
    <figure className={`inlin-block ${className}`}>
      <img src="/logo-light.svg" alt="forkbin logo" />
    </figure>
  );
};
