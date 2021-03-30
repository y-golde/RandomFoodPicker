const randomPrettyColor = () => {
    const r = 50 + Math.random()*150;
    const g = 50 + Math.random()*150;
    const b = 50 + Math.random()*150;

    const brightness = Math.round(((r * 299) + (g * 587) + (b * 114)) / 1000);
    const textColor = brightness > 125 ? 'black' : 'white';
    
    return `background-color: rgb(${r},${g},${b}); color : ${textColor}`;
}

export default randomPrettyColor;