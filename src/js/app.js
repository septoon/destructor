const outOfArray = item => (
  item.special.map((key) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = key;
    return {
      id, name, description, icon,
    };
  })
);

export default outOfArray;
