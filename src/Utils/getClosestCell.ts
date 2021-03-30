

const getClosestCell = (angle : number, cellsLength : number) => {
    const multiple = 360/cellsLength;

    return multiple * (Math.round(angle/multiple))
}

export default getClosestCell;