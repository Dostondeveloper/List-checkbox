const Card = ({ id, jumanazar, pri, checkItem, isDone}) => {
  const style = () => {
    if (pri === "low") return "green";
    else if (pri === "normal") return "orange";
    else if (pri === "high") return "red";
  };

  return (
    <div style={{backgroundColor: style(), filter: isDone && "grayscale(100%) "}} className="w-full bg-white shadow-lg rounded-lg p-3 flex items-center justify-between">
        <p className="text-[18px]" style={{textDecoration: isDone && "line-through" }}>{jumanazar}</p>
        <input type="checkbox" onChange={() => checkItem(id)} />
    </div>
  )
}

export default Card