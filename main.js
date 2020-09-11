// Count the frequency of each character in the string 'helloworld'


let string='helloworld'
let string2=string.split('')

newArr=[];
string2.map(item=>{
	!newArr[item]?newArr[item]=1:newArr[item]+=1;
	return newArr
})

console.log(newArr);