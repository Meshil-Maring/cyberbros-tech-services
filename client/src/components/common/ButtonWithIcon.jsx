
function ButtonWithIcon({title,icon, btn}) {

  return (
    <div>
      <button className={btn}>{title}
      <span>{icon}</span>
      </button>
      
    </div>
  )
}

export default ButtonWithIcon
