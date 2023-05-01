var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_NK_2 = new ol.format.GeoJSON();
var features_NK_2 = format_NK_2.readFeatures(json_NK_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NK_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NK_2.addFeatures(features_NK_2);
var lyr_NK_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NK_2, 
                style: style_NK_2,
                interactive: true,
                title: '<img src="styles/legend/NK_2.png" /> NK'
            });
var format_waterbody_3 = new ol.format.GeoJSON();
var features_waterbody_3 = format_waterbody_3.readFeatures(json_waterbody_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterbody_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterbody_3.addFeatures(features_waterbody_3);
var lyr_waterbody_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waterbody_3, 
                style: style_waterbody_3,
                interactive: true,
                title: '<img src="styles/legend/waterbody_3.png" /> waterbody'
            });
var format_Road_4 = new ol.format.GeoJSON();
var features_Road_4 = format_Road_4.readFeatures(json_Road_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_4.addFeatures(features_Road_4);
var lyr_Road_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_4, 
                style: style_Road_4,
                interactive: true,
                title: '<img src="styles/legend/Road_4.png" /> Road'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_NK_2.setVisible(true);lyr_waterbody_3.setVisible(true);lyr_Road_4.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_GoogleSatelliteHybrid_1,lyr_NK_2,lyr_waterbody_3,lyr_Road_4];
lyr_NK_2.set('fieldAliases', {'LAYER': 'LAYER', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'THAI_BND_': 'THAI_BND_', 'THAI_BND_I': 'THAI_BND_I', 'PROV_CODE': 'PROV_CODE', 'PROV_NAME': 'PROV_NAME', 'PROV_THAI': 'PROV_THAI', 'PART': 'PART', 'REC_NO': 'REC_NO', });
lyr_waterbody_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'HY_USE': 'HY_USE', 'HY_PNAME': 'HY_PNAME', 'HY_MRIVER': 'HY_MRIVER', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'LENGTH': 'LENGTH', 'AREA': 'AREA', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_Road_4.set('fieldAliases', {'RDLNNUM': 'RDLNNUM', 'NICKNAME': 'NICKNAME', 'RDLNNAMT': 'RDLNNAMT', 'RDLNNAME': 'RDLNNAME', 'BRDNAMT': 'BRDNAMT', 'BRDNAME': 'BRDNAME', 'VERSION': 'VERSION', 'SYMBOL': 'SYMBOL', 'RDLNCLASS': 'RDLNCLASS', 'DIRECTION': 'DIRECTION', 'SOURCETHM': 'SOURCETHM', 'LENGTH': 'LENGTH', });
lyr_NK_2.set('fieldImages', {'LAYER': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'THAI_BND_': 'Range', 'THAI_BND_I': 'Range', 'PROV_CODE': 'Range', 'PROV_NAME': 'TextEdit', 'PROV_THAI': 'TextEdit', 'PART': 'TextEdit', 'REC_NO': 'Range', });
lyr_waterbody_3.set('fieldImages', {'OBJECTID': 'Range', 'HY_USE': 'Range', 'HY_PNAME': 'TextEdit', 'HY_MRIVER': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'LENGTH': 'TextEdit', 'AREA': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Road_4.set('fieldImages', {'RDLNNUM': 'TextEdit', 'NICKNAME': 'TextEdit', 'RDLNNAMT': 'TextEdit', 'RDLNNAME': 'TextEdit', 'BRDNAMT': 'TextEdit', 'BRDNAME': 'TextEdit', 'VERSION': 'TextEdit', 'SYMBOL': 'Range', 'RDLNCLASS': 'Range', 'DIRECTION': 'Range', 'SOURCETHM': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_NK_2.set('fieldLabels', {'LAYER': 'no label', 'AREA': 'inline label', 'PERIMETER': 'no label', 'THAI_BND_': 'inline label', 'THAI_BND_I': 'no label', 'PROV_CODE': 'no label', 'PROV_NAME': 'inline label', 'PROV_THAI': 'inline label', 'PART': 'header label', 'REC_NO': 'header label', });
lyr_waterbody_3.set('fieldLabels', {'OBJECTID': 'no label', 'HY_USE': 'inline label', 'HY_PNAME': 'inline label', 'HY_MRIVER': 'inline label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'LENGTH': 'inline label', 'AREA': 'inline label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_Road_4.set('fieldLabels', {'RDLNNUM': 'no label', 'NICKNAME': 'inline label', 'RDLNNAMT': 'inline label', 'RDLNNAME': 'inline label', 'BRDNAMT': 'inline label', 'BRDNAME': 'inline label', 'VERSION': 'no label', 'SYMBOL': 'no label', 'RDLNCLASS': 'no label', 'DIRECTION': 'no label', 'SOURCETHM': 'no label', 'LENGTH': 'inline label', });
lyr_Road_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});