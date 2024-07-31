// Some data to make the trick
const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];
  
  const list = (req, res) => {
    res.json(categories);
  };
  
  const find = (req, res) => {
    const category = categories.find(cat => cat.id === parseInt(req.params.id, 10));
    if (category) {
      res.json(category);
    } else {
      res.status(404).send("Category not found");
    }
  };
  
 
  module.exports = { list, find };