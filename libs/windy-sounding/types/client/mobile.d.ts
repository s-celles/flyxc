/**
 * All these exports are exported in `window.W` object.
 *
 * Modules, that are use only internally, within core,
 * and act as dependency to some other module,
 * do not need to be listed here.
 *
 * Orphaned modules, that are not used anywhere,
 * and modules consumed by plugins, MUST be listed here.
 */
export * as errorLogger from './utils/errorLogger';
/**
const originalGetCurrentPosition = navigator.geolocation.getCurrentPosition;
navigator.geolocation.getCurrentPosition = (...args) => {
    alert(`XXX getCurrentPosition ${new Error().stack}`);
    debugger;
    originalGetCurrentPosition.call(navigator.geolocation, ...args);
};
// Monkey-patch watchPosition
const originalWatchPosition = navigator.geolocation.watchPosition;
navigator.geolocation.watchPosition = (...args) => {
    alert('XXX watchPosition');
    debugger;
    return originalWatchPosition.call(navigator.geolocation, ...args);
};
 */
import './leafletExt/CanvasLayer';
export * as Evented from './utils/Evented';
export * as css from './utils/css';
export * as fetch from './utils/fetch';
export * as format from './utils/format';
export * as ga from './utils/ga';
export * as http from './utils/http';
export * as log from './utils/log';
export { default as lruCache } from './utils/lruCache';
export { default as storage } from './utils/storage';
export * as subscription from './utils/subscription';
export * as utils from './utils/utils';
export * as IDB from './utils/IDB';
export * as idbInstances from './utils/idbInstances';
export * as Calendar from './weatherClasses/Calendar';
export * as Color from './weatherClasses/Color';
export * as EcmwfAnalysisProduct from './weatherClasses/EcmwfAnalysisProduct';
export * as EcmwfProduct from './weatherClasses/EcmwfProduct';
export * as HrrrProducts from './weatherClasses/HrrrProducts';
export * as IconProducts from './weatherClasses/IconProducts';
export * as Layer from './weatherClasses/Layer';
export * as Metric from './weatherClasses/Metric';
export * as MetricClasses from './weatherClasses/MetricClasses';
export * as NamProducts from './weatherClasses/NamProducts';
export * as Overlay from './weatherClasses/Overlay';
export * as OverlayClasses from './weatherClasses/OverlayClasses';
export * as Product from './weatherClasses/Product';
export * as SatelliteProduct from './weatherClasses/SatelliteProduct';
export * as StaticProduct from './weatherClasses/StaticProduct';
export { default as layers } from './weather/layers';
export { default as legends } from './weather/legends';
export { default as metrics } from './weather/metrics';
export * as models from './weather/models';
export { default as overlays } from './weather/overlays';
export { default as products } from './weather/products';
export { default as broadcast } from './services/broadcast';
export * as cloudSync from './services/cloudSync';
export { default as colors } from './services/colors';
export * as connection from './services/connection';
export { default as dataSpecifications } from './services/dataSpecifications';
export * as detectDevice from './services/detectDevice';
export * as device from './services/device';
export * as deviceLogging from './services/deviceLogging';
export * as geolocation from './services/geolocation';
export * as notifications from './services/notifications';
export * as ogTags from './services/ogTags';
export * as params from './services/params';
export * as pois from './services/pois';
export * as reverseName from './services/reverseName';
export * as rootScope from './services/rootScope';
export * as router from './services/router';
export { default as store } from './services/store';
export * as trans from './services/trans';
export * as userFavs from './services/userFavs';
export * as userAlerts from './services/userAlerts';
export * as userConsent from './services/userConsent';
export * as user from './services/user';
export * as Plugin from './pluginSystem/Plugin';
export * as SveltePanePlugin from './pluginSystem/SveltePanePlugin';
export * as SveltePlugin from './pluginSystem/SveltePlugin';
export * as ExternalSveltePlugin from './pluginSystem/ExternalSveltePlugin';
export * as TagPlugin from './pluginSystem/TagPlugin';
export * as WindowPlugin from './pluginSystem/WindowPlugin';
export { default as plugins } from './pluginSystem/plugins';
export * as pluginsCtrl from './pluginSystem/pluginsCtrl';
export * as externalPlugins from './pluginSystem/externalPlugins';
export * as BottomSlide from './uiClasses/BottomSlide';
export * as ClickHandler from './uiClasses/ClickHandler';
export * as Drag from './uiClasses/Drag';
export * as Swipe from './uiClasses/Swipe';
export * as Window from './uiClasses/Window';
export * as components from './ui/components';
export * as startupWeather from './ui/startupWeather';
export * as keyboard from './ui/keyboard';
export * as location from './ui/location';
export * as permanentPromos from './ui/permanentPromos';
export * as promo from './ui/promo';
export * as query from './ui/query';
export * as rhMessage from './ui/rhMessage';
export * as timeAnimation from './ui/timeAnimation';
export * as visibility from './ui/visibility';
export * as share from './ui/share';
export * as loadArticlesOrWhatsNew from './ui/loadArticlesOrWhatsNew';
export * as DataTiler from './renderClasses/DataTiler';
export * as Particles from './renderClasses/Particles';
export * as Renderer from './renderClasses/Renderer';
export * as TileLayer from './renderClasses/TileLayer';
export { default as TileLayerCanvas } from './renderClasses/TileLayerCanvas';
export * as dataLoader from './render/dataLoader';
export * as interpolator from './render/interpolator';
export { default as particleRenderers } from './render/particleRenderers';
export * as renderCtrl from './render/renderCtrl';
export * as renderUtils from './render/renderUtils';
export { default as renderers } from './render/renderers';
export * as tileInterpolator from './render/tileInterpolator';
export { default as glTileRender } from './render/glTileRender';
export * as renderTile from './render/renderTile';
export * as tileLayer from './render/tileLayerInstance';
export { default as GlObj } from './wgUtils/GlObj';
export { default as LabelsLayer } from './mapClasses/LabelsLayer';
export { default as LandMask } from './mapClasses/LandMask';
export { default as TileLayerMultiPatch } from './mapClasses/TileLayerMultiPatch';
export * as baseMap from './map/baseMap';
export * as cityLabels from './map/cityLabels';
export * as map from './map/map';
export * as mapGlobeCtrl from './map/mapGlobeCtrl';
export * as picker from './map/picker';
export * as singleclick from './map/singleclick';
export * as mobile from './capacitor/mobile';
export * as mobileUtils from './capacitor/mobileUtils';
export * as nativeStorage from './capacitor/nativeStorage';
export * as pushNotifications from './capacitor/pushNotifications';
export * as appsFlyer from './capacitor/appsFlyer';
export * as showableErrorsService from './capacitor/showableErrorsService';
export * as seoParser from './dummyModules/seoParser';
import './ui/patchAndPromoCtrl';
import './ui/storeLastPosition';
import './services/customColors';
