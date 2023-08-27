const users = [
    {
      id: 1,
      name: "Leanne Graham",
      address: {
        street: "Kulas Light",
        city: "Gwenborough",
      },
      company: {
        name: "Vingroup",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      address: {
        street: "Victor Plains",
        city: "McKenziehaven",
      },
      company: {
        name: "MindX",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      address: {
        street: "Douglas Extension",
        city: "McKenziehaven",
      },
      company: {
        name: "MindX",
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      address: {
        street: "Hoeger Mall",
        city: "South Elvis",
      },
      company: {
        name: "Vingroup",
      },
    },
  ];

  const mindx = []
  users.forEach((item) => {
    if(item.company.name == "MindX"){
        mindx.push(item.name)
    }
  });
  console.log(mindx)

  const vin = []

  users.forEach((item) => {
    if(item.company.name == "Vingroup"){
        vin.push(item.name)
    }
  })
  console.log(vin[1])