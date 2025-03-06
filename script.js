//your JS code here. If required.
document.addEventListener("DOMContentLoaded",async()=>{
let btn=document.querySelector("#btn")
	
	function delay(ms,value){
		return new Promise((resolve)=>{
			setTimeout(()=>{
				resolve (value)
			},ms)
		})
	}
	btn.addEventListener("click", async()=>{
		let input=document.querySelector("#ip").value
		input=parseFloat(input)
		let output=document.getElementById("output")
		await delay(2000)
		output.innerText="Result:"+ input
		let num=input*2
		await delay(2000)
		output.innerText="Result:"+ num
		let subtract=num-3
		await delay(1000)
		output.innerText="Result:"+ subtract
		
		let divide=subtract/2
		await delay(1000)
		output.innerText="Result:"+ devide

	let finalRes=devide+10
		await delay(1000)
		output.innerText="Final Result:"+ finalRes
		
	})
})
