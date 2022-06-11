export default function Card(props) {
  return (
    <div className="wrapper lg:w-1/3 h-fit mt-10 mx-2 lg:mx-5 ">

      <div >
      <img src={props.img} alt="" loading="lazy" className="w-full h-full object-cover rounded-full" />
      </div>
      <h2 className="text-center mt-1 text-xl font-semibold font-serif">{props.name}</h2>
    </div>
  );
}
