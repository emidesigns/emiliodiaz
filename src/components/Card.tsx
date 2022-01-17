
interface Props {
    children: Object;
  }

const Card = (props: Props) => {
  return <div>{props.children}</div>;
};

export default Card;
