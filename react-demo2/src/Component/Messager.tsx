interface Props {
  message: string;
}

function Messager({ message }: Props) {
  return (
    <>
      <p>{message}</p>
    </>
  );
}

export default Messager;
