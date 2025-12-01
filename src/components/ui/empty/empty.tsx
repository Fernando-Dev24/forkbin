export const Empty = () => {
  return (
    <>
      <figure className="w-full py-10 flex flex-col justify-center items-center">
        <img
          src="/no-data.svg"
          alt="No data illustration"
          width={300}
          height={300}
        />
        <figcaption className="my-3 text-muted-foreground">
          Ups, it seems you do not have data to show
        </figcaption>
      </figure>
    </>
  );
};
