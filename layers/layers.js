var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_24078070500_setor_1 = new ol.format.GeoJSON();
var features_24078070500_setor_1 = format_24078070500_setor_1.readFeatures(json_24078070500_setor_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24078070500_setor_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24078070500_setor_1.addFeatures(features_24078070500_setor_1);
var lyr_24078070500_setor_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24078070500_setor_1, 
                style: style_24078070500_setor_1,
                popuplayertitle: '24078070500_setor',
                interactive: true,
    title: '24078070500_setor<br />\
    <img src="styles/legend/24078070500_setor_1_0.png" /> NORMAL<br />\
    <img src="styles/legend/24078070500_setor_1_1.png" /> TRANSPARENTE<br />' });
var format_24066010500_setor_2 = new ol.format.GeoJSON();
var features_24066010500_setor_2 = format_24066010500_setor_2.readFeatures(json_24066010500_setor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24066010500_setor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24066010500_setor_2.addFeatures(features_24066010500_setor_2);
var lyr_24066010500_setor_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24066010500_setor_2, 
                style: style_24066010500_setor_2,
                popuplayertitle: '24066010500_setor',
                interactive: true,
                title: '<img src="styles/legend/24066010500_setor_2.png" /> 24066010500_setor'
            });
var format_SETORESCENSITMONTEALGRE_3 = new ol.format.GeoJSON();
var features_SETORESCENSITMONTEALGRE_3 = format_SETORESCENSITMONTEALGRE_3.readFeatures(json_SETORESCENSITMONTEALGRE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SETORESCENSITMONTEALGRE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SETORESCENSITMONTEALGRE_3.addFeatures(features_SETORESCENSITMONTEALGRE_3);
var lyr_SETORESCENSITMONTEALGRE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SETORESCENSITMONTEALGRE_3, 
                style: style_SETORESCENSITMONTEALGRE_3,
                popuplayertitle: 'SETORESCENSIT MONTEALGRE',
                interactive: true,
                title: '<img src="styles/legend/SETORESCENSITMONTEALGRE_3.png" /> SETORESCENSIT MONTEALGRE'
            });
var format_2406601_LAGOA_SALGADA_4 = new ol.format.GeoJSON();
var features_2406601_LAGOA_SALGADA_4 = format_2406601_LAGOA_SALGADA_4.readFeatures(json_2406601_LAGOA_SALGADA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2406601_LAGOA_SALGADA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2406601_LAGOA_SALGADA_4.addFeatures(features_2406601_LAGOA_SALGADA_4);
var lyr_2406601_LAGOA_SALGADA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2406601_LAGOA_SALGADA_4, 
                style: style_2406601_LAGOA_SALGADA_4,
                popuplayertitle: '2406601_LAGOA_SALGADA',
                interactive: true,
                title: '<img src="styles/legend/2406601_LAGOA_SALGADA_4.png" /> 2406601_LAGOA_SALGADA'
            });
var format_2407807_MONTE_ALEGRE_5 = new ol.format.GeoJSON();
var features_2407807_MONTE_ALEGRE_5 = format_2407807_MONTE_ALEGRE_5.readFeatures(json_2407807_MONTE_ALEGRE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2407807_MONTE_ALEGRE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2407807_MONTE_ALEGRE_5.addFeatures(features_2407807_MONTE_ALEGRE_5);
var lyr_2407807_MONTE_ALEGRE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2407807_MONTE_ALEGRE_5, 
                style: style_2407807_MONTE_ALEGRE_5,
                popuplayertitle: '2407807_MONTE_ALEGRE',
                interactive: true,
    title: '2407807_MONTE_ALEGRE<br />\
    <img src="styles/legend/2407807_MONTE_ALEGRE_5_0.png" /> 1<br />\
    <img src="styles/legend/2407807_MONTE_ALEGRE_5_1.png" /> 2<br />\
    <img src="styles/legend/2407807_MONTE_ALEGRE_5_2.png" /> 3<br />\
    <img src="styles/legend/2407807_MONTE_ALEGRE_5_3.png" /> 4<br />\
    <img src="styles/legend/2407807_MONTE_ALEGRE_5_4.png" /> 5<br />\
    <img src="styles/legend/2407807_MONTE_ALEGRE_5_5.png" /> 6<br />\
    <img src="styles/legend/2407807_MONTE_ALEGRE_5_6.png" /> 7<br />\
    <img src="styles/legend/2407807_MONTE_ALEGRE_5_7.png" /> 8<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_24078070500_setor_1.setVisible(true);lyr_24066010500_setor_2.setVisible(true);lyr_SETORESCENSITMONTEALGRE_3.setVisible(true);lyr_2406601_LAGOA_SALGADA_4.setVisible(true);lyr_2407807_MONTE_ALEGRE_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_24078070500_setor_1,lyr_24066010500_setor_2,lyr_SETORESCENSITMONTEALGRE_3,lyr_2406601_LAGOA_SALGADA_4,lyr_2407807_MONTE_ALEGRE_5];
lyr_24078070500_setor_1.set('fieldAliases', {'ID1': 'ID1', 'CD_GEOCODI': 'CD_GEOCODI', 'TIPO': 'TIPO', 'CD_GEOCODB': 'CD_GEOCODB', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_GEOCODD': 'CD_GEOCODD', 'NM_DISTRIT': 'NM_DISTRIT', 'CD_GEOCODS': 'CD_GEOCODS', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_GEOCODM': 'CD_GEOCODM', 'NM_MUNICIP': 'NM_MUNICIP', 'NM_MESO': 'NM_MESO', 'NM_MICRO': 'NM_MICRO', });
lyr_24066010500_setor_2.set('fieldAliases', {'ID1': 'ID1', 'CD_GEOCODI': 'CD_GEOCODI', 'TIPO': 'TIPO', 'CD_GEOCODB': 'CD_GEOCODB', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_GEOCODD': 'CD_GEOCODD', 'NM_DISTRIT': 'NM_DISTRIT', 'CD_GEOCODS': 'CD_GEOCODS', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_GEOCODM': 'CD_GEOCODM', 'NM_MUNICIP': 'NM_MUNICIP', 'NM_MESO': 'NM_MESO', 'NM_MICRO': 'NM_MICRO', });
lyr_SETORESCENSITMONTEALGRE_3.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'CD_SIT': 'CD_SIT', 'NM_SIT': 'NM_SIT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', });
lyr_2406601_LAGOA_SALGADA_4.set('fieldAliases', {'COD_UNICO_ENDERECO': 'COD_UNICO_ENDERECO', 'COD_UF': 'COD_UF', 'COD_MUNICIPIO': 'COD_MUNICIPIO', 'COD_DISTRITO': 'COD_DISTRITO', 'COD_SUBDISTRITO': 'COD_SUBDISTRITO', 'COD_SETOR': 'COD_SETOR', 'NUM_QUADRA': 'NUM_QUADRA', 'NUM_FACE': 'NUM_FACE', 'CEP': 'CEP', 'DSC_LOCALIDADE': 'DSC_LOCALIDADE', 'NOM_TIPO_SEGLOGR': 'NOM_TIPO_SEGLOGR', 'NOM_TITULO_SEGLOGR': 'NOM_TITULO_SEGLOGR', 'NOM_SEGLOGR': 'NOM_SEGLOGR', 'NUM_ENDERECO': 'NUM_ENDERECO', 'DSC_MODIFICADOR': 'DSC_MODIFICADOR', 'NOM_COMP_ELEM1': 'NOM_COMP_ELEM1', 'VAL_COMP_ELEM1': 'VAL_COMP_ELEM1', 'NOM_COMP_ELEM2': 'NOM_COMP_ELEM2', 'VAL_COMP_ELEM2': 'VAL_COMP_ELEM2', 'NOM_COMP_ELEM3': 'NOM_COMP_ELEM3', 'VAL_COMP_ELEM3': 'VAL_COMP_ELEM3', 'NOM_COMP_ELEM4': 'NOM_COMP_ELEM4', 'VAL_COMP_ELEM4': 'VAL_COMP_ELEM4', 'NOM_COMP_ELEM5': 'NOM_COMP_ELEM5', 'VAL_COMP_ELEM5': 'VAL_COMP_ELEM5', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NV_GEO_COORD': 'NV_GEO_COORD', 'COD_ESPECIE': 'COD_ESPECIE', 'DSC_ESTABELECIMENTO': 'DSC_ESTABELECIMENTO', 'COD_INDICADOR_ESTAB_ENDERECO': 'COD_INDICADOR_ESTAB_ENDERECO', 'COD_INDICADOR_CONST_ENDERECO': 'COD_INDICADOR_CONST_ENDERECO', 'COD_INDICADOR_FINALIDADE_CONST': 'COD_INDICADOR_FINALIDADE_CONST', 'COD_TIPO_ESPECI': 'COD_TIPO_ESPECI', });
lyr_2407807_MONTE_ALEGRE_5.set('fieldAliases', {'COD_UNICO_ENDERECO': 'COD_UNICO_ENDERECO', 'COD_UF': 'COD_UF', 'COD_MUNICIPIO': 'COD_MUNICIPIO', 'COD_DISTRITO': 'COD_DISTRITO', 'COD_SUBDISTRITO': 'COD_SUBDISTRITO', 'COD_SETOR': 'COD_SETOR', 'NUM_QUADRA': 'NUM_QUADRA', 'NUM_FACE': 'NUM_FACE', 'CEP': 'CEP', 'DSC_LOCALIDADE': 'DSC_LOCALIDADE', 'NOM_TIPO_SEGLOGR': 'NOM_TIPO_SEGLOGR', 'NOM_TITULO_SEGLOGR': 'NOM_TITULO_SEGLOGR', 'NOM_SEGLOGR': 'NOM_SEGLOGR', 'NUM_ENDERECO': 'NUM_ENDERECO', 'DSC_MODIFICADOR': 'DSC_MODIFICADOR', 'NOM_COMP_ELEM1': 'NOM_COMP_ELEM1', 'VAL_COMP_ELEM1': 'VAL_COMP_ELEM1', 'NOM_COMP_ELEM2': 'NOM_COMP_ELEM2', 'VAL_COMP_ELEM2': 'VAL_COMP_ELEM2', 'NOM_COMP_ELEM3': 'NOM_COMP_ELEM3', 'VAL_COMP_ELEM3': 'VAL_COMP_ELEM3', 'NOM_COMP_ELEM4': 'NOM_COMP_ELEM4', 'VAL_COMP_ELEM4': 'VAL_COMP_ELEM4', 'NOM_COMP_ELEM5': 'NOM_COMP_ELEM5', 'VAL_COMP_ELEM5': 'VAL_COMP_ELEM5', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NV_GEO_COORD': 'NV_GEO_COORD', 'COD_ESPECIE': 'COD_ESPECIE', 'DSC_ESTABELECIMENTO': 'DSC_ESTABELECIMENTO', 'COD_INDICADOR_ESTAB_ENDERECO': 'COD_INDICADOR_ESTAB_ENDERECO', 'COD_INDICADOR_CONST_ENDERECO': 'COD_INDICADOR_CONST_ENDERECO', 'COD_INDICADOR_FINALIDADE_CONST': 'COD_INDICADOR_FINALIDADE_CONST', 'COD_TIPO_ESPECI': 'COD_TIPO_ESPECI', });
lyr_24078070500_setor_1.set('fieldImages', {'ID1': 'TextEdit', 'CD_GEOCODI': 'TextEdit', 'TIPO': 'TextEdit', 'CD_GEOCODB': 'TextEdit', 'NM_BAIRRO': 'TextEdit', 'CD_GEOCODD': 'TextEdit', 'NM_DISTRIT': 'TextEdit', 'CD_GEOCODS': 'TextEdit', 'NM_SUBDIST': 'TextEdit', 'CD_GEOCODM': 'TextEdit', 'NM_MUNICIP': 'TextEdit', 'NM_MESO': 'TextEdit', 'NM_MICRO': 'TextEdit', });
lyr_24066010500_setor_2.set('fieldImages', {'ID1': 'TextEdit', 'CD_GEOCODI': 'TextEdit', 'TIPO': 'TextEdit', 'CD_GEOCODB': 'TextEdit', 'NM_BAIRRO': 'TextEdit', 'CD_GEOCODD': 'TextEdit', 'NM_DISTRIT': 'TextEdit', 'CD_GEOCODS': 'TextEdit', 'NM_SUBDIST': 'TextEdit', 'CD_GEOCODM': 'TextEdit', 'NM_MUNICIP': 'TextEdit', 'NM_MESO': 'TextEdit', 'NM_MICRO': 'TextEdit', });
lyr_SETORESCENSITMONTEALGRE_3.set('fieldImages', {'CD_SETOR': 'TextEdit', 'CD_SIT': 'TextEdit', 'NM_SIT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'CD_SUBDIST': 'TextEdit', 'NM_SUBDIST': 'TextEdit', });
lyr_2406601_LAGOA_SALGADA_4.set('fieldImages', {'COD_UNICO_ENDERECO': 'Range', 'COD_UF': 'Range', 'COD_MUNICIPIO': 'Range', 'COD_DISTRITO': 'Range', 'COD_SUBDISTRITO': 'TextEdit', 'COD_SETOR': 'TextEdit', 'NUM_QUADRA': 'Range', 'NUM_FACE': 'Range', 'CEP': 'Range', 'DSC_LOCALIDADE': 'TextEdit', 'NOM_TIPO_SEGLOGR': 'TextEdit', 'NOM_TITULO_SEGLOGR': 'TextEdit', 'NOM_SEGLOGR': 'TextEdit', 'NUM_ENDERECO': 'Range', 'DSC_MODIFICADOR': 'TextEdit', 'NOM_COMP_ELEM1': 'TextEdit', 'VAL_COMP_ELEM1': 'TextEdit', 'NOM_COMP_ELEM2': 'TextEdit', 'VAL_COMP_ELEM2': 'Range', 'NOM_COMP_ELEM3': 'TextEdit', 'VAL_COMP_ELEM3': 'TextEdit', 'NOM_COMP_ELEM4': 'TextEdit', 'VAL_COMP_ELEM4': 'TextEdit', 'NOM_COMP_ELEM5': 'TextEdit', 'VAL_COMP_ELEM5': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'NV_GEO_COORD': 'Range', 'COD_ESPECIE': 'Range', 'DSC_ESTABELECIMENTO': 'TextEdit', 'COD_INDICADOR_ESTAB_ENDERECO': 'Range', 'COD_INDICADOR_CONST_ENDERECO': 'Range', 'COD_INDICADOR_FINALIDADE_CONST': 'Range', 'COD_TIPO_ESPECI': 'Range', });
lyr_2407807_MONTE_ALEGRE_5.set('fieldImages', {'COD_UNICO_ENDERECO': 'Range', 'COD_UF': 'Range', 'COD_MUNICIPIO': 'Range', 'COD_DISTRITO': 'Range', 'COD_SUBDISTRITO': 'TextEdit', 'COD_SETOR': 'TextEdit', 'NUM_QUADRA': 'Range', 'NUM_FACE': 'Range', 'CEP': 'Range', 'DSC_LOCALIDADE': 'TextEdit', 'NOM_TIPO_SEGLOGR': 'TextEdit', 'NOM_TITULO_SEGLOGR': 'TextEdit', 'NOM_SEGLOGR': 'TextEdit', 'NUM_ENDERECO': 'Range', 'DSC_MODIFICADOR': 'TextEdit', 'NOM_COMP_ELEM1': 'TextEdit', 'VAL_COMP_ELEM1': 'TextEdit', 'NOM_COMP_ELEM2': 'TextEdit', 'VAL_COMP_ELEM2': 'Range', 'NOM_COMP_ELEM3': 'TextEdit', 'VAL_COMP_ELEM3': 'TextEdit', 'NOM_COMP_ELEM4': 'TextEdit', 'VAL_COMP_ELEM4': 'TextEdit', 'NOM_COMP_ELEM5': 'TextEdit', 'VAL_COMP_ELEM5': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'NV_GEO_COORD': 'Range', 'COD_ESPECIE': 'Range', 'DSC_ESTABELECIMENTO': 'TextEdit', 'COD_INDICADOR_ESTAB_ENDERECO': 'Range', 'COD_INDICADOR_CONST_ENDERECO': 'Range', 'COD_INDICADOR_FINALIDADE_CONST': 'Range', 'COD_TIPO_ESPECI': 'Range', });
lyr_24078070500_setor_1.set('fieldLabels', {'ID1': 'no label', 'CD_GEOCODI': 'no label', 'TIPO': 'no label', 'CD_GEOCODB': 'no label', 'NM_BAIRRO': 'no label', 'CD_GEOCODD': 'no label', 'NM_DISTRIT': 'no label', 'CD_GEOCODS': 'no label', 'NM_SUBDIST': 'no label', 'CD_GEOCODM': 'no label', 'NM_MUNICIP': 'no label', 'NM_MESO': 'no label', 'NM_MICRO': 'no label', });
lyr_24066010500_setor_2.set('fieldLabels', {'ID1': 'no label', 'CD_GEOCODI': 'no label', 'TIPO': 'no label', 'CD_GEOCODB': 'no label', 'NM_BAIRRO': 'no label', 'CD_GEOCODD': 'no label', 'NM_DISTRIT': 'no label', 'CD_GEOCODS': 'no label', 'NM_SUBDIST': 'no label', 'CD_GEOCODM': 'no label', 'NM_MUNICIP': 'no label', 'NM_MESO': 'no label', 'NM_MICRO': 'no label', });
lyr_SETORESCENSITMONTEALGRE_3.set('fieldLabels', {'CD_SETOR': 'no label', 'CD_SIT': 'no label', 'NM_SIT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_DIST': 'no label', 'NM_DIST': 'no label', 'CD_SUBDIST': 'no label', 'NM_SUBDIST': 'no label', });
lyr_2406601_LAGOA_SALGADA_4.set('fieldLabels', {'COD_UNICO_ENDERECO': 'no label', 'COD_UF': 'no label', 'COD_MUNICIPIO': 'no label', 'COD_DISTRITO': 'no label', 'COD_SUBDISTRITO': 'no label', 'COD_SETOR': 'no label', 'NUM_QUADRA': 'no label', 'NUM_FACE': 'no label', 'CEP': 'no label', 'DSC_LOCALIDADE': 'no label', 'NOM_TIPO_SEGLOGR': 'no label', 'NOM_TITULO_SEGLOGR': 'no label', 'NOM_SEGLOGR': 'no label', 'NUM_ENDERECO': 'no label', 'DSC_MODIFICADOR': 'no label', 'NOM_COMP_ELEM1': 'no label', 'VAL_COMP_ELEM1': 'no label', 'NOM_COMP_ELEM2': 'no label', 'VAL_COMP_ELEM2': 'no label', 'NOM_COMP_ELEM3': 'no label', 'VAL_COMP_ELEM3': 'no label', 'NOM_COMP_ELEM4': 'no label', 'VAL_COMP_ELEM4': 'no label', 'NOM_COMP_ELEM5': 'no label', 'VAL_COMP_ELEM5': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'NV_GEO_COORD': 'no label', 'COD_ESPECIE': 'no label', 'DSC_ESTABELECIMENTO': 'no label', 'COD_INDICADOR_ESTAB_ENDERECO': 'no label', 'COD_INDICADOR_CONST_ENDERECO': 'no label', 'COD_INDICADOR_FINALIDADE_CONST': 'no label', 'COD_TIPO_ESPECI': 'no label', });
lyr_2407807_MONTE_ALEGRE_5.set('fieldLabels', {'COD_UNICO_ENDERECO': 'no label', 'COD_UF': 'no label', 'COD_MUNICIPIO': 'no label', 'COD_DISTRITO': 'no label', 'COD_SUBDISTRITO': 'no label', 'COD_SETOR': 'no label', 'NUM_QUADRA': 'no label', 'NUM_FACE': 'no label', 'CEP': 'no label', 'DSC_LOCALIDADE': 'no label', 'NOM_TIPO_SEGLOGR': 'no label', 'NOM_TITULO_SEGLOGR': 'no label', 'NOM_SEGLOGR': 'no label', 'NUM_ENDERECO': 'no label', 'DSC_MODIFICADOR': 'no label', 'NOM_COMP_ELEM1': 'no label', 'VAL_COMP_ELEM1': 'no label', 'NOM_COMP_ELEM2': 'no label', 'VAL_COMP_ELEM2': 'no label', 'NOM_COMP_ELEM3': 'no label', 'VAL_COMP_ELEM3': 'no label', 'NOM_COMP_ELEM4': 'no label', 'VAL_COMP_ELEM4': 'no label', 'NOM_COMP_ELEM5': 'no label', 'VAL_COMP_ELEM5': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'NV_GEO_COORD': 'no label', 'COD_ESPECIE': 'no label', 'DSC_ESTABELECIMENTO': 'no label', 'COD_INDICADOR_ESTAB_ENDERECO': 'no label', 'COD_INDICADOR_CONST_ENDERECO': 'no label', 'COD_INDICADOR_FINALIDADE_CONST': 'no label', 'COD_TIPO_ESPECI': 'no label', });
lyr_2407807_MONTE_ALEGRE_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});