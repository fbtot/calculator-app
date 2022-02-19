function nextElement(target, arr) {
  const indexOfTarget = arr.indexOf(target);

  if (indexOfTarget > -1) {
    const nextIndex = indexOfTarget + 1;
    return arr[nextIndex] ? arr[nextIndex] : arr[0];
  }
  return '';
}

export { nextElement };
