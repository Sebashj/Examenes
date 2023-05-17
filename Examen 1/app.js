const peso = document.querySelector("#peso");
		const altura = document.querySelector("#altura");
		const imc = document.querySelector("#imc");
		const condicion = document.querySelector("#condicion");
		const spinner = document.querySelector("#spinner");

		function update() {
			spinner.innerHTML = '<img src="cd.gif">';
			setTimeout(() => {
				const pesoValue = parseFloat(peso.value);
				const alturaValue = parseFloat(altura.value);
				const imcValue = (pesoValue / (alturaValue * alturaValue)).toFixed(2);
				imc.innerHTML = imcValue;
				if (imcValue < 18.5) {
					condicion.innerHTML = "Bajo peso";
				} else if (imcValue >= 18.5 && imcValue < 25) {
					condicion.innerHTML = "Peso normal";
				} else if (imcValue >= 25 && imcValue < 30) {
					condicion.innerHTML = "Sobrepeso";
				} else {
					condicion.innerHTML = "Obesidad";
				}
				spinner.innerHTML = "";
			}, 950);
		}

		peso.addEventListener("input", update);
		altura.addEventListener("input", update);