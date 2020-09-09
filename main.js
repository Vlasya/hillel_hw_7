// We have an array of arrays. Each array represents a pet. The pets have a name, an age, and a type.
// let pets = [
//   ['Butters', 3, 'dog'],
//   ['Lizzy', 6, 'dog'],
//   ['Red', 1, 'cat'],
//   ['Joey', 3, 'dog'],
// ];
// Task:
// Select only the dogs
// Translate their ages into dog years (multiply them by seven)
// Sum the results


let pets = [
	
	['Butters', 3, 'dog'],
	['Lizzy', 6, 'dog'],
	['Red', 1, 'cat'],
	['Joey', 3, 'dog'],
 ];
// Select only the dogs
let myPets= pets.filter(item=>item[2]==='dog')
// Translate their ages into dog years (multiply them by seven)
 						.map(el =>{
							el[1]=el[1]*7
							return el
						 }) 
//  Sum the results
						.reduce((summ,item) =>{
							summ+=item[1]
							return summ
						},0)


 console.log('Сумма псиных годиков : ', myPets);