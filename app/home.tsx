export default function HelloComponent() {
  let i = null;

  if (i === true) {
    i = true;
  } else {
    i = false;
  }
  const stringx = i ? 'algo' : null;
  stringx.toString();
  return (
    <>
      <p>this is testing</p>
    </>
  );
}
