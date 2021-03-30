<script lang="ts">
	import { each } from "svelte/internal";
	import placesToEat from './Resources/placesToEat';
	import {randomPrettyColor, getClosestCell} from './Utils';

	const cells = placesToEat.map(( place ) => { 
		return  {style : randomPrettyColor() , content : place}
	});

	const FRICTION = 0.03;
	
	let speed = 6 + Math.random() * 9;
	let currentAngle = speed;
	let animationFinished = '';
	
	
	const resetSpeed = () => {
		currentAngle += speed;
		speed -= FRICTION;
		
		if(speed < 0) {
			animationFinished = 'transition : 1s';
			currentAngle = getClosestCell(currentAngle, cells.length);
			clearInterval(timer);
		}
	}
	
	let timer = setInterval(resetSpeed, 10);

	const cellDegree = 360/cells.length;
	const cellSpacings = Math.round( ( 250 / 2 ) /  Math.tan( Math.PI / cells.length ) );
</script>


<style>
	.container {
		padding: 15px;
	}

	.wrapper {
		margin: auto;
		position: relative;
		width: 250px;
		height: 140px;
		perspective: 1000px;

	}

	.carousel {
		width: 100%;
		height: 100%;
		position: absolute;
		transform-style: preserve-3d;
	}

	.cell {
		position: absolute;
		width: 220px;
		height: 120px;
		left: 10px;
		top: 10px;

		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 36px;
	}
</style>

<div class='container'>
	<div class='wrapper'>
		<div class="carousel" style={`transform: translateZ(-${cellSpacings}px) rotateY(${currentAngle}deg); ${animationFinished}`}>
			{#each cells as cell , i}
				<div class='cell' style={`transform: rotateY(${i * cellDegree}deg) translateZ(${cellSpacings}px); ${cell.style}`}>
					{cell.content}
				</div>	
			{/each}
		</div>
	</div>
</div>