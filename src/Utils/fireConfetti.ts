import confetti from 'canvas-confetti';

const fireConfetti = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.4 }
    });
    confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.35},
    });
    confetti({
        particleCount: 50,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.35 },
    });
}

export default fireConfetti;