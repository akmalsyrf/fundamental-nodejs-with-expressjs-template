let todos = [
  {
    id: 1,
    title: "Cuci tangan",
    isDone: true,
  },
  {
    id: 2,
    title: "Jaga jarak",
    isDone: false,
  },
  {
    id: 3,
    title: "Gunakan masker",
    idDone: true,
  },
];

// Create controller get Todos here
exports.getTodos = async (req, res) => {
  try {
    res.send({
      status: "success",
      data: { todos },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

// Create controller get Todo by received id here
exports.getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = todos.find((item) => item.id == id);
    res.send({
      status: "success",
      data: { todo },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

// Create controller add Todo here
exports.addTodo = async (req, res) => {
  try {
    todos.push(req.body);
    res.send({
      status: "success",
      data: req.body,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

// Create controller update Todo here
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = todos.map((item) => {
      if (item.id == id) {
        return req.body;
      }
      return item;
    });
    res.send({
      status: "success",
      data: { ...req.body },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

// Create controller delete Todo here
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    todos = todos.filter((item) => item.id != id);
    res.send({
      status: "success",
      data: { todos },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};
