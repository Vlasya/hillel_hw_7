// Objects Practice

let sports = [
	['1F93A','fencing'],
	['26F8','figure skating'],
	['26F7','skier'],
	['1F3C2','snowboarder'],
	['1F3CC','golfing'],
	['1F6A3','rowing boat'],
	['1F3CA','swimming'],
	['1F938','gymnastics'],
	['1F93E','handball']
];

let winners = [
	['fencing','gold','fr'],
	['fencing','silver','it'],
	['fencing','bronze','us'],

	['figure skating','gold','ca'],
	['figure skating','silver','ru'],
	['figure skating','bronze','us'],

	['skier','gold','no'],
	['skier','silver','ru'],
	['skier','bronze','fr'],

	['snowboarder','gold','us'],
	['snowboarder','silver','jp'],
	['snowboarder','bronze','au'],

	['golfing','gold','gb'],
	['golfing','silver','se'],
	['golfing','bronze','us'],

	['rowing boat','gold','us'],
	['rowing boat','silver','gb'],
	['rowing boat','bronze','ro'],

	['swimming','gold','us'],
	['swimming','silver','gb'],
	['swimming','bronze','au'],

	['gymnastics','gold','ru'],
	['gymnastics','silver','ru'],
	['gymnastics','bronze','ua'],

	['handball','gold','dk'],
	['handball','silver','fr'],
	['handball','bronze','de'],
];

let olympic = [
	'1F535',
	'26AB',
	'1F534',
	'1F7E1',
	'1F7E2'
];

let medals = [
	['1F947','gold'],
	['1F948','silver'],
	['1F949','bronze'],
];

let continents = [
	['fr','Europe'],
	['it','Europe'],
	['us','The Americas'],
	['ca','The Americas'],
	['ru','Europe'],
	['no','Europe'],
	['jp','Asia'],
	['au','Oceania'],
	['gb','Europe'],
	['se','Europe'],
	['ro','Europe'],
	['ua','Europe'],
	['dk','Europe'],
	['de','Europe']
];

// String.fromCodePoint(parseInt(val, 16));
// 'ca'.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397));

function getIcon(value){
	return String.fromCodePoint(parseInt(value, 16));
}

function getContinentName(country){
	let getContinent = continents
		.filter(function(continent){
			return continent[0] === country;
		});
	return getContinent[0][1];
}

function renderTableThead(){
	let olympicIcons = olympic
		.map(function(olympicItem){
			return `<th>${getIcon(olympicItem)}</th>`;
		})
		.join('');

	return `<thead><th></th>${olympicIcons}</thead>`;
}

function renderTableTbody(){
	let trs = sports
		.map(function(sport){

			let td_Europe=td_Africa=td_Americas=td_Asia=td_Oceania=``;

			let sportWinner = winners
				.filter(function(winner){
					return winner[0] === sport[1]
				})
				.map(function(winner){
					let continentName = getContinentName(winner[2]);					
					switch(continentName){
						case 'Europe':
							td_Europe += renderWinner(winner);
							break;
						case 'Africa':
							td_Africa += renderWinner(winner);
							break;
						case 'The Americas':
							td_Americas += renderWinner(winner);
							break;
						case 'Asia':
							td_Asia += renderWinner(winner);
							break;
						case 'Oceania':
							td_Oceania += renderWinner(winner);
							break;
					}
					return renderWinner(winner);
				});

			return `
			<tr>
				<td>${getIcon(sport[0])}</td>
				<td data-name="Europe">${td_Europe}</td>
				<td data-name="Africa">${td_Africa}</td>
				<td data-name="The Americas">${td_Americas}</td>
				<td data-name="Asia">${td_Asia}</td>
				<td data-name="Oceania">${td_Oceania}</td>
			</tr>`;
		})
		.join('');
	return `<tbody>${trs}</tbody>`;
}

function renderWinner(winner){
	let medalView = medals
		.filter(function(medal){
			return medal[1] === winner[1];
		})
		.map(function(medal){
			return getIcon(medal[0])
		})
		.toString();
	let flagView = winner[2].toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397));
	return `<div class="${winner[1]}">${medalView} – ${flagView}</div>`;
}

function renderTable(){
	let table = `
	<table class="table">
		${renderTableThead()}
		${renderTableTbody()}
	</table>`;

	return table;
}

document.write(renderTable());




