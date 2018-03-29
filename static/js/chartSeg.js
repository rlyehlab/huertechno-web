
var data = JSON.parse({{data|tojson}});
            //alert(data.HORA);
	    	function createConfig(details, hora) {
	    		return {
	    			type: 'line',
	    			data: {
	    				labels: hora,
	    				datasets: [{
	    					label: details.label,
	    					steppedLine: details.steppedLine,
	    					data: details.data,
	    					borderColor: details.color,
	    					fill: false,
	    				}]
	    			},
	    			options: {
	    				responsive: true,
	    				title: {
	    					display: true,
	    					text: details.label,
	    				}
	    			}
	    		};
	    	}


	    	window.onload = function() {
	    		var container = document.querySelector('.container');
                var hora = data.HORA
	    		var steppedLineSettings = [{
	    			steppedLine: false,
	    			label: 'TEMPERATURA',
	    			color: window.chartColors.red,
                    data:data.TEMP
	    		}, {
	    			steppedLine: true,
	    			label: 'HUMEDAD_REL',
	    			color: window.chartColors.green,
                    data:data.HUM_REL
	    		}, {
	    			steppedLine: 'before',
	    			label: 'LUMINOSIDAD',
	    			color: window.chartColors.green,
                    data:data.LUZ
	    		}, {
	    			steppedLine: 'after',
	    			label: 'HUMEDAD_SUELO',
	    			color: window.chartColors.purple,
                    data:data.HUM_SOIL
	    		}];

	    		steppedLineSettings.forEach(function(details) {
	    			var div = document.createElement('div');
	    			div.classList.add('chart-container');

	    			var canvas = document.createElement('canvas');
	    			div.appendChild(canvas);
	    			container.appendChild(div);

	    			var ctx = canvas.getContext('2d');
	    			var config = createConfig(details, hora);
	    			new Chart(ctx, config);
	    		});
	    	};

