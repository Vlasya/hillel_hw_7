// Дано:
// Массив видов спорта sports, который состоит из [Иконка вида спорта, Название вида спорта];
// Массив стран победителей на Олимпийских играх в каждом виде спорта winners, который состоит из [Название вида спорта, Завоеванная медаль, Страна];
// Массив колец с Олимпийской эмблемы olympic, который состоит из [Иконка олимпийского кольца];
// Массив медалей medals, который состоит из [Иконка медали, Название медали];
// Массив стран и континентов continents, который состоит из [Название страны, Название контента];
const sports = [
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

const winners = [
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

const olympic = ['1F535','26AB','1F534','1F7E1','1F7E2'];

const medals = [
	['1F947','gold'],
	['1F948','silver'],
	['1F949','bronze'],
];

const continents = [
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
// Необходимо вывести таблицу победителей Олимпийских игр в соответствии с видом спорта и континентом команды. Пример таблицы в прикрепленном рисунке.

// Метод для преобразования unicode вида спорта в соответствующую иконку – String.fromCodePoint(parseInt(val, 16)); где val – unicode вида спорта.

// Метод для преобразования аббревиатуры страны в соответствующую иконку флага – 'ca'.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397)); где 'ca' – аббревиатура страны (Canada).
// Синее кольцо — это Европа. Красное — Америка. Жёлтое — Азия. Чёрное — Африка. Зелёное, естественно, Австралия
// Преобразование видов спорта
let sportIcon=sports.map(item =>{
	return item[0]=String.fromCodePoint(parseInt(item, 16))});
console.log('sportIcon',sportIcon);

// Преобразование континентов
let olympicIcon=olympic.map(item =>{
	return item[0]=String.fromCodePoint(parseInt(item, 16))});
	console.log('olympicIcon: ', olympicIcon);

	// Преобразование медалек
let medalIcon=medals.map(item =>{
	return item[0]=String.fromCodePoint(parseInt(item, 16))});
	console.log('medalIcon: ', medalIcon);

	// Преобразование иконок( чего-то они не работают,выводит текстом ,перепробовала разные варианты из инета,ни один не захотел :( ) ,названий континентов
let continentsIcon =continents.map(item =>{
	return item[0]=item[0].toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397) );
});
console.log('continentsIcon: ', continentsIcon);

// Выводим название(иконки) континентов в таблицу 
olympicIconWrite='';										
olympicIcon.forEach(function(el) {
	olympicIconWrite+=`<td>${el}</td>`
});




// Выводим все

document.write(
	`<table class="table">
	<thead>
	<tr><td></td>${olympicIconWrite}</tr>
	</thead>
	<tbody>
	<tr>
	<td>${sportIcon[0]}</td>
	<td>
		<table class="int">
			<tr>
				<td class="gold">${medalIcon[0]}-${continentsIcon[0]}</td>
			</tr>
			<tr>
				<td class="silver">${medalIcon[1]}-${continentsIcon[1]}</td>
			</tr>
		</table>
	</td>
	<td></td>
	<td>
		<table class="int">
					<tr>
						<td></td>
					</tr>
					<tr>
					<td class="bronze"> ${medalIcon[2]}-${continentsIcon[2]}</td>
					</tr>
					<tr>
					<td></td>
					</tr>
		</table>
	</td>
	<td></td>
	<td></td>
	</tr>
	<tr>
	<td>${sportIcon[1]}</td>
	<td>
		<table class="int">
					<tr>
						<td></td>
					</tr>
					<tr>
					<td class="silver">${medalIcon[1]}-${continentsIcon[4]}</td>
					</tr>
					<tr>
					<td></td>
					</tr>
		</table>
	</td>
	<td></td>
	<td>
		<table class="int">
				<tr >
					<td  class="gold">${medalIcon[0]}-${continentsIcon[3]}</td>
				</tr>
				<tr>
					<td class="silver">${medalIcon[2]}-${continentsIcon[2]}</td>
				</tr>
		</table>
	</td>
	<td></td>
	<td></td>
	</tr>
	<tr>
	<td>${sportIcon[2]}</td>
	<td>
		<table class="int">
					<tr >
						<td  class="gold">${medalIcon[0]}-${continentsIcon[5]}</td>
					</tr>
					<tr>
						<td class="silver">${medalIcon[1]}-${continentsIcon[4]}</td>
					</tr>
					<tr>
						<td class="bronze">${medalIcon[2]}-${continentsIcon[0]}</td>
					</tr>
		</table>
	</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	</tr>
	<tr>
	<td>${sportIcon[3]}</td>
	<td></td>
	<td></td>
	<td  class="gold">${medalIcon[0]}-${continentsIcon[2]}</td>
	<td class="silver">${medalIcon[1]}-${continentsIcon[6]}</td>
	<td class="bronze">${medalIcon[2]}-${continentsIcon[7]}</td>
	</tr>
	<tr>
	<td>${sportIcon[4]}</td>
	<td>
		<table class="int">
					<tr >
						<td  class="gold">${medalIcon[0]}-${continentsIcon[8]}</td>
					</tr>
					<tr>
						<td class="silver">${medalIcon[1]}-${continentsIcon[9]}</td>
					</tr>
		</table>
	</td>
	<td></td>
	<td>
		<table class="int">
					<tr >
						<td></td>
					</tr>
					<tr>
					<td class="bronze">${medalIcon[2]}-${continentsIcon[2]}</td>
					</tr>
					<tr>
						<td></td>
					</tr>
		</table>
	</td>
	<td></td>
	<td></td>
	</tr>
	<tr>
	<td>${sportIcon[5]}</td>
	<td>
		<table class="int">
						<tr >
							<td  class="silver">${medalIcon[1]}-${continentsIcon[8]}</td>
						</tr>
						<tr>
							<td class="bronze">${medalIcon[2]}-${continentsIcon[10]}</td>
						</tr>
		</table>
	</td>
	<td></td>
	<td>
		<table class="int">
					<tr >
						<td></td>
					</tr>
					<tr>
					<td class="gold">${medalIcon[0]}-${continentsIcon[2]}</td>
					</tr>
					<tr>
						<td></td>
					</tr>
		</table>
	</td>
	<td></td>
	<td></td>
	</tr>
	<tr>
	<td>${sportIcon[6]}</td>
	<td class="silver">${medalIcon[1]}-${continentsIcon[8]}</td>
	<td></td>
	<td class="gold">${medalIcon[0]}-${continentsIcon[2]}</td>
	<td></td>
	<td class="bronze">${medalIcon[2]}-${continentsIcon[7]}</td>
	</tr>
	<tr>
	<td>${sportIcon[7]}</td>
	<td>
		<table class="int">
					<tr >
						<td  class="gold">${medalIcon[0]}-${continentsIcon[4]}</td>
					</tr>
					<tr>
						<td class="silver">${medalIcon[1]}-${continentsIcon[4]}</td>
					</tr>
					<tr>
						<td class="bronze">${medalIcon[2]}-${continentsIcon[11]}</td>
					</tr>
		</table>
	</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	</tr>
	<tr>
	<td>${sportIcon[8]}</td>
	<td>
		<table class="int">
					<tr >
						<td  class="gold">${medalIcon[0]}-${continentsIcon[12]}</td>
					</tr>
					<tr>
						<td class="silver">${medalIcon[1]}-${continentsIcon[0]}</td>
					</tr>
					<tr>
						<td class="bronze">${medalIcon[2]}-${continentsIcon[13]}</td>
					</tr>
		</table>
	</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	</tr>
	</tbody>
	</table>`)


