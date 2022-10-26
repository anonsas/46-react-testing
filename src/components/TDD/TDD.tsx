type TDDprops = {
  name?: string;
};

function TDD({ name }: TDDprops) {
  return <div>Hello {name}</div>;
}

export default TDD;
