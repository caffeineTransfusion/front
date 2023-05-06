interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = (props: Props) => {
  return <div>{props.children}</div>;
};
export default DefaultLayout;
