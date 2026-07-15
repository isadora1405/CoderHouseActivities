let toys = [];

exports.getAllToys = (req, res) => {
  res.status(200).json(toys);
};

exports.createToy = (req, res) => {
  const newToy = req.body;
  toys.push(newToy);
  res.status(201).json(newToy);
};
