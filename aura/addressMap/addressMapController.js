({
	jsLoaded: function(component, event, helper) {
		var map = L.map('map', {zoomControl: true})
		.setView([53.9255892, 27.5941272], 13);
		L.tileLayer(
			'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
			{
				attribution: '©2017 Google - Картографические данные © 2017 Google'
			}).addTo(map);
		L.marker([53.9255892, 27.5941272]).bindPopup("I'm here").addTo(map);
		component.set("v.map", map);
	}
})