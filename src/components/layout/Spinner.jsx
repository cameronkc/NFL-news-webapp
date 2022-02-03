import spinner from "./assets/giphy.gif";
function Spinner() {
  return (
    <div className="w-100 mt-15">
      <img
        src={spinner}
        className="text-center mx-auto h-20 w-20"
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
