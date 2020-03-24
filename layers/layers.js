var wms_layers = [];
var format_NE_cesty_linie_0 = new ol.format.GeoJSON();
var features_NE_cesty_linie_0 = format_NE_cesty_linie_0.readFeatures(json_NE_cesty_linie_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NE_cesty_linie_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NE_cesty_linie_0.addFeatures(features_NE_cesty_linie_0);var lyr_NE_cesty_linie_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NE_cesty_linie_0, 
                style: style_NE_cesty_linie_0,
                title: '<img src="styles/legend/NE_cesty_linie_0.png" /> NE_cesty_linie'
            });var format_NE_hranice_1 = new ol.format.GeoJSON();
var features_NE_hranice_1 = format_NE_hranice_1.readFeatures(json_NE_hranice_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NE_hranice_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NE_hranice_1.addFeatures(features_NE_hranice_1);var lyr_NE_hranice_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NE_hranice_1, 
                style: style_NE_hranice_1,
                title: '<img src="styles/legend/NE_hranice_1.png" /> NE_hranice'
            });

lyr_NE_cesty_linie_0.setVisible(true);lyr_NE_hranice_1.setVisible(true);
var layersList = [lyr_NE_cesty_linie_0,lyr_NE_hranice_1];
lyr_NE_cesty_linie_0.set('fieldAliases', {'LMI_ID': 'LMI_ID', 'FITJUFLOKK': 'FITJUFLOKK', 'VEGTEGUND': 'VEGTEGUND', 'VEGNR': 'VEGNR', 'KAFLANR': 'KAFLANR', 'EININGVEGA': 'EININGVEGA', 'SLITLAG': 'SLITLAG', 'VINNSLUFER': 'VINNSLUFER', 'NAFNFITJU': 'NAFNFITJU', 'ATH': 'ATH', 'DAGSHEIMIL': 'DAGSHEIMIL', 'DAGSINNSET': 'DAGSINNSET', 'DAGSLEIDRE': 'DAGSLEIDRE', 'DAGSUPPFAE': 'DAGSUPPFAE', 'NAKVAEMNIX': 'NAKVAEMNIX', 'GAGNAEIGAN': 'GAGNAEIGAN', 'HEIMILD': 'HEIMILD', 'SKYRINGNOT': 'SKYRINGNOT', 'NOTKUN': 'NOTKUN', 'VEGFLOKKUN': 'VEGFLOKKUN', 'heimild_Te': 'heimild_Te', 'gagnasafn': 'gagnasafn', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_NE_hranice_1.set('fieldAliases', {'FITJUFLOKK': 'FITJUFLOKK', 'STJORNSYSL': 'STJORNSYSL', 'NRSVEITARF': 'NRSVEITARF', 'SVEITARFEL': 'SVEITARFEL', 'ATH': 'ATH', 'VINNSLUFER': 'VINNSLUFER', 'DAGSHEIMIL': 'DAGSHEIMIL', 'DAGSINNSET': 'DAGSINNSET', 'DAGSLEIDRE': 'DAGSLEIDRE', 'DAGSUPPFAE': 'DAGSUPPFAE', 'NAKVAEMNIX': 'NAKVAEMNIX', 'GAGNAEIGAN': 'GAGNAEIGAN', 'HEIMILD': 'HEIMILD', 'heimild_Te': 'heimild_Te', 'gagnasafn': 'gagnasafn', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NE_cesty_linie_0.set('fieldImages', {'LMI_ID': '', 'FITJUFLOKK': '', 'VEGTEGUND': '', 'VEGNR': '', 'KAFLANR': '', 'EININGVEGA': '', 'SLITLAG': '', 'VINNSLUFER': '', 'NAFNFITJU': '', 'ATH': '', 'DAGSHEIMIL': '', 'DAGSINNSET': '', 'DAGSLEIDRE': '', 'DAGSUPPFAE': '', 'NAKVAEMNIX': '', 'GAGNAEIGAN': '', 'HEIMILD': '', 'SKYRINGNOT': '', 'NOTKUN': '', 'VEGFLOKKUN': '', 'heimild_Te': '', 'gagnasafn': '', 'SHAPE_Leng': '', });
lyr_NE_hranice_1.set('fieldImages', {'FITJUFLOKK': 'TextEdit', 'STJORNSYSL': 'TextEdit', 'NRSVEITARF': 'Range', 'SVEITARFEL': 'TextEdit', 'ATH': 'TextEdit', 'VINNSLUFER': 'TextEdit', 'DAGSHEIMIL': 'DateTime', 'DAGSINNSET': 'DateTime', 'DAGSLEIDRE': 'DateTime', 'DAGSUPPFAE': 'DateTime', 'NAKVAEMNIX': 'TextEdit', 'GAGNAEIGAN': 'TextEdit', 'HEIMILD': 'TextEdit', 'heimild_Te': 'TextEdit', 'gagnasafn': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_NE_cesty_linie_0.set('fieldLabels', {'LMI_ID': 'no label', 'FITJUFLOKK': 'no label', 'VEGTEGUND': 'no label', 'VEGNR': 'no label', 'KAFLANR': 'no label', 'EININGVEGA': 'no label', 'SLITLAG': 'no label', 'VINNSLUFER': 'no label', 'NAFNFITJU': 'no label', 'ATH': 'no label', 'DAGSHEIMIL': 'no label', 'DAGSINNSET': 'no label', 'DAGSLEIDRE': 'no label', 'DAGSUPPFAE': 'no label', 'NAKVAEMNIX': 'no label', 'GAGNAEIGAN': 'no label', 'HEIMILD': 'no label', 'SKYRINGNOT': 'no label', 'NOTKUN': 'no label', 'VEGFLOKKUN': 'no label', 'heimild_Te': 'no label', 'gagnasafn': 'no label', 'SHAPE_Leng': 'no label', });
lyr_NE_hranice_1.set('fieldLabels', {'FITJUFLOKK': 'no label', 'STJORNSYSL': 'no label', 'NRSVEITARF': 'no label', 'SVEITARFEL': 'no label', 'ATH': 'no label', 'VINNSLUFER': 'no label', 'DAGSHEIMIL': 'no label', 'DAGSINNSET': 'no label', 'DAGSLEIDRE': 'no label', 'DAGSUPPFAE': 'no label', 'NAKVAEMNIX': 'no label', 'GAGNAEIGAN': 'no label', 'HEIMILD': 'no label', 'heimild_Te': 'no label', 'gagnasafn': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NE_hranice_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});