const amountCategoriesRef = document.querySelectorAll('#categories .item');
console.log(`Number of categories: `, amountCategoriesRef.length);

amountCategoriesRef.forEach(ref => {
  const textTitle = ref.firstElementChild.textContent;
  const amountElements = ref.lastElementChild.children.length;
  // 2 variant
  // const amountElements = ref.lastElementChild.childElementCount;

  console.log(`Category: ${textTitle}`);
  console.log(`Elements: `, amountElements);
});
