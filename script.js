const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices= document.querySelectorAll('.price');
	let total=0;

	prices.forEach(price =>{
		total+=parseFloat(price.textContent)||0;
	});

	let totalVal=document.createElement('tr');
	totalVal.innerHTML=`<td>Total Value</td>
						<td id="ans">${total.toFixed(2)}</td>`;

	const table=document.querySelector('table');
	table.appendChild(totalVal);

	getSumBtn.disabled=true;
  
};

getSumBtn.addEventListener("click", getSum);

