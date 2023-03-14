export const Joke = (props) => {
  console.log(props);
  return (
    <h1>{props.set} {props.punch}</h1>
  )
}