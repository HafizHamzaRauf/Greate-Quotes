export function sort(arrayOfObjects, order = "asc") {
  const sortedArrayOfObjects = [...arrayOfObjects];

  sortedArrayOfObjects.sort((a, b) => {
    const textA = a.text.toLowerCase();
    const textB = b.text.toLowerCase();

    let comparison = 0;

    if (textA < textB) {
      comparison = -1;
    } else if (textA > textB) {
      comparison = 1;
    }

    if (order === "desc") {
      comparison *= -1;
    }

    return comparison;
  });

  return sortedArrayOfObjects;
}
