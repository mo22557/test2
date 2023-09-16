var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_3_1 = new ol.format.GeoJSON();
var features_3_1 = format_3_1.readFeatures(json_3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_1.addFeatures(features_3_1);
var lyr_3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3_1, 
                style: style_3_1,
                interactive: true,
                title: '<img src="styles/legend/3_1.png" /> 3'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_3_1.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_3_1];
lyr_3_1.set('fieldAliases', {});
lyr_3_1.set('fieldImages', {});
lyr_3_1.set('fieldLabels', {});
lyr_3_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});