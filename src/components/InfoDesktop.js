function InfoDesktop(props) {
  return (
    <div className={props.classname}>
      <h2>{props.name}</h2>
      <h3>{props.role}</h3>
      <h3>{props.email}</h3>
    </div>
  );
}

export default InfoDesktop;
