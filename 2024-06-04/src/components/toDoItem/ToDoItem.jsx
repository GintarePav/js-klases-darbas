const ToDoItem = (props) => {
  return (
    <ul>
      <li>
        <strong>{props.name}</strong>
      </li>
      <ul>
        <li>{props.description}</li>
        <li>{props.priority}</li>
      </ul>
    </ul>
  );
};

export default ToDoItem;
