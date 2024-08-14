let users = [];

exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
};
