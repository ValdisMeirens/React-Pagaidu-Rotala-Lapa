function SocialNetwork(props) {
  return <div>
      <a href={props.url} target={props.target} rel={props.rel} >
        <img src={props.image} alt={props.alt} />  
      </a>
  </div>
}

export default SocialNetwork;
