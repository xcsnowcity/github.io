export default function Card(props) {
  return (
    <div className="wrapper w-full lg:w-1/2 h-fit mb-10 px-2 lg:px-5 ">
      
      <div >
      <img src={props.img} alt="" loading="eager" className="w-full h-full object-cover rounded-full" />
      </div>
      <a href={props.href} className="tex">
      <h2 className="text-center mt-1 text-xl font-semibold font-serif">{props.name}</h2>
      </a>
    </div>
  );
}
