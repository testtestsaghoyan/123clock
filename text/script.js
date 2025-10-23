let center = [40.14426703426678, 44.11738750424313];
/*
function init() {
   let map = new ymaps.Map('map-test', {
      center: center,
      zoom: 18
   });

}
   ymaps.ready(init);*/

function init() {
   // Создание карты.
   let map = new ymaps.Map("map-test", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: center,
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 18
   });

   let placemark = new ymaps.Placemark(center, {}, {
      iconLayout: 'default#image',
      iconImageHref: 'https://images.icon-icons.com/1258/PNG/512/1495574559-map-location-solid-style-01_84581.png',
      iconImageSize: [40, 40],
      iconImageOffset: [20, -80]

   });

   map.controls.remove('geolocationControl');
   map.controls.remove('searchControl');
   map.controls.remove('trafficControl');
   map.controls.remove('typeSelector');
   map.controls.remove('fullscreenControl');
   map.controls.remove('zoomControl');
   map.controls.remove('rulerControl');
   map.behaviors.disable(['scrollZoom']);

   map.geoObjects.add(placemark);
}

ymaps.ready(init);



