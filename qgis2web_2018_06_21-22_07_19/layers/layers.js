var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_marketdataupdate = new ol.format.GeoJSON();
var features_marketdataupdate = format_marketdataupdate.readFeatures(geojson_marketdataupdate, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_marketdataupdate = new ol.source.Vector();
jsonSource_marketdataupdate.addFeatures(features_marketdataupdate);var lyr_marketdataupdate = new ol.layer.Vector({
                source:jsonSource_marketdataupdate, 
                style: style_marketdataupdate,
                title: "market_data update"
            });

lyr_marketdataupdate.setVisible(true);
var layersList = [baseLayer,lyr_marketdataupdate];
