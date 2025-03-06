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
		await delay(2000, input)
		output.innerText="Result:"+ input
		let num=input*2
		await delay(2000, num)
		output.innerText="Result:"+ num
		let subtract=num-3
		await delay(1000, subtract)
		output.innerText="Result:"+ subtract
		
		let divide=subtract/2
		await delay(1000,divide)
		output.innerText="Result:"+ divide

	let finalRes=divide+ 10
		await delay(1000,finalRes)
		output.innerText="Final Result:"+ finalRes
		
	})
})
