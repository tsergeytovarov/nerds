// Создает обработчик события window.onLoad
YMaps.jQuery(function () {
			
	// Создает экземпляр карты и привязывает его к созданному контейнеру
	var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
            
	// Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
	map.setCenter(new YMaps.GeoPoint(38.96926,45.03956), 17);
			
	// Создает стиль метки
	var s = new YMaps.Style();

	s.iconStyle = new YMaps.IconStyle();
	s.iconStyle.href = "img/placemark.png";
	s.iconStyle.size = new YMaps.Point(231, 190);
	s.iconStyle.offset = new YMaps.Point(-65, -155);
			
	// Создает метку и привязывает к координатам
	var placemark = new YMaps.Placemark(new YMaps.GeoPoint(38.972512,45.039094), {style: s, hideIcon: false});

	// Добавляет метку на карту
	map.addOverlay(placemark); 
});