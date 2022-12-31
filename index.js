list=[]
window.addEventListener('DOMContentLoaded', () => {
	console.log(localStorage.getItem('todolist'));
	var arr = JSON.parse(localStorage.todolist);
	list.concat(arr);
		// console.log(arr);
		for (i=0;i<arr.length;i++){
			ListItem=document.createElement('li');
			console.log(ListItem);
			ListItem.innerHTML=arr[i];
			document.querySelector('ol').append(ListItem);
		}	
	});
document.querySelector("#submit").disabled=true;
document.querySelector("#item").value='';
document.querySelector('#item').onkeyup = ()=>{
	document.querySelector("#submit").disabled=false;
	if (document.querySelector("#item").value.length<=0 || document.querySelector("#item").value=='') {
		document.querySelector("#submit").disabled=true;
	}}
	document.querySelector('#form').onsubmit =()=>{
			let item=document.querySelector("#item").value;	//
			list.push(item);
			localStorage.todolist = JSON.stringify(list);
			var array_after_load = JSON.parse(localStorage.todolist);
			// console.log(array_after_load)
			for (i=0;i<array_after_load.length;i++){
				ListItem=document.createElement('li');
				ListItem.innerHTML=array_after_load[i];
			}			
			document.querySelector('ol').append(ListItem);
			// console.log(item);
			document.querySelector("#item").value='';
			document.querySelector("#submit").disabled=true;
			return false;
		}
		document.querySelector('#sun').onclick=()=>{
			document.querySelector('.container').classList.add('dark');
			document.querySelector('#sun').style.display='none';
			document.querySelector('#moon').style.display='block';
		} 
		document.querySelector('#moon').onclick=()=>{
			document.querySelector('.container').classList.remove('dark');
			document.querySelector('#sun').style.display='block';
			document.querySelector('#moon').style.display='none';
		} 
		document.querySelector('#clear').onclick=()=>{
			localStorage.clear();
			document.querySelector('#ol').innerHTML='';
		}