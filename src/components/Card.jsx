export default function Card(props) {
  return (
    <div className="wrapper w-full md:w-1/2 h-fit mb-10 px-2 md:px-5 ">
      <a href={props.href} className="tex">
      <div >
      <img src={props.img} alt="" loading="lazy" className="w-full h-full object-cover rounded-full hover:scale-95 transition-transform" />
      </div>
      </a>
      <h2 className="text-center mt-1 text-xl font-semibold font-serif">{props.name}</h2>
      
    </div>
  );
}
