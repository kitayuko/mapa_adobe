var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRINationalGeographic_1 = new ol.layer.Tile({
            'title': 'ESRI National Geographic',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRITopo_2 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2010_4 = new ol.format.GeoJSON();
var features_2010_4 = format_2010_4.readFeatures(json_2010_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2010_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2010_4.addFeatures(features_2010_4);
var lyr_2010_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2010_4, 
                style: style_2010_4,
                popuplayertitle: '2010',
                interactive: true,
                title: '<img src="styles/legend/2010_4.png" /> 2010'
            });
var format_2011_5 = new ol.format.GeoJSON();
var features_2011_5 = format_2011_5.readFeatures(json_2011_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2011_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2011_5.addFeatures(features_2011_5);
var lyr_2011_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2011_5, 
                style: style_2011_5,
                popuplayertitle: '2011',
                interactive: true,
                title: '<img src="styles/legend/2011_5.png" /> 2011'
            });
var format_2012_6 = new ol.format.GeoJSON();
var features_2012_6 = format_2012_6.readFeatures(json_2012_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2012_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2012_6.addFeatures(features_2012_6);
var lyr_2012_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2012_6, 
                style: style_2012_6,
                popuplayertitle: '2012',
                interactive: true,
                title: '<img src="styles/legend/2012_6.png" /> 2012'
            });
var format_2015_7 = new ol.format.GeoJSON();
var features_2015_7 = format_2015_7.readFeatures(json_2015_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_7.addFeatures(features_2015_7);
var lyr_2015_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015_7, 
                style: style_2015_7,
                popuplayertitle: '2015',
                interactive: true,
                title: '<img src="styles/legend/2015_7.png" /> 2015'
            });
var format_201307_8 = new ol.format.GeoJSON();
var features_201307_8 = format_201307_8.readFeatures(json_201307_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201307_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201307_8.addFeatures(features_201307_8);
var lyr_201307_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201307_8, 
                style: style_201307_8,
                popuplayertitle: '2013-07',
                interactive: true,
                title: '<img src="styles/legend/201307_8.png" /> 2013-07'
            });
var format_201310_9 = new ol.format.GeoJSON();
var features_201310_9 = format_201310_9.readFeatures(json_201310_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201310_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201310_9.addFeatures(features_201310_9);
var lyr_201310_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201310_9, 
                style: style_201310_9,
                popuplayertitle: '2013-10',
                interactive: true,
                title: '<img src="styles/legend/201310_9.png" /> 2013-10'
            });
var format_201904_10 = new ol.format.GeoJSON();
var features_201904_10 = format_201904_10.readFeatures(json_201904_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201904_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201904_10.addFeatures(features_201904_10);
var lyr_201904_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201904_10, 
                style: style_201904_10,
                popuplayertitle: '2019-04',
                interactive: true,
                title: '<img src="styles/legend/201904_10.png" /> 2019-04'
            });
var format_201911_11 = new ol.format.GeoJSON();
var features_201911_11 = format_201911_11.readFeatures(json_201911_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201911_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201911_11.addFeatures(features_201911_11);
var lyr_201911_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201911_11, 
                style: style_201911_11,
                popuplayertitle: '2019-11',
                interactive: true,
                title: '<img src="styles/legend/201911_11.png" /> 2019-11'
            });
var format_202004_12 = new ol.format.GeoJSON();
var features_202004_12 = format_202004_12.readFeatures(json_202004_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202004_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202004_12.addFeatures(features_202004_12);
var lyr_202004_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202004_12, 
                style: style_202004_12,
                popuplayertitle: '2020-04',
                interactive: true,
                title: '<img src="styles/legend/202004_12.png" /> 2020-04'
            });
var format_202011_13 = new ol.format.GeoJSON();
var features_202011_13 = format_202011_13.readFeatures(json_202011_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202011_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202011_13.addFeatures(features_202011_13);
var lyr_202011_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202011_13, 
                style: style_202011_13,
                popuplayertitle: '2020-11',
                interactive: true,
                title: '<img src="styles/legend/202011_13.png" /> 2020-11'
            });
var format_202311_14 = new ol.format.GeoJSON();
var features_202311_14 = format_202311_14.readFeatures(json_202311_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202311_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202311_14.addFeatures(features_202311_14);
var lyr_202311_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202311_14, 
                style: style_202311_14,
                popuplayertitle: '2023-11',
                interactive: true,
                title: '<img src="styles/legend/202311_14.png" /> 2023-11'
            });
var format_202405_15 = new ol.format.GeoJSON();
var features_202405_15 = format_202405_15.readFeatures(json_202405_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202405_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202405_15.addFeatures(features_202405_15);
var lyr_202405_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202405_15, 
                style: style_202405_15,
                popuplayertitle: '2024-05',
                interactive: true,
                title: '<img src="styles/legend/202405_15.png" /> 2024-05'
            });
var format_202411_16 = new ol.format.GeoJSON();
var features_202411_16 = format_202411_16.readFeatures(json_202411_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202411_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202411_16.addFeatures(features_202411_16);
var lyr_202411_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202411_16, 
                style: style_202411_16,
                popuplayertitle: '2024-11',
                interactive: true,
                title: '<img src="styles/legend/202411_16.png" /> 2024-11'
            });
var format_202505_17 = new ol.format.GeoJSON();
var features_202505_17 = format_202505_17.readFeatures(json_202505_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202505_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202505_17.addFeatures(features_202505_17);
var lyr_202505_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202505_17, 
                style: style_202505_17,
                popuplayertitle: '2025-05',
                interactive: true,
                title: '<img src="styles/legend/202505_17.png" /> 2025-05'
            });
var group_Establecimientos = new ol.layer.Group({
                                layers: [lyr_2010_4,lyr_2011_5,lyr_2012_6,lyr_2015_7,lyr_201307_8,lyr_201310_9,lyr_201904_10,lyr_201911_11,lyr_202004_12,lyr_202011_13,lyr_202311_14,lyr_202405_15,lyr_202411_16,lyr_202505_17,],
                                fold: 'open',
                                title: 'Establecimientos'});

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRINationalGeographic_1.setVisible(true);lyr_ESRITopo_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_2010_4.setVisible(true);lyr_2011_5.setVisible(true);lyr_2012_6.setVisible(true);lyr_2015_7.setVisible(true);lyr_201307_8.setVisible(true);lyr_201310_9.setVisible(true);lyr_201904_10.setVisible(true);lyr_201911_11.setVisible(true);lyr_202004_12.setVisible(true);lyr_202011_13.setVisible(true);lyr_202311_14.setVisible(true);lyr_202405_15.setVisible(true);lyr_202411_16.setVisible(true);lyr_202505_17.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ESRINationalGeographic_1,lyr_ESRITopo_2,lyr_OpenStreetMap_3,group_Establecimientos];
lyr_2010_4.set('fieldAliases', {'fid': 'fid', 'Nombre de la unidad econÛmica': 'Nombre', 'Nombre de la clase de actividad': 'Nombre de la actividad', 'Personal ocupado (estrato)': 'Trabaja(n)', 'Localidad': 'Localidad', '¡rea geoestadÌstica b·sica': 'AGEB', 'Manzana': 'Manzana', 'Tipo de unidad econÛmica': 'Tipo de establecimiento', });
lyr_2011_5.set('fieldAliases', {'fid': 'fid', 'Nombre de la unidad econÛmica': 'Nombre', 'Nombre de la clase de actividad': 'Nombre de la actividad', 'Personal ocupado (estrato)': 'Trabaja(n)', 'Localidad': 'Localidad', '¡rea geoestadÌstica b·sica': 'AGEB', 'Manzana': 'Manzana', 'Tipo de unidad econÛmica': 'Tipo de establecimiento', 'Fecha de incorporaciÛn al DENUE': 'Fecha de alta', });
lyr_2012_6.set('fieldAliases', {'fid': 'fid', 'Localidad': 'Localidad', '¡rea geoestadÌstica b·sica ': 'AGEB', 'Manzana': 'Manzana', 'Nombre de la Unidad EconÛmica': 'Nombre', 'Nombre de clase de la actividad': 'Nombre de la actividad', 'Tipo de establecimiento': 'Tipo de establecimiento', 'Personal ocupado (estrato)': 'per_ocu_est', 'Descripcion estrato personal ocupado': 'Trabaja(n)', 'Fecha de incorporaciÛn al DENUE': 'Fecha de alta', });
lyr_2015_7.set('fieldAliases', {'fid': 'fid', 'Nombre de la Unidad Econ√≥mica': 'Nombre', 'Nombre de clase de la actividad': 'Nombre de la actividad', 'Descripcion estrato personal ocupado': 'Trabaja(n)', 'Localidad': 'Localidad', '√Årea geoestad√≠stica b√°sica ': 'AGEB', 'Manzana': 'Manzana', 'Tipo de establecimiento': 'Tipo de establecimiento', 'Fecha de incorporaci√≥n al DENUE': 'Fecha de alta', });
lyr_201307_8.set('fieldAliases', {'fid': 'fid', 'Localidad': 'Localidad', '¡rea geoestadÌstica b·sica ': 'AGEB', 'Manzana': 'Manzana', 'Nombre de la Unidad EconÛmica': 'Nombre', 'Nombre de clase de la actividad': 'Nombre de la actividad', 'Tipo de establecimiento': 'Tipo de establecimiento', 'Descripcion estrato personal ocupado': 'Trabaja(n)', 'Fecha de incorporaciÛn al DENUE': 'Fecha de alta', });
lyr_201310_9.set('fieldAliases', {'fid': 'fid', 'Localidad': 'Localidad', '¡rea geoestadÌstica b·sica ': 'AGEB', 'Manzana': 'Manzana', 'Nombre de la Unidad EconÛmica': 'Nombre', 'Nombre de clase de la actividad': 'Nombre de la actividad', 'Tipo de establecimiento': 'Tipo de establecimiento', 'Personal ocupado (estrato)': 'per_ocu_est', 'Descripcion estrato personal ocupado': 'Trabaja(n)', 'Fecha de incorporaciÛn al DENUE': 'Fecha de alta', });
lyr_201904_10.set('fieldAliases', {'fid': 'fid', 'nom_estab': 'Nombre', 'nombre_act': 'Nombre de la actividad', 'per_ocu': 'Trabaja(n)', 'localidad': 'Localidad', 'ageb': 'AGEB', 'manzana': 'Manzana', 'tipoUniEco': 'Tipo del establecimiento', 'fecha_alta': 'Fecha de alta', });
lyr_201911_11.set('fieldAliases', {'fid': 'fid', 'nom_estab': 'Nombre', 'nombre_act': 'Nombre de la actividad', 'per_ocu': 'Trabaja(n)', 'localidad': 'Localidad', 'ageb': 'AGEB', 'manzana': 'Manzana', 'tipoUniEco': 'Tipo del establecimiento', 'fecha_alta': 'Fecha de alta', });
lyr_202004_12.set('fieldAliases', {'fid': 'fid', 'nom_estab': 'Nombre', 'nombre_act': 'Nombre de la actividad', 'per_ocu': 'Trabaja(n)', 'localidad': 'Localidad', 'ageb': 'AGEB', 'manzana': 'Manzana', 'tipoUniEco': 'Tipo del establecimiento', 'fecha_alta': 'Fecha de alta', });
lyr_202011_13.set('fieldAliases', {'fid': 'fid', 'nom_estab': 'Nombre', 'nombre_act': 'Nombre de la actividad', 'per_ocu': 'Trabaja(n)', 'localidad': 'Localidad', 'ageb': 'AGEB', 'manzana': 'Manzana', 'tipoUniEco': 'Tipo del establecimiento', 'fecha_alta': 'Fecha de alta', });
lyr_202311_14.set('fieldAliases', {'fid': 'fid', 'nom_estab': 'Nombre', 'nombre_act': 'Nombre de la actividad', 'per_ocu': 'Trabaja(n)', 'localidad': 'Localidad', 'ageb': 'AGEB', 'manzana': 'Manzana', 'tipoUniEco': 'Tipo del establecimiento', 'fecha_alta': 'Fecha de alta', });
lyr_202405_15.set('fieldAliases', {'fid': 'fid', 'nom_estab': 'Nombre', 'nombre_act': 'Nombre de la actividad', 'per_ocu': 'Trabaja(n)', 'localidad': 'Localidad', 'ageb': 'AGEB', 'manzana': 'Manzana', 'tipoUniEco': 'Tipo del establecimiento', 'fecha_alta': 'Fecha de alta', });
lyr_202411_16.set('fieldAliases', {'fid': 'fid', 'nom_estab': 'Nombre', 'nombre_act': 'Nombre de la actividad', 'per_ocu': 'Trabaja(n)', 'localidad': 'Localidad', 'ageb': 'AGEB', 'manzana': 'Manzana', 'tipoUniEco': 'Tipo del establecimiento', 'fecha_alta': 'Fecha de alta', });
lyr_202505_17.set('fieldAliases', {'fid': 'fid', 'nom_estab': 'Nombre', 'nombre_act': 'Nombre de la actividad', 'per_ocu': 'Trabaja(n)', 'localidad': 'Localidad', 'ageb': 'AGEB', 'manzana': 'Manzana', 'tipoUniEco': 'Tipo del establecimiento', 'fecha_alta': 'Fecha de alta', });
lyr_2010_4.set('fieldImages', {'fid': 'TextEdit', 'Nombre de la unidad econÛmica': 'TextEdit', 'Nombre de la clase de actividad': 'TextEdit', 'Personal ocupado (estrato)': 'TextEdit', 'Localidad': 'TextEdit', '¡rea geoestadÌstica b·sica': 'TextEdit', 'Manzana': 'TextEdit', 'Tipo de unidad econÛmica': 'TextEdit', });
lyr_2011_5.set('fieldImages', {'fid': 'TextEdit', 'Nombre de la unidad econÛmica': 'TextEdit', 'Nombre de la clase de actividad': 'TextEdit', 'Personal ocupado (estrato)': 'TextEdit', 'Localidad': 'TextEdit', '¡rea geoestadÌstica b·sica': 'TextEdit', 'Manzana': 'TextEdit', 'Tipo de unidad econÛmica': 'TextEdit', 'Fecha de incorporaciÛn al DENUE': 'TextEdit', });
lyr_2012_6.set('fieldImages', {'fid': 'TextEdit', 'Localidad': 'TextEdit', '¡rea geoestadÌstica b·sica ': 'TextEdit', 'Manzana': 'TextEdit', 'Nombre de la Unidad EconÛmica': 'TextEdit', 'Nombre de clase de la actividad': 'TextEdit', 'Tipo de establecimiento': 'Range', 'Personal ocupado (estrato)': 'Range', 'Descripcion estrato personal ocupado': 'TextEdit', 'Fecha de incorporaciÛn al DENUE': 'TextEdit', });
lyr_2015_7.set('fieldImages', {'fid': 'TextEdit', 'Nombre de la Unidad Econ√≥mica': 'TextEdit', 'Nombre de clase de la actividad': 'TextEdit', 'Descripcion estrato personal ocupado': 'TextEdit', 'Localidad': 'TextEdit', '√Årea geoestad√≠stica b√°sica ': 'TextEdit', 'Manzana': 'TextEdit', 'Tipo de establecimiento': 'TextEdit', 'Fecha de incorporaci√≥n al DENUE': 'TextEdit', });
lyr_201307_8.set('fieldImages', {'fid': 'TextEdit', 'Localidad': 'TextEdit', '¡rea geoestadÌstica b·sica ': 'TextEdit', 'Manzana': 'TextEdit', 'Nombre de la Unidad EconÛmica': 'TextEdit', 'Nombre de clase de la actividad': 'TextEdit', 'Tipo de establecimiento': 'Range', 'Descripcion estrato personal ocupado': 'TextEdit', 'Fecha de incorporaciÛn al DENUE': 'TextEdit', });
lyr_201310_9.set('fieldImages', {'fid': 'TextEdit', 'Localidad': 'TextEdit', '¡rea geoestadÌstica b·sica ': 'TextEdit', 'Manzana': 'TextEdit', 'Nombre de la Unidad EconÛmica': 'TextEdit', 'Nombre de clase de la actividad': 'TextEdit', 'Tipo de establecimiento': 'Range', 'Personal ocupado (estrato)': 'Range', 'Descripcion estrato personal ocupado': 'TextEdit', 'Fecha de incorporaciÛn al DENUE': 'TextEdit', });
lyr_201904_10.set('fieldImages', {'fid': 'TextEdit', 'nom_estab': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'localidad': 'TextEdit', 'ageb': 'TextEdit', 'manzana': 'TextEdit', 'tipoUniEco': 'TextEdit', 'fecha_alta': 'TextEdit', });
lyr_201911_11.set('fieldImages', {'fid': 'TextEdit', 'nom_estab': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'localidad': 'TextEdit', 'ageb': 'TextEdit', 'manzana': 'TextEdit', 'tipoUniEco': 'TextEdit', 'fecha_alta': 'TextEdit', });
lyr_202004_12.set('fieldImages', {'fid': 'TextEdit', 'nom_estab': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'localidad': 'TextEdit', 'ageb': 'TextEdit', 'manzana': 'TextEdit', 'tipoUniEco': 'TextEdit', 'fecha_alta': 'TextEdit', });
lyr_202011_13.set('fieldImages', {'fid': 'TextEdit', 'nom_estab': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'localidad': 'TextEdit', 'ageb': 'TextEdit', 'manzana': 'TextEdit', 'tipoUniEco': 'TextEdit', 'fecha_alta': 'TextEdit', });
lyr_202311_14.set('fieldImages', {'fid': 'TextEdit', 'nom_estab': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'localidad': 'TextEdit', 'ageb': 'TextEdit', 'manzana': 'TextEdit', 'tipoUniEco': 'TextEdit', 'fecha_alta': 'TextEdit', });
lyr_202405_15.set('fieldImages', {'fid': 'TextEdit', 'nom_estab': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'localidad': 'TextEdit', 'ageb': 'TextEdit', 'manzana': 'TextEdit', 'tipoUniEco': 'TextEdit', 'fecha_alta': 'TextEdit', });
lyr_202411_16.set('fieldImages', {'fid': 'TextEdit', 'nom_estab': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'localidad': 'TextEdit', 'ageb': 'TextEdit', 'manzana': 'TextEdit', 'tipoUniEco': 'TextEdit', 'fecha_alta': 'TextEdit', });
lyr_202505_17.set('fieldImages', {'fid': 'TextEdit', 'nom_estab': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'localidad': 'TextEdit', 'ageb': 'TextEdit', 'manzana': 'TextEdit', 'tipoUniEco': 'TextEdit', 'fecha_alta': 'TextEdit', });
lyr_2010_4.set('fieldLabels', {'fid': 'hidden field', 'Nombre de la unidad econÛmica': 'header label - visible with data', 'Nombre de la clase de actividad': 'hidden field', 'Personal ocupado (estrato)': 'header label - visible with data', 'Localidad': 'hidden field', '¡rea geoestadÌstica b·sica': 'hidden field', 'Manzana': 'hidden field', 'Tipo de unidad econÛmica': 'hidden field', });
lyr_2011_5.set('fieldLabels', {'fid': 'hidden field', 'Nombre de la unidad econÛmica': 'header label - visible with data', 'Nombre de la clase de actividad': 'hidden field', 'Personal ocupado (estrato)': 'header label - visible with data', 'Localidad': 'hidden field', '¡rea geoestadÌstica b·sica': 'hidden field', 'Manzana': 'hidden field', 'Tipo de unidad econÛmica': 'hidden field', 'Fecha de incorporaciÛn al DENUE': 'header label - visible with data', });
lyr_2012_6.set('fieldLabels', {'fid': 'hidden field', 'Localidad': 'header label - visible with data', '¡rea geoestadÌstica b·sica ': 'hidden field', 'Manzana': 'hidden field', 'Nombre de la Unidad EconÛmica': 'hidden field', 'Nombre de clase de la actividad': 'hidden field', 'Tipo de establecimiento': 'hidden field', 'Personal ocupado (estrato)': 'hidden field', 'Descripcion estrato personal ocupado': 'header label - visible with data', 'Fecha de incorporaciÛn al DENUE': 'header label - visible with data', });
lyr_2015_7.set('fieldLabels', {'fid': 'hidden field', 'Nombre de la Unidad Econ√≥mica': 'header label - visible with data', 'Nombre de clase de la actividad': 'hidden field', 'Descripcion estrato personal ocupado': 'header label - visible with data', 'Localidad': 'hidden field', '√Årea geoestad√≠stica b√°sica ': 'hidden field', 'Manzana': 'hidden field', 'Tipo de establecimiento': 'hidden field', 'Fecha de incorporaci√≥n al DENUE': 'header label - visible with data', });
lyr_201307_8.set('fieldLabels', {'fid': 'hidden field', 'Localidad': 'hidden field', '¡rea geoestadÌstica b·sica ': 'hidden field', 'Manzana': 'hidden field', 'Nombre de la Unidad EconÛmica': 'header label - visible with data', 'Nombre de clase de la actividad': 'hidden field', 'Tipo de establecimiento': 'hidden field', 'Descripcion estrato personal ocupado': 'header label - visible with data', 'Fecha de incorporaciÛn al DENUE': 'header label - visible with data', });
lyr_201310_9.set('fieldLabels', {'fid': 'hidden field', 'Localidad': 'hidden field', '¡rea geoestadÌstica b·sica ': 'hidden field', 'Manzana': 'hidden field', 'Nombre de la Unidad EconÛmica': 'header label - visible with data', 'Nombre de clase de la actividad': 'hidden field', 'Tipo de establecimiento': 'hidden field', 'Personal ocupado (estrato)': 'hidden field', 'Descripcion estrato personal ocupado': 'header label - visible with data', 'Fecha de incorporaciÛn al DENUE': 'header label - visible with data', });
lyr_201904_10.set('fieldLabels', {'fid': 'hidden field', 'nom_estab': 'header label - visible with data', 'nombre_act': 'hidden field', 'per_ocu': 'header label - visible with data', 'localidad': 'hidden field', 'ageb': 'hidden field', 'manzana': 'hidden field', 'tipoUniEco': 'hidden field', 'fecha_alta': 'header label - visible with data', });
lyr_201911_11.set('fieldLabels', {'fid': 'hidden field', 'nom_estab': 'header label - visible with data', 'nombre_act': 'hidden field', 'per_ocu': 'header label - visible with data', 'localidad': 'hidden field', 'ageb': 'hidden field', 'manzana': 'hidden field', 'tipoUniEco': 'hidden field', 'fecha_alta': 'header label - visible with data', });
lyr_202004_12.set('fieldLabels', {'fid': 'hidden field', 'nom_estab': 'header label - visible with data', 'nombre_act': 'hidden field', 'per_ocu': 'header label - visible with data', 'localidad': 'hidden field', 'ageb': 'hidden field', 'manzana': 'hidden field', 'tipoUniEco': 'hidden field', 'fecha_alta': 'header label - visible with data', });
lyr_202011_13.set('fieldLabels', {'fid': 'hidden field', 'nom_estab': 'header label - visible with data', 'nombre_act': 'hidden field', 'per_ocu': 'header label - visible with data', 'localidad': 'hidden field', 'ageb': 'hidden field', 'manzana': 'hidden field', 'tipoUniEco': 'hidden field', 'fecha_alta': 'header label - visible with data', });
lyr_202311_14.set('fieldLabels', {'fid': 'hidden field', 'nom_estab': 'header label - visible with data', 'nombre_act': 'hidden field', 'per_ocu': 'header label - visible with data', 'localidad': 'hidden field', 'ageb': 'hidden field', 'manzana': 'hidden field', 'tipoUniEco': 'hidden field', 'fecha_alta': 'header label - visible with data', });
lyr_202405_15.set('fieldLabels', {'fid': 'hidden field', 'nom_estab': 'header label - visible with data', 'nombre_act': 'hidden field', 'per_ocu': 'header label - visible with data', 'localidad': 'hidden field', 'ageb': 'hidden field', 'manzana': 'hidden field', 'tipoUniEco': 'hidden field', 'fecha_alta': 'header label - visible with data', });
lyr_202411_16.set('fieldLabels', {'fid': 'hidden field', 'nom_estab': 'header label - visible with data', 'nombre_act': 'hidden field', 'per_ocu': 'header label - visible with data', 'localidad': 'hidden field', 'ageb': 'hidden field', 'manzana': 'hidden field', 'tipoUniEco': 'hidden field', 'fecha_alta': 'header label - visible with data', });
lyr_202505_17.set('fieldLabels', {'fid': 'hidden field', 'nom_estab': 'header label - visible with data', 'nombre_act': 'hidden field', 'per_ocu': 'header label - visible with data', 'localidad': 'hidden field', 'ageb': 'hidden field', 'manzana': 'hidden field', 'tipoUniEco': 'hidden field', 'fecha_alta': 'header label - visible with data', });
lyr_202505_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});