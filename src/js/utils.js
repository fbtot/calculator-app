function nextElement(target, arr) {
  const indexOfTarget = arr.indexOf(target);

  if (indexOfTarget > -1) {
    const nextIndex = indexOfTarget + 1;
    return arr[nextIndex] ? arr[nextIndex] : arr[0];
  }
  return '';
}

function selectRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
}

export { nextElement, selectRandomElement };
