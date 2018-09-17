let data = [
    {name: "Raphel", gender: "male"},
    {name: "Tom", gender: "male"},
    {name: "Jerry", gender: "male"},
    {name: "Dorry", gender: "female"},
    {name: "Suzie", gender: "female"},
    {name: "Dianna", gender: "female"},
    {name: "Prem", gender: "male"},
  ];
  let genderwise = data.reduce((acc,item, index) => {
    acc[item.gender].push(item);
    return acc;    
  }, {male: [], female:[]});
  console.log(genderwise);