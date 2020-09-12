// Покупатель выбирает товары и добавляет их в корзину.
// let selected = [
//  ['product_1', 20],
//  ['product_2', 45],
//  ['product_3', 67],
//  ['product_4', 75],
// ];
// Необходимо вычислить общую стоимость товаров и выставить покупателю счёт. Магазин у вас интернациональный и каждый клиент получает перечень выбранных товаров со всеми доступными типами валют. В первоначальном виде массива цена представлена в гривнах. На выходе необходимо предоставить пользователю таблицу с преобразованного массива вида:
// let totalPrice = [
//  ['product_1', ['rubles',1437], ['dollars', 20.06], ['euros', 18.18], ['yens', 2266.20], ['pounds', 14.15]],
//  ...
// ];
// Курс валют:
// let rubles = 2.73 ;
// let dollars = 0.036 ;
// let euros = 0.030 ;
// let yens = 3.80 ;
// let pounds = 0.028 ;

// let currency =[[rubles,2.73],[dollars,0.036],[euros,0.030],[yens,3.80],[pounds,0.028]];

let selected = [
	['product_1', 20],
	['product_2', 45],
	['product_3', 67],
	['product_4', 75],
  ];
  
//   Конвертируем и округляем валюту
  function converter(arr){
	let conv=[];
	conv =arr.map(function(el){
		el[1]=['UAH',el[1]]
		el[2]=['rubles',Math.ceil((el[1][1]*2.73)*100)/100];
		el[3]=['dollars',Math.ceil((el[1][1]*0.036)*100)/100];
		el[4]=['euros',Math.ceil((el[1][1]*0.030)*100)/100];
		el[5]=['yens',Math.ceil((el[1][1]*3.80)*100)/100];
		el[6]=['pounds',Math.ceil((el[1][1]*0.028)*100)/100];
		return el
	})
	return conv
  }

let myArr=converter(selected)
console.log(myArr);
// Высчитываем сумму всех покупок в гривне
		let total=myArr.reduce(function(summ,item){
			summ=summ+item[1][1]
		  return summ
		 },0)
	
	 
console.log('total',total);

// Выводим в виде таблицы
  document.write(`<table class='table'>
  <tr>
  <td>${myArr[0][0]}</td>
  <td>${myArr[0][1]}</td>
  <td>${myArr[0][2]}</td>
  <td>${myArr[0][3]}</td>
  <td>${myArr[0][4]}</td>
  <td>${myArr[0][5]}</td>
  <td>${myArr[0][6]}</td>
  </tr>
  <tr>
  <td>${myArr[1][0]}</td>
  <td>${myArr[1][1]}</td>
  <td>${myArr[1][2]}</td>
  <td>${myArr[1][3]}</td>
  <td>${myArr[1][4]}</td>
  <td>${myArr[1][5]}</td>
  <td>${myArr[1][6]}</td>
  </tr>
  <tr>
  <td>${myArr[2][0]}</td>
  <td>${myArr[2][1]}</td>
  <td>${myArr[2][2]}</td>
  <td>${myArr[2][3]}</td>
  <td>${myArr[2][4]}</td>
  <td>${myArr[2][5]}</td>
  <td>${myArr[2][6]}</td>
  </tr>
  <tr>
  <td>${myArr[3][0]}</td>
  <td>${myArr[3][1]}</td>
  <td>${myArr[3][2]}</td>
  <td>${myArr[3][3]}</td>
  <td>${myArr[3][4]}</td>
  <td>${myArr[3][5]}</td>
  <td>${myArr[3][6]}</td>
  </tr>
  <tfoot class='footer'><td>Total: </td><td>UAH${total} </td></tfoot>
 
  </table>`)
