interface Props {
  heading: string;
}

function Header({ heading }: Props) {
  return (
    <>
      <h1>{heading}</h1>
    </>
  );
}

export default Header;
