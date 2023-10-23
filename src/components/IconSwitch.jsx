export const IconSwitch = (selected) => {

  return (
    <button onClick = {selected.onSwitch}>
      <i className="material-icons">{selected.icon}</i>
    </button>
  )
}
