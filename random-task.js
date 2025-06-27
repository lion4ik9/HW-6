export function cycle(array, list) {
    const cycleList = array.map(el => `<li>${el}</li>`).join('')
    list.innerHTML = cycleList;
}
