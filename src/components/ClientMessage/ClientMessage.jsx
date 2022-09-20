function ClientMessage({ msg, bgColor }) {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    background: bgColor,
  };
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
}

export default ClientMessage;
