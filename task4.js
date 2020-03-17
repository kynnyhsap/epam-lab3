const arr = [
    { value: 100, type: 'USD' },
    { value: 215, type: 'EUR' },
    { value: 7, type: 'EUR' },
    { value: 99, type: 'USD' },
    { value: 354, type: 'USD' },
    { value: 12, type: 'EUR' },
    { value: 77, type: 'USD' },
];

// 1.
console.log(arr
    .filter(({ type }) => type === 'USD')
    .reduce((prev, curr) => prev + curr.value, 0));

// 2.
console.log(arr
    .filter(({ type }) => type === 'EUR')
    .map(({ value }) => ({ value: value * 2, type: 'EUR' })));
