require.resourceMap({
    "res": {
        "app/app.js": {
            "deps": [
                "mix/lib/angular/angular.js",
                "mix/lib/angular-ui-router/angular-ui-router.js",
                "mix/lib/angular-couch-potato/angular-couch-potato.js",
                "mix/lib/angular-cookies/angular-cookies.js",
                "mix/lib/angular-resource/angular-resource.js",
                "mix/lib/angular-ui-bootstrap/ui-bootstrap-tpls.js",
                "mix/lib/angular-loading-bar/loading-bar.js",
                "mix/lib/angular-file-upload/angular-file-upload.js",
                "mix/directive/ngSlimscroll/ngSlimscroll.js"
            ],
            "url": "/mix-dashboard/static/app/app.js"
        },
        "app/empty.html": {
            "url": "./static/app/empty.html"
        },
        "app/http-interceptor.js": {
            "deps": [
                "app/app.js"
            ],
            "url": "/mix-dashboard/static/app/http-interceptor.js"
        },
        "app/img/mi-logo.png": {
            "url": "/mix-dashboard/static/app/img/mi-logo.png"
        },
        "app/img/mi.png": {
            "url": "/mix-dashboard/static/app/img/mi.png"
        },
        "app/index.html": {
            "url": "/index.html"
        },
        "app/main.js": {
            "deps": [
                "app/app.js",
                "mix/mix.js",
                "app/routeDefs.js",
                "app/http-interceptor.js",
                "app/main.less"
            ],
            "url": "/mix-dashboard/static/app/main.js"
        },
        "app/main.less": {
            "deps": [
                "mix/lib/bootstrap/css/bootstrap.css",
                "mix/lib/font-awesome/css/font-awesome.css",
                "mix/lib/google/font/font.less"
            ],
            "url": "/mix-dashboard/static/app/main.css"
        },
        "app/module/about/about.html": {
            "deps": [
                "app/module/about/about.less"
            ],
            "url": "./static/app/module/about/about.html"
        },
        "app/module/about/about.less": {
            "url": "/mix-dashboard/static/app/module/about/about.css"
        },
        "app/module/help/help.html": {
            "url": "./static/app/module/help/help.html"
        },
        "app/module/home/home.html": {
            "deps": [
                "app/module/home/home.js",
                "app/module/home/home.less"
            ],
            "url": "./static/app/module/home/home.html"
        },
        "app/module/home/home.js": {
            "deps": [
                "app/app.js",
                "mix/lib/echarts/echarts.js",
                "app/module/home/home.less"
            ],
            "url": "/mix-dashboard/static/app/module/home/home.js"
        },
        "app/module/home/home.less": {
            "url": "/mix-dashboard/static/app/module/home/home.css"
        },
        "app/module/icons/fontawesome/fontawesome.html": {
            "deps": [
                "app/module/icons/fontawesome/fontawesome.less",
                "app/module/icons/fontawesome/fontawesome.js"
            ],
            "url": "./static/app/module/icons/fontawesome/fontawesome.html"
        },
        "app/module/icons/fontawesome/fontawesome.js": {
            "deps": [
                "app/app.js",
                "app/module/icons/fontawesome/fontawesome.less"
            ],
            "url": "/mix-dashboard/static/app/module/icons/fontawesome/fontawesome.js"
        },
        "app/module/icons/fontawesome/fontawesome.less": {
            "url": "/mix-dashboard/static/app/module/icons/fontawesome/fontawesome.css"
        },
        "app/module/icons/glyphicons/glyphicons.html": {
            "deps": [
                "./fontawesome.less",
                "app/module/icons/glyphicons/glyphicons.js",
                "app/module/icons/glyphicons/glyphicons.less"
            ],
            "url": "./static/app/module/icons/glyphicons/glyphicons.html"
        },
        "app/module/icons/glyphicons/glyphicons.js": {
            "deps": [
                "app/app.js",
                "app/module/icons/glyphicons/glyphicons.less"
            ],
            "url": "/mix-dashboard/static/app/module/icons/glyphicons/glyphicons.js"
        },
        "app/module/icons/glyphicons/glyphicons.less": {
            "url": "/mix-dashboard/static/app/module/icons/glyphicons/glyphicons.css"
        },
        "app/module/icons/icon.html": {
            "deps": [
                "app/module/icons/icon.js",
                "app/module/icons/icon.less"
            ],
            "url": "./static/app/module/icons/icon.html"
        },
        "app/module/icons/icon.js": {
            "deps": [
                "app/app.js",
                "app/module/icons/icon.less"
            ],
            "url": "/mix-dashboard/static/app/module/icons/icon.js"
        },
        "app/module/icons/icon.less": {
            "url": "/mix-dashboard/static/app/module/icons/icon.css"
        },
        "app/module/order/order.html": {
            "deps": [
                "app/module/order/order.js",
                "app/module/order/order.less"
            ],
            "url": "./static/app/module/order/order.html"
        },
        "app/module/order/order.js": {
            "deps": [
                "app/app.js",
                "mix/directive/miDatepicker/miDatepicker",
                "mix/directive/miSelect/miSelect",
                "app/module/order/order.less"
            ],
            "url": "/mix-dashboard/static/app/module/order/order.js"
        },
        "app/module/order/order.less": {
            "url": "/mix-dashboard/static/app/module/order/order.css"
        },
        "app/module/table/dynamic/_dynamic_controller.html": {
            "url": "./static/app/module/table/dynamic/_dynamic_controller.html"
        },
        "app/module/table/dynamic/_dynamic_example.html": {
            "url": "./static/app/module/table/dynamic/_dynamic_example.html"
        },
        "app/module/table/dynamic/dynamic.html": {
            "deps": [
                "app/module/table/dynamic/dynamic.js",
                "app/module/table/dynamic/dynamic.less"
            ],
            "url": "./static/app/module/table/dynamic/dynamic.html"
        },
        "app/module/table/dynamic/dynamic.js": {
            "deps": [
                "app/app.js",
                "mix/directive/miSyntaxHighlighter/miSyntaxHighlighter",
                "app/module/table/dynamic/dynamic.less"
            ],
            "url": "/mix-dashboard/static/app/module/table/dynamic/dynamic.js"
        },
        "app/module/table/dynamic/dynamic.less": {
            "url": "/mix-dashboard/static/app/module/table/dynamic/dynamic.css"
        },
        "app/module/table/simple/_simple_contoller.html": {
            "url": "./static/app/module/table/simple/_simple_contoller.html"
        },
        "app/module/table/simple/_simple_example.html": {
            "url": "./static/app/module/table/simple/_simple_example.html"
        },
        "app/module/table/simple/_simple_routeDefs.html": {
            "url": "./static/app/module/table/simple/_simple_routeDefs.html"
        },
        "app/module/table/simple/simple.html": {
            "deps": [
                "app/module/table/simple/simple.js"
            ],
            "url": "./static/app/module/table/simple/simple.html"
        },
        "app/module/table/simple/simple.js": {
            "deps": [
                "app/app.js",
                "mix/directive/miSyntaxHighlighter/miSyntaxHighlighter"
            ],
            "url": "/mix-dashboard/static/app/module/table/simple/simple.js"
        },
        "app/module/test/test.html": {
            "url": "./static/app/module/test/test.html"
        },
        "app/routeDefs.js": {
            "deps": [
                "app/app.js"
            ],
            "url": "/mix-dashboard/static/app/routeDefs.js"
        },
        "favicon.ico": {
            "url": "/mix-dashboard/static/favicon.ico"
        },
        "mix/base.less": {
            "deps": [
                "mix/lib/bootstrap/css/bootstrap.css",
                "mix/lib/font-awesome/css/font-awesome.css",
                "mix/lib/google/font/font.less"
            ],
            "url": "/mix-dashboard/static/mix/base.css"
        },
        "mix/css/table.less": {
            "url": "/mix-dashboard/static/mix/css/table.css"
        },
        "mix/directive/miDatepicker/miDatepicker.html": {
            "deps": [
                "mix/directive/miDatepicker/miDatepicker.js",
                "mix/directive/miDatepicker/miDatepicker.less"
            ],
            "url": "./static/mix/directive/miDatepicker/miDatepicker.html"
        },
        "mix/directive/miDatepicker/miDatepicker.js": {
            "deps": [
                "app/app",
                "mix/directive/miDatepicker/miDatepicker.less"
            ],
            "url": "/mix-dashboard/static/mix/directive/miDatepicker/miDatepicker.js"
        },
        "mix/directive/miDatepicker/miDatepicker.less": {
            "url": "/mix-dashboard/static/mix/directive/miDatepicker/miDatepicker.css"
        },
        "mix/directive/miSelect/miSelect.html": {
            "deps": [
                "mix/directive/miSelect/miSelect.js",
                "mix/directive/miSelect/miSelect.less"
            ],
            "url": "./static/mix/directive/miSelect/miSelect.html"
        },
        "mix/directive/miSelect/miSelect.js": {
            "deps": [
                "app/app",
                "mix/directive/miSelect/miSelect.less"
            ],
            "url": "/mix-dashboard/static/mix/directive/miSelect/miSelect.js"
        },
        "mix/directive/miSelect/miSelect.less": {
            "url": "/mix-dashboard/static/mix/directive/miSelect/miSelect.css"
        },
        "mix/directive/miSyntaxHighlighter/miSyntaxHighlighter.js": {
            "deps": [
                "app/app",
                "mix/lib/syntaxhighlighter/shCore"
            ],
            "url": "/mix-dashboard/static/mix/directive/miSyntaxHighlighter/miSyntaxHighlighter.js"
        },
        "mix/directive/miTextarea/miTextarea.js": {
            "deps": [
                "app/app",
                "mix/directive/miTextarea/miTextarea.less"
            ],
            "url": "/mix-dashboard/static/mix/directive/miTextarea/miTextarea.js"
        },
        "mix/directive/miTextarea/miTextarea.less": {
            "url": "/mix-dashboard/static/mix/directive/miTextarea/miTextarea.css"
        },
        "mix/directive/ngSlimscroll/ngSlimscroll.js": {
            "deps": [
                "mix/directive/ngSlimscroll/ngSlimscroll.less"
            ],
            "url": "/mix-dashboard/static/mix/directive/ngSlimscroll/ngSlimscroll.js"
        },
        "mix/directive/ngSlimscroll/ngSlimscroll.less": {
            "url": "/mix-dashboard/static/mix/directive/ngSlimscroll/ngSlimscroll.css"
        },
        "mix/favicon.ico": {
            "url": "/mix-dashboard/static/mix/favicon.ico"
        },
        "mix/lib/angular-cookies/angular-cookies.js": {
            "url": "/mix-dashboard/static/mix/lib/angular-cookies/angular-cookies.js"
        },
        "mix/lib/angular-couch-potato/angular-couch-potato.js": {
            "url": "/mix-dashboard/static/mix/lib/angular-couch-potato/angular-couch-potato.js"
        },
        "mix/lib/angular-file-upload/angular-file-upload.js": {
            "url": "/mix-dashboard/static/mix/lib/angular-file-upload/angular-file-upload.js"
        },
        "mix/lib/angular-loading-bar/loading-bar.js": {
            "deps": [
                "mix/lib/angular-loading-bar/loading-bar.less"
            ],
            "url": "/mix-dashboard/static/mix/lib/angular-loading-bar/loading-bar.js"
        },
        "mix/lib/angular-loading-bar/loading-bar.less": {
            "url": "/mix-dashboard/static/mix/lib/angular-loading-bar/loading-bar.css"
        },
        "mix/lib/angular-resource/angular-resource.js": {
            "url": "/mix-dashboard/static/mix/lib/angular-resource/angular-resource.js"
        },
        "mix/lib/angular-ui-bootstrap/ui-bootstrap-tpls.js": {
            "url": "/mix-dashboard/static/mix/lib/angular-ui-bootstrap/ui-bootstrap-tpls.js"
        },
        "mix/lib/angular-ui-bootstrap/ui-bootstrap.js": {
            "url": "/mix-dashboard/static/mix/lib/angular-ui-bootstrap/ui-bootstrap.js"
        },
        "mix/lib/angular-ui-router/angular-ui-router.js": {
            "url": "/mix-dashboard/static/mix/lib/angular-ui-router/angular-ui-router.js"
        },
        "mix/lib/angular/angular.js": {
            "url": "/mix-dashboard/static/mix/lib/angular/angular.js"
        },
        "mix/lib/bootstrap/css/bootstrap-theme.css": {
            "url": "./static/mix/lib/bootstrap/css/bootstrap-theme.css"
        },
        "mix/lib/bootstrap/css/bootstrap.css": {
            "url": "./static/mix/lib/bootstrap/css/bootstrap.css"
        },
        "mix/lib/bootstrap/fonts/glyphicons-halflings-regular.eot": {
            "url": "/mix-dashboard/static/mix/lib/bootstrap/fonts/glyphicons-halflings-regular.eot"
        },
        "mix/lib/bootstrap/fonts/glyphicons-halflings-regular.svg": {
            "url": "/mix-dashboard/static/mix/lib/bootstrap/fonts/glyphicons-halflings-regular.svg"
        },
        "mix/lib/bootstrap/fonts/glyphicons-halflings-regular.ttf": {
            "url": "/mix-dashboard/static/mix/lib/bootstrap/fonts/glyphicons-halflings-regular.ttf"
        },
        "mix/lib/bootstrap/fonts/glyphicons-halflings-regular.woff": {
            "url": "/mix-dashboard/static/mix/lib/bootstrap/fonts/glyphicons-halflings-regular.woff"
        },
        "mix/lib/bootstrap/fonts/glyphicons-halflings-regular.woff2": {
            "url": "/mix-dashboard/static/mix/lib/bootstrap/fonts/glyphicons-halflings-regular.woff2"
        },
        "mix/lib/bootstrap/js/bootstrap.js": {
            "deps": [
                "common:static/lib/jquery/jquery.js"
            ],
            "url": "/mix-dashboard/static/mix/lib/bootstrap/js/bootstrap.js"
        },
        "mix/lib/bootstrap/js/bootstrap.min.js": {
            "url": "/mix-dashboard/static/mix/lib/bootstrap/js/bootstrap.min.js"
        },
        "mix/lib/echarts/echarts.js": {
            "deps": [
                "../graphic/Gradient",
                "zrender/core/util",
                "./makeStyleMapper",
                "./vector",
                "./matrix",
                "../core/util",
                "../core/BoundingRect",
                "zrender/contain/text",
                "../util/clazz",
                "./mixin/lineStyle",
                "./mixin/areaStyle",
                "./mixin/textStyle",
                "./mixin/itemStyle",
                "./clazz",
                "./number",
                "zrender/core/BoundingRect",
                "./format",
                "./Model",
                "../util/component",
                "../util/layout",
                "./mixin/boxLayout",
                "./Component",
                "./globalDefault",
                "../model/Model",
                "../util/format",
                "../util/model",
                "../core/matrix",
                "../core/vector",
                "./easing",
                "./Clip",
                "../tool/color",
                "../config",
                "../animation/Animator",
                "../core/log",
                "./core/guid",
                "./mixin/Eventful",
                "./mixin/Transformable",
                "./mixin/Animatable",
                "./core/util",
                "../Element",
                "zrender/container/Group",
                "../../contain/text",
                "../../core/BoundingRect",
                "./Style",
                "./mixin/RectText",
                "./curve",
                "./bbox",
                "./BoundingRect",
                "../core/curve",
                "./util",
                "../core/PathProxy",
                "./line",
                "./cubic",
                "./quadratic",
                "./arc",
                "./windingLine",
                "./Displayable",
                "../contain/path",
                "./Gradient",
                "../graphic/Path",
                "./transformPath",
                "./helper/roundRect",
                "../core/LRU",
                "../contain/text",
                "../Path",
                "../../core/vector",
                "./smoothSpline",
                "./smoothBezier",
                "../helper/poly",
                "../helper/roundRect",
                "../../core/curve",
                "zrender/tool/path",
                "zrender/graphic/Path",
                "zrender/tool/color",
                "zrender/core/matrix",
                "zrender/core/vector",
                "zrender/graphic/Gradient",
                "zrender/graphic/Image",
                "zrender/graphic/Text",
                "zrender/graphic/shape/Circle",
                "zrender/graphic/shape/Sector",
                "zrender/graphic/shape/Polygon",
                "zrender/graphic/shape/Polyline",
                "zrender/graphic/shape/Rect",
                "zrender/graphic/shape/Line",
                "zrender/graphic/shape/BezierCurve",
                "zrender/graphic/shape/Arc",
                "zrender/graphic/LinearGradient",
                "zrender/graphic/RadialGradient",
                "../mixin/Eventful",
                "./core/env",
                "./core/event",
                "./mixin/Draggable",
                "./core/GestureMgr",
                "./container/Group",
                "../core/event",
                "./Animator",
                "./config",
                "./core/log",
                "./core/BoundingRect",
                "./Layer",
                "./graphic/Image",
                "./Handler",
                "./Storage",
                "./animation/Animation",
                "./Painter",
                "../util/graphic",
                "./helper/compatStyle",
                "./model/Global",
                "./ExtensionAPI",
                "./CoordinateSystem",
                "./model/OptionManager",
                "./model/Component",
                "./model/Series",
                "./view/Component",
                "./view/Chart",
                "./util/graphic",
                "zrender",
                "zrender/core/env",
                "zrender/mixin/Eventful",
                "./loading/default",
                "./visual/seriesColor",
                "./preprocessor/backwardCompat",
                "./util/number",
                "./util/format",
                "./DataDiffer",
                "../../data/List",
                "../../data/helper/completeDimensions",
                "../../util/model",
                "../helper/createListFromArray",
                "../../model/Series",
                "./graphic",
                "../../util/symbol",
                "../../util/graphic",
                "../../util/number",
                "./Symbol",
                "zrender/core/arrayDiff",
                "../helper/SymbolDraw",
                "../helper/Symbol",
                "./lineAnimationDiff",
                "./poly",
                "../../view/Chart",
                "../echarts",
                "./line/LineSeries",
                "./line/LineView",
                "../visual/symbol",
                "../layout/points",
                "./Scale",
                "../util/number",
                "./Interval",
                "../scale/Ordinal",
                "../scale/Interval",
                "../scale/Time",
                "../scale/Log",
                "../scale/Scale",
                "./Cartesian",
                "../axisHelper",
                "../Axis",
                "./axisLabelInterval",
                "./axisDefault",
                "../model/Component",
                "./axisHelper",
                "../../model/Component",
                "../axisModelCreator",
                "../axisModelCommonMixin",
                "./AxisModel",
                "../../util/layout",
                "../../coord/axisHelper",
                "./Cartesian2D",
                "./Axis2D",
                "./GridModel",
                "../../CoordinateSystem",
                "../../model/mixin/makeStyleMapper",
                "../../model/Model",
                "./barItemStyle",
                "../../echarts",
                "../coord/cartesian/Grid",
                "./bar/BarSeries",
                "./bar/BarView",
                "../layout/barGrid",
                "./AxisBuilder",
                "../coord/cartesian/AxisModel",
                "./axis/AxisView",
                "./axis",
                "../helper/dataSelectableMixin",
                "./labelLayout",
                "./pie/PieSeries",
                "./pie/PieView",
                "../action/createDataSelectAction",
                "../visual/dataColor",
                "./pie/pieLayout",
                "../processor/dataFilter",
                "../helper/LargeSymbolDraw",
                "./scatter/ScatterSeries",
                "./scatter/ScatterView",
                "zrender/core/event",
                "../../util/format",
                "./TooltipContent",
                "./tooltip/TooltipModel",
                "./tooltip/TooltipView",
                "./RadiusAxis",
                "./AngleAxis",
                "./Polar",
                "./PolarModel",
                "../coord/polar/polarCreator",
                "./axis/AngleAxisView",
                "./axis/RadiusAxisView",
                "./angleAxis",
                "./radiusAxis",
                "../../component/polar",
                "../../scale/Interval",
                "./radar/RadarSeries",
                "./radar/RadarView",
                "./radar/backwardCompat",
                "../helper/listComponent",
                "./legend/LegendModel",
                "./legend/legendAction",
                "./legend/LegendView",
                "./legend/legendFilter",
                "./interactionMutex",
                "./RoamController",
                "../../component/helper/MapDraw",
                "./roamHelper",
                "zrender/contain/polygon",
                "zrender/core/bbox",
                "./Region",
                "zrender/mixin/Transformable",
                "../Region",
                "./parseGeoJson",
                "../View",
                "./fix/nanhai",
                "./fix/textCoord",
                "./fix/geoCoord",
                "./GeoModel",
                "./Geo",
                "./map/MapSeries",
                "./map/MapView",
                "../action/geoRoam",
                "../coord/geo/geoCreator",
                "./map/mapSymbolLayout",
                "./map/mapVisual",
                "./map/mapDataStatistic",
                "./map/backwardCompat",
                "./List",
                "./helper/linkList",
                "./helper/completeDimensions",
                "../../data/Tree",
                "../../data/DataDiffer",
                "./helper",
                "./Breadcrumb",
                "../../component/helper/RoamController",
                "../../util/animation",
                "../../visual/VisualMapping",
                "./treemap/TreemapSeries",
                "./treemap/TreemapView",
                "./treemap/treemapAction",
                "./treemap/treemapVisual",
                "./treemap/treemapLayout",
                "../../data/Graph",
                "../../data/helper/linkList",
                "../helper/createGraphFromNodeEdge",
                "./LinePath",
                "./Line",
                "../helper/LineDraw",
                "../../action/roamHelper",
                "./simpleLayoutHelper",
                "./circularLayoutHelper",
                "./forceHelper",
                "../../coord/View",
                "./graph/GraphSeries",
                "./graph/GraphView",
                "./graph/roamAction",
                "./graph/categoryFilter",
                "./graph/categoryVisual",
                "./graph/simpleLayout",
                "./graph/circularLayout",
                "./graph/forceLayout",
                "./graph/createView",
                "./PointerPath",
                "./gauge/GaugeSeries",
                "./gauge/GaugeView",
                "./funnel/FunnelSeries",
                "./funnel/FunnelView",
                "./funnel/funnelLayout",
                "./ParallelAxis",
                "./Parallel",
                "../helper/SelectController",
                "../coord/parallel/parallelCreator",
                "./axis/parallelAxisAction",
                "./axis/ParallelAxisView",
                "../coord/parallel/ParallelModel",
                "./parallelAxis",
                "../coord/parallel/parallelPreprocessor",
                "../component/parallel",
                "./parallel/ParallelSeries",
                "./parallel/ParallelView",
                "./parallel/parallelVisual",
                "../../util/array/nest",
                "./sankey/SankeySeries",
                "./sankey/SankeyView",
                "./sankey/sankeyLayout",
                "./sankey/sankeyVisual",
                "../helper/WhiskerBoxDraw",
                "../helper/whiskerBoxCommon",
                "./boxplot/BoxplotSeries",
                "./boxplot/BoxplotView",
                "./boxplot/boxplotVisual",
                "./boxplot/boxplotLayout",
                "./candlestick/CandlestickSeries",
                "./candlestick/CandlestickView",
                "./candlestick/preprocessor",
                "./candlestick/candlestickVisual",
                "./candlestick/candlestickLayout",
                "../helper/EffectSymbol",
                "./effectScatter/EffectScatterSeries",
                "./effectScatter/EffectScatterView",
                "zrender/core/curve",
                "../helper/EffectLine",
                "../helper/Line",
                "./lines/LinesSeries",
                "./lines/LinesView",
                "./lines/linesLayout",
                "../visual/seriesColor",
                "./HeatmapLayer",
                "./heatmap/HeatmapSeries",
                "./heatmap/HeatmapView",
                "../helper/MapDraw",
                "./geo/GeoView",
                "./AxisProxy",
                "../../view/Component",
                "./DataZoomModel",
                "../../util/throttle",
                "./DataZoomView",
                "../helper/sliderMove",
                "./dataZoom/typeDefaulter",
                "./dataZoom/DataZoomModel",
                "./dataZoom/DataZoomView",
                "./dataZoom/SliderZoomModel",
                "./dataZoom/SliderZoomView",
                "./dataZoom/InsideZoomModel",
                "./dataZoom/InsideZoomView",
                "./dataZoom/dataZoomProcessor",
                "./dataZoom/dataZoomAction",
                "../../visual/visualDefault",
                "./VisualMapModel",
                "./VisualMapView",
                "./visualMap/preprocessor",
                "./visualMap/typeDefaulter",
                "./visualMap/visualCoding",
                "./visualMap/ContinuousModel",
                "./visualMap/ContinuousView",
                "./visualMap/visualMapAction",
                "./visualMap/PiecewiseModel",
                "./visualMap/PiecewiseView",
                "./visualMapContinuous",
                "./visualMapPiecewise",
                "../../model/globalDefault",
                "../../chart/helper/SymbolDraw",
                "./markerHelper",
                "./marker/MarkPointModel",
                "./marker/MarkPointView",
                "../../chart/helper/LineDraw",
                "./marker/MarkLineModel",
                "./marker/MarkLineView",
                "./TimelineModel",
                "../../coord/Axis",
                "./TimelineView",
                "./TimelineAxis",
                "./timeline/preprocessor",
                "./timeline/typeDefaulter",
                "./timeline/timelineAction",
                "./timeline/SliderTimelineModel",
                "./timeline/SliderTimelineView",
                "./featureManager",
                "../featureManager",
                "../../../echarts",
                "./dataZoom/SelectZoomModel",
                "./dataZoom/SelectZoomView",
                "../../../util/number",
                "../../helper/SelectController",
                "../../dataZoom/history",
                "../../helper/interactionMutex",
                "../../dataZoomSelect",
                "./toolbox/ToolboxModel",
                "./toolbox/ToolboxView",
                "./toolbox/feature/SaveAsImage",
                "./toolbox/feature/MagicType",
                "./toolbox/feature/DataView",
                "./toolbox/feature/DataZoom",
                "./toolbox/feature/Restore",
                "../core/env",
                "../graphic/mixin/RectText",
                "../graphic/Displayable",
                "../graphic/Image",
                "../graphic/Text",
                "./core",
                "../zrender",
                "echarts",
                "echarts/chart/line",
                "echarts/chart/bar",
                "echarts/component/grid",
                "echarts/chart/pie",
                "echarts/chart/scatter",
                "echarts/component/tooltip",
                "echarts/component/polar",
                "echarts/chart/radar",
                "echarts/component/legend",
                "echarts/chart/map",
                "echarts/chart/treemap",
                "echarts/chart/graph",
                "echarts/chart/gauge",
                "echarts/chart/funnel",
                "echarts/chart/parallel",
                "echarts/chart/sankey",
                "echarts/chart/boxplot",
                "echarts/chart/candlestick",
                "echarts/chart/effectScatter",
                "echarts/chart/lines",
                "echarts/chart/heatmap",
                "echarts/component/geo",
                "echarts/component/parallel",
                "echarts/component/title",
                "echarts/component/dataZoom",
                "echarts/component/visualMap",
                "echarts/component/markPoint",
                "echarts/component/markLine",
                "echarts/component/timeline",
                "echarts/component/toolbox",
                "zrender/vml/vml"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/echarts.js"
        },
        "mix/lib/echarts/map/js/china-contour.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/china-contour.js"
        },
        "mix/lib/echarts/map/js/china.js": {
            "deps": [
                "mix/lib/echarts/echarts.js"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/china.js"
        },
        "mix/lib/echarts/map/js/province/anhui.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/anhui.js"
        },
        "mix/lib/echarts/map/js/province/aomen.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/aomen.js"
        },
        "mix/lib/echarts/map/js/province/beijing.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/beijing.js"
        },
        "mix/lib/echarts/map/js/province/chongqing.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/chongqing.js"
        },
        "mix/lib/echarts/map/js/province/fujian.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/fujian.js"
        },
        "mix/lib/echarts/map/js/province/gansu.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/gansu.js"
        },
        "mix/lib/echarts/map/js/province/guangdong.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/guangdong.js"
        },
        "mix/lib/echarts/map/js/province/guangxi.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/guangxi.js"
        },
        "mix/lib/echarts/map/js/province/guizhou.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/guizhou.js"
        },
        "mix/lib/echarts/map/js/province/hainan.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/hainan.js"
        },
        "mix/lib/echarts/map/js/province/hebei.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/hebei.js"
        },
        "mix/lib/echarts/map/js/province/heilongjiang.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/heilongjiang.js"
        },
        "mix/lib/echarts/map/js/province/henan.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/henan.js"
        },
        "mix/lib/echarts/map/js/province/hubei.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/hubei.js"
        },
        "mix/lib/echarts/map/js/province/hunan.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/hunan.js"
        },
        "mix/lib/echarts/map/js/province/jiangsu.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/jiangsu.js"
        },
        "mix/lib/echarts/map/js/province/jiangxi.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/jiangxi.js"
        },
        "mix/lib/echarts/map/js/province/jilin.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/jilin.js"
        },
        "mix/lib/echarts/map/js/province/liaoning.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/liaoning.js"
        },
        "mix/lib/echarts/map/js/province/neimenggu.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/neimenggu.js"
        },
        "mix/lib/echarts/map/js/province/ningxia.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/ningxia.js"
        },
        "mix/lib/echarts/map/js/province/qinghai.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/qinghai.js"
        },
        "mix/lib/echarts/map/js/province/shandong.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/shandong.js"
        },
        "mix/lib/echarts/map/js/province/shanghai.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/shanghai.js"
        },
        "mix/lib/echarts/map/js/province/shanxi.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/shanxi.js"
        },
        "mix/lib/echarts/map/js/province/shanxi1.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/shanxi1.js"
        },
        "mix/lib/echarts/map/js/province/sichuan.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/sichuan.js"
        },
        "mix/lib/echarts/map/js/province/tianjin.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/tianjin.js"
        },
        "mix/lib/echarts/map/js/province/xianggang.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/xianggang.js"
        },
        "mix/lib/echarts/map/js/province/xinjiang.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/xinjiang.js"
        },
        "mix/lib/echarts/map/js/province/xizang.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/xizang.js"
        },
        "mix/lib/echarts/map/js/province/yunnan.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/yunnan.js"
        },
        "mix/lib/echarts/map/js/province/zhejiang.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/province/zhejiang.js"
        },
        "mix/lib/echarts/map/js/world.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/map/js/world.js"
        },
        "mix/lib/echarts/map/json/china-contour.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/china-contour.json"
        },
        "mix/lib/echarts/map/json/china.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/china.json"
        },
        "mix/lib/echarts/map/json/province/anhui.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/anhui.json"
        },
        "mix/lib/echarts/map/json/province/aomen.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/aomen.json"
        },
        "mix/lib/echarts/map/json/province/beijing.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/beijing.json"
        },
        "mix/lib/echarts/map/json/province/chongqing.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/chongqing.json"
        },
        "mix/lib/echarts/map/json/province/fujian.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/fujian.json"
        },
        "mix/lib/echarts/map/json/province/gansu.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/gansu.json"
        },
        "mix/lib/echarts/map/json/province/guangdong.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/guangdong.json"
        },
        "mix/lib/echarts/map/json/province/guangxi.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/guangxi.json"
        },
        "mix/lib/echarts/map/json/province/guizhou.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/guizhou.json"
        },
        "mix/lib/echarts/map/json/province/hainan.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/hainan.json"
        },
        "mix/lib/echarts/map/json/province/hebei.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/hebei.json"
        },
        "mix/lib/echarts/map/json/province/heilongjiang.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/heilongjiang.json"
        },
        "mix/lib/echarts/map/json/province/henan.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/henan.json"
        },
        "mix/lib/echarts/map/json/province/hubei.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/hubei.json"
        },
        "mix/lib/echarts/map/json/province/hunan.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/hunan.json"
        },
        "mix/lib/echarts/map/json/province/jiangsu.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/jiangsu.json"
        },
        "mix/lib/echarts/map/json/province/jiangxi.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/jiangxi.json"
        },
        "mix/lib/echarts/map/json/province/jilin.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/jilin.json"
        },
        "mix/lib/echarts/map/json/province/liaoning.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/liaoning.json"
        },
        "mix/lib/echarts/map/json/province/neimenggu.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/neimenggu.json"
        },
        "mix/lib/echarts/map/json/province/ningxia.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/ningxia.json"
        },
        "mix/lib/echarts/map/json/province/qinghai.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/qinghai.json"
        },
        "mix/lib/echarts/map/json/province/shandong.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/shandong.json"
        },
        "mix/lib/echarts/map/json/province/shanghai.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/shanghai.json"
        },
        "mix/lib/echarts/map/json/province/shanxi.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/shanxi.json"
        },
        "mix/lib/echarts/map/json/province/shanxi1.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/shanxi1.json"
        },
        "mix/lib/echarts/map/json/province/sichuan.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/sichuan.json"
        },
        "mix/lib/echarts/map/json/province/tianjin.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/tianjin.json"
        },
        "mix/lib/echarts/map/json/province/xianggang.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/xianggang.json"
        },
        "mix/lib/echarts/map/json/province/xinjiang.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/xinjiang.json"
        },
        "mix/lib/echarts/map/json/province/xizang.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/xizang.json"
        },
        "mix/lib/echarts/map/json/province/yunnan.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/yunnan.json"
        },
        "mix/lib/echarts/map/json/province/zhejiang.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/province/zhejiang.json"
        },
        "mix/lib/echarts/map/json/world.json": {
            "url": "/mix-dashboard/static/mix/lib/echarts/map/json/world.json"
        },
        "mix/lib/echarts/theme/dark.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/theme/dark.js"
        },
        "mix/lib/echarts/theme/vintage.js": {
            "deps": [
                "echarts"
            ],
            "url": "/mix-dashboard/static/mix/lib/echarts/theme/vintage.js"
        },
        "mix/lib/font-awesome/css/font-awesome.css": {
            "url": "./static/mix/lib/font-awesome/css/font-awesome.css"
        },
        "mix/lib/font-awesome/fonts/FontAwesome.otf": {
            "url": "/mix-dashboard/static/mix/lib/font-awesome/fonts/FontAwesome.otf"
        },
        "mix/lib/font-awesome/fonts/fontawesome-webfont.eot": {
            "url": "/mix-dashboard/static/mix/lib/font-awesome/fonts/fontawesome-webfont.eot"
        },
        "mix/lib/font-awesome/fonts/fontawesome-webfont.svg": {
            "url": "/mix-dashboard/static/mix/lib/font-awesome/fonts/fontawesome-webfont.svg"
        },
        "mix/lib/font-awesome/fonts/fontawesome-webfont.ttf": {
            "url": "/mix-dashboard/static/mix/lib/font-awesome/fonts/fontawesome-webfont.ttf"
        },
        "mix/lib/font-awesome/fonts/fontawesome-webfont.woff": {
            "url": "/mix-dashboard/static/mix/lib/font-awesome/fonts/fontawesome-webfont.woff"
        },
        "mix/lib/font-awesome/fonts/fontawesome-webfont.woff2": {
            "url": "/mix-dashboard/static/mix/lib/font-awesome/fonts/fontawesome-webfont.woff2"
        },
        "mix/lib/google/font/font.less": {
            "url": "/mix-dashboard/static/mix/lib/google/font/font.css"
        },
        "mix/lib/google/font/pacifico.woff2": {
            "url": "/mix-dashboard/static/mix/lib/google/font/pacifico.woff2"
        },
        "mix/lib/mod/mod.js": {
            "url": "/mix-dashboard/static/mix/lib/mod/mod.js"
        },
        "mix/lib/syntaxhighlighter/XRegExp.js": {
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/XRegExp.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushAS3.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushAS3.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushAppleScript.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushAppleScript.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushBash.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushBash.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushCSharp.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushCSharp.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushColdFusion.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushColdFusion.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushCpp.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushCpp.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushCss.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushCss.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushDelphi.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushDelphi.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushDiff.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushDiff.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushErlang.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushErlang.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushGroovy.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushGroovy.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushJScript.js": {
            "deps": [
                "mix/lib/syntaxhighlighter/shCore.js"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushJScript.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushJava.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushJava.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushJavaFX.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushJavaFX.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushPerl.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushPerl.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushPhp.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushPhp.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushPlain.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushPlain.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushPowerShell.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushPowerShell.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushPython.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushPython.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushRuby.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushRuby.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushSass.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushSass.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushScala.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushScala.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushSql.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushSql.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushVb.js": {
            "deps": [
                "shCore"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushVb.js"
        },
        "mix/lib/syntaxhighlighter/scripts/shBrushXml.js": {
            "deps": [
                "mix/lib/syntaxhighlighter/shCore.js"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/scripts/shBrushXml.js"
        },
        "mix/lib/syntaxhighlighter/shAutoloader.js": {
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/shAutoloader.js"
        },
        "mix/lib/syntaxhighlighter/shCore.js": {
            "deps": [
                "mix/lib/syntaxhighlighter/XRegExp.js",
                "mix/lib/syntaxhighlighter/shCore.less"
            ],
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/shCore.js"
        },
        "mix/lib/syntaxhighlighter/shCore.less": {
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/shCore.css"
        },
        "mix/lib/syntaxhighlighter/shLegacy.js": {
            "url": "/mix-dashboard/static/mix/lib/syntaxhighlighter/shLegacy.js"
        },
        "mix/lib/syntaxhighlighter/styles/shCoreDefault.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shCoreDefault.css"
        },
        "mix/lib/syntaxhighlighter/styles/shCoreDjango.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shCoreDjango.css"
        },
        "mix/lib/syntaxhighlighter/styles/shCoreEclipse.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shCoreEclipse.css"
        },
        "mix/lib/syntaxhighlighter/styles/shCoreEmacs.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shCoreEmacs.css"
        },
        "mix/lib/syntaxhighlighter/styles/shCoreFadeToGrey.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shCoreFadeToGrey.css"
        },
        "mix/lib/syntaxhighlighter/styles/shCoreMDUltra.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shCoreMDUltra.css"
        },
        "mix/lib/syntaxhighlighter/styles/shCoreMidnight.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shCoreMidnight.css"
        },
        "mix/lib/syntaxhighlighter/styles/shCoreRDark.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shCoreRDark.css"
        },
        "mix/lib/syntaxhighlighter/styles/shThemeDefault.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shThemeDefault.css"
        },
        "mix/lib/syntaxhighlighter/styles/shThemeDjango.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shThemeDjango.css"
        },
        "mix/lib/syntaxhighlighter/styles/shThemeEclipse.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shThemeEclipse.css"
        },
        "mix/lib/syntaxhighlighter/styles/shThemeEmacs.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shThemeEmacs.css"
        },
        "mix/lib/syntaxhighlighter/styles/shThemeFadeToGrey.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shThemeFadeToGrey.css"
        },
        "mix/lib/syntaxhighlighter/styles/shThemeMDUltra.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shThemeMDUltra.css"
        },
        "mix/lib/syntaxhighlighter/styles/shThemeMidnight.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shThemeMidnight.css"
        },
        "mix/lib/syntaxhighlighter/styles/shThemeRDark.css": {
            "url": "./static/mix/lib/syntaxhighlighter/styles/shThemeRDark.css"
        },
        "mix/mix.js": {
            "deps": [
                "mix/lib/angular/angular.js",
                "mix/lib/angular-ui-router/angular-ui-router.js",
                "mix/lib/angular-couch-potato/angular-couch-potato.js",
                "mix/lib/angular-ui-bootstrap/ui-bootstrap-tpls.js",
                "mix/lib/angular-file-upload/angular-file-upload.js",
                "mix/mix.less"
            ],
            "url": "/mix-dashboard/static/mix/mix.js"
        },
        "mix/mix.less": {
            "deps": [
                "mix/pygments.less",
                "mix/css/table.less",
                "mix/lib/bootstrap/css/bootstrap.css",
                "mix/lib/font-awesome/css/font-awesome.css",
                "mix/lib/google/font/font.less"
            ],
            "url": "/mix-dashboard/static/mix/mix.css"
        },
        "mix/pygments.less": {
            "url": "/mix-dashboard/static/mix/pygments.css"
        }
    },
    "pkg": {}
});