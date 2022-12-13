// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
// See https://www.arcgis.com/home/copyright.txt for further details.
(function () {

  var DEPLOY_ROOT = location.protocol + "//" + location.host + "/home/";

  window.esriGeowConfig = {
    baseUrl: DEPLOY_ROOT,
    webmapViewerPath: "webmap/viewer.html",
    dojoBaseUrl: DEPLOY_ROOT + "/js/dojo/",
    proxyUrl: "",
    proxyServer: location.protocol + "//" + location.host + "/sharing/proxy",
    restBaseUrl: location.protocol + "//" + location.host + "/sharing/rest/",
    reflectorUrl: location.protocol + "//" + location.host + "/sharing/tools/reflect",
    bridgeUrl: location.protocol + "//" + location.host + "/sharing/tools/bridge",
    marketplaceUrl: location.protocol + "//" + "marketplace.arcgis.com",
    storymapsUrl: location.protocol + "//" + "storymaps.arcgis.com",
    openDataUrl: location.protocol + "//" + "hub.arcgis.com/admin/",
    kmlService: location.protocol + "//utility.arcgis.com/sharing/kml",
    geoRSSService: location.protocol + "//utility.arcgis.com/sharing/rss",
    geoIPService: location.protocol + "//" + location.host + "/sharing/geoip.jsp",
    legend: location.protocol + "//utility.arcgis.com/sharing/tools/legend",
    agoStatusUrl: location.protocol + "//status.arcgis.com/json/agostatus.json",
    createImageryContentUrl: location.protocol + "../apps/orthomaker/#/createcontent",
    imageManagementUrl: location.protocol + "../apps/orthomaker/#/managedata",
    manageAreasUrl: location.protocol + "../apps/mapviewer/preplanned.html?webmap=",
    rasterFunctionEditor: location.protocol + "../../apps/rasterfunctioneditor/index.html",
    surveyUrl: location.protocol + "//" + "survey123.arcgis.com",
    insightsUrl: location.protocol + "//" + "insights.arcgis.com",
    urbanUrl: location.protocol + "//" + "urban.arcgis.com",
    webExperienceUrl: location.protocol + "//" + "experience.arcgis.com",
    iotViewerUrl: location.protocol + "//" + "velocity.arcgis.com",
    newMapViewerUrl: location.protocol + "//" + location.host + "/apps/mapviewer/index.html",
    downloadsUrl: "https://downloads.arcgis.com",
    isRightToLeft: false,
    cdnServerUrl: ".",
    notebookLandingEnabled: true,

    httpsDomains: ["arcgis.com", "arcgisonline.com", "esrikr.com", "premiumservices.blackbridge.com", "esripremium.accuweather.com", "gbm.digitalglobe.com", "firstlook.digitalglobe.com", "msi.digitalglobe.com","basemap.nationalmap.gov","nowcoast.noaa.gov"],
    agolServicesWithExportTilesAllowed: ["NatGeo_World_Map", "Ocean_Basemap", "USA_Topo_Maps", "World_Imagery", "World_Street_Map", "World_Terrain_Base", "World_Topo_Map", "World_Hillshade", "Canvas/World_Light_Gray_Base", "Canvas/World_Light_Gray_Reference", "Canvas/World_Dark_Gray_Base", "Canvas/World_Dark_Gray_Reference", "Ocean/World_Ocean_Base", "Ocean/World_Ocean_Reference", "Reference/World_Boundaries_and_Places", "Reference/World_Reference_Overlay", "Reference/World_Transportation"],
    embeddedViewerWhitelist: ["esri.com"],

    portalHeaderImage: null,
    explorerName: null,
    tokenExpiration: 120,
    longTokenExpiration: 20160,
    esriGlobalAccount: null,
    useDefaultIdentityStore: false,
    signin: "signin.html",
    signup: "signup.html",
    join: "join.html",
    setup: "setup.html",
    createAccount: "createaccount.html",
    showSocialMediaLinks: true,
    showHelpLink: true,
    showForumsLink: true,
    showBlogLink: true,
    showCoachMarksTours: true,
    addContentSecurityText: null,
    classificationBanner: false,
    bingMapsKey: "AgLRY1K-Tz0p3hXPpfytFj6Xetsboz7mFUzuRSukdStpzJi25lFitXYpiQZ-BeYY",
    telemetryConfig: "eyJkZXYiOnsidXNlclBvb2xJRCI6InVzLWVhc3QtMTo3MzQ1YmNmMi1iZmZhLTQ4NDktYTM3OS1hODMxNzhmNjNlZWYiLCJhcHBJZCI6IjgwMTcwNTc3ZTg5YjQzMmU4YWRhN2ViYjVhZWJmYmViIn0sInByb2R1Y3Rpb24iOnsidXNlclBvb2xJRCI6InVzLWVhc3QtMTo4YzQxYjJkYy03NTYzLTQwM2QtYmE2NC02NzNiMTAzZGViY2UiLCJhcHBJZCI6IjNmZWE3Y2I1ZTFmNzRjNDQ5MTNkYTM0MGExNWEzNjIzIn0sInFhIjp7InVzZXJQb29sSUQiOiJ1cy1lYXN0LTE6NzM0NWJjZjItYmZmYS00ODQ5LWEzNzktYTgzMTc4ZjYzZWVmIiwiYXBwSWQiOiI3OGYwM2VmMTVjNmM0MDQ1ODdmZjI3MTQ3ODZjOWViMyJ9fQ==",
    contentPageHiddenTypes: null,
    showForgotUsername: true,
    isMultiTenant: true,
    searchArcGISOnlineEnabled: false,
    publishVectorTilesFromFeaturesEnabled: true,
    federatedServerConfigEnabled: false,
    hostedServerConfigEnabled: false,
    webAppBuilderEnabled: true,
    webExperienceEnabled: true,
    sceneViewerEnabled: true,
    restrictOrganizationPageToAdmin: false,
    geocodeAutoComplete: true,
    multiFactorEnabled: true,
    portalAGOConfigEnabled: false,
    portalLivingAtlasConfigEnabled: false,
    configurePortalAGOEnv: "",
    creditBudgetingEnabled: true,
    purchasersEnabled: true,
    collaborationsEnabled: true,
    tilesOnDemandEnabled: true,
    systemUsers: [],
    showAnalysisSettings: false,
    showGeoAnalytics: false,
    showAnalysisHistory: false,
    usageTrackingEnabled: true,
    collaborationDeletePolicyEnabled: true,
    notebookServerEnabled: true,
    enablePublicBetaAccess: true,
    replaceLayerEnabled: true,
    notebookOpenMaxRequests: 1200,
    trackViewerEnabled: true,
    locationTrackingUIEnabled: true,
    newMapViewerEnabled: true,
    semanticSearchEnabled: true,
    hideTasks: true,
    notebookLoadedEventEnabled: false,
    dataStoreDetailsEnabled: true,
    ogcFeaturesEnabled: true,

    googleClientId: "553372665998-7l2nf81tcoc2g1dlfm3gca5b7g1hhbi8.apps.googleusercontent.com",
    dropboxClientId: "rkqvzvrpqucf6ty",
    oneDriveClientId: "89e830e1-0736-4d73-91ac-79c508138817",

    hideFieldsViewInDataTab: false,

    appSwitcherConfigItemQuery: "owner:\"esri\" AND title:\"AppSwitcher Config\" AND type: \"Application Configuration\"",
    licensesItemQuery: "owner:\"esri\" AND title:\"Licenses Config\" AND type: \"Application Configuration\"",
    downloadsConfigItemQuery: "owner:\"esri_pro_release\" AND title:\"Download config\" AND type: \"Application Configuration\"",
    blockedAppsConfigItemQuery: "owner:\"esri\" AND title:\"BlockedApps Config\" AND type: \"Application Configuration\"",
    showAccountSwitcher: true,
    showCreateDashboard: true,
    showInAppLauncher: ["Operations Dashboard for ArcGIS", "ArcGIS Sites"],

    bitlyUrl: "https://arcg.is/prod/shorten",
    bitlyUrlSSL: "https://arcg.is/prod/shorten",
    gcsBasemapService: location.protocol + "//services.arcgisonline.com/ArcGIS/rest/services/ESRI_Imagery_World_2D/MapServer",
    extentService: location.protocol + "//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
    explorerOnline: location.protocol + "//" + location.host + "/explorer",
    arcadeEditor: location.protocol + "//" + location.host + "/home/arcade-editor/index.html",
    vectorTileStyleEditor: location.protocol + "//" + location.host + "/apps/vtseditor/",
    vectorTileStylePreview: location.protocol + "//" + location.host + "/apps/mapviewer/vectorTileStylePreview.html",
    openTrackViewer: location.protocol + "//" + location.host + "/apps/trackviewer",
    resourceCenter: "http://resources.arcgis.com",
    account_edit: "https://webaccounts.esri.com/CAS/index.cfm?login=arcgis&apiKey=R_b8a169f3a8b978b9697f64613bf1db6d",
    forgotPwd: "https://webaccounts.esri.com/cas/index.cfm?fuseaction=Login.ForgotPwd.ShowForm&appId=RC10SB959G&FailURL=http%3A%2F%2Fwww.arcgis.com&ReturnURL=https%3A%2F%2Fwww.arcgis.com%2Fhome%2Fsignin.html",
    forums: "http://forums.arcgis.com/forums/30-ArcGIS-Online",
    blog: "http://blogs.esri.com/esri/arcgis/category/arcgis-online/",
    esriCommunityLink: "https://geonet.esri.com",
    myEsriLink: "https://my.esri.com",
    esriPreferencesPostLink: "https://go.esri.com/preferences?epc_hash=kSMMW5XCO_j0Z5U65bv1oCxwGHnQfT4ZA7dRTE-iJiA&pi_list_email=${email}",
    learnArcGIS: "https://learn.arcgis.com",
    userTypesBlogLink: "https://www.esri.com/arcgis-blog/products/arcgis-online/announcements/whats-coming-in-arcgis-online-introducing-user-types/",
    creditBudgetingExcludedSubscriptionTypes: ["Trial", "Trial Developer", "Developer", "HUP Online Entitlements"],
    discoverLinks: {
      try: "https://learn.arcgis.com/en/paths/try-arcgis-online/",
      create: "https://learn.arcgis.com/en/paths/mapping-and-visualization/",
      share: "https://learn.arcgis.com/en/paths/sharing-and-collaboration/",
      patterns: "https://learn.arcgis.com/en/paths/data-analysis/"
    },
    footerLinks: [
      {
        title: "${i18n.help}",
        url: "support.html"
      },
      {
        title: "${i18n.trustCenter}",
        url: "https://trust.arcgis.com"
      },
      {
        title: "${i18n.legal}",
        url: "https://www.esri.com/en-us/legal/overview"
      },
      {
        title: "${i18n.contactUs}",
        url: "http://www.esri.com/about-esri/contact"
      },
      {
        title: "${i18n.reportAbuse}",
        email: "arcgisonline_feedback@esri.com",
        type: "reportAbuse"
      }
    ],

    publisherESRI: "(owner:\"esri\" OR owner:\"esri_webapi\" OR owner:\"arcgis_explorer\" OR owner:\"SLDevTeam\" OR owner:\"ArcGISMobileDevTeam\" OR owner:\"iOSDevelopmentTeam\")",

    userInfo: "",

    googleServiceSearchString: "inurl:rest inurl:services \"Supported Interfaces\" -\"Folders\" -\"KMZ\" -\"GlobeServer\" -\"NAServer\" -\"GPServer\" -\"GeocodeServer\" -\"GeoDataServer\" -\"GeometryServer\"",

    contentModeCookieName: "contentModePrefs",

    viewQueries: {
      web: " -type:\"Layer\" -type: \"Map Document\" -type:\"Map Package\" -type:\"Basemap Package\" -type:\"Mobile Basemap Package\" -type:\"Mobile Map Package\" -type:\"ArcPad Package\" -type:\"Project Package\" -type:\"Project Template\" -type:\"Desktop Style\" -type:\"Pro Map\" -type:\"Layout\" -type:\"Explorer Map\" -type:\"Globe Document\" -type:\"Scene Document\" -type:\"Published Map\" -type:\"Map Template\" -type:\"Windows Mobile Package\" -type:\"Layer Package\" -type:\"Explorer Layer\" -type:\"Geoprocessing Package\" -type:\"Desktop Application Template\" -type:\"Code Sample\" -type:\"Geoprocessing Package\" -type:\"Geoprocessing Sample\" -type:\"Locator Package\" -type:\"Workflow Manager Package\" -type:\"Windows Mobile Package\" -type:\"Explorer Add In\" -type:\"Desktop Add In\" -type:\"File Geodatabase\" -type:\"Feature Collection Template\" -type:\"Map Area\" -typekeywords:\"MapAreaPackage\" -type:\"Indoors Map Configuration\"",
      gis: " -type:\"Code Attachment\" -type:\"Featured Items\" -type:\"Symbol Set\" -type:\"Color Set\" -type:\"Windows Viewer Add In\" -type:\"Windows Viewer Configuration\" -type:\"Map Area\" -typekeywords:\"MapAreaPackage\" -type:\"Indoors Map Configuration\" -typekeywords:\"SMX\"",
      none: " -type:\"Code Attachment\" -type:\"Featured Items\" -type:\"Symbol Set\" -type:\"Color Set\" -type:\"Windows Viewer Add In\" -type:\"Windows Viewer Configuration\" -type:\"Map Area\" -typekeywords:\"MapAreaPackage\" -type:\"Indoors Map Configuration\" -typekeywords:\"SMX\""
    },

    filterQueries: {
      "all": {
        focus: null,
        t: "content",
        f: ""
      },
      "maps": {
        focus: "maps",
        t: "content",
        f: "-type:\"web mapping application\" -type:\"Layer Package\" (type:\"Project Package\" OR type:\"Windows Mobile Package\" OR type:\"Map Package\" OR type:\"Basemap Package\" OR type:\"Mobile Basemap Package\" OR type:\"Mobile Map Package\" OR type:\"Pro Map\" OR type:\"Project Package\" OR type:\"Web Map\" OR type:\"CityEngine Web Scene\" OR type:\"Map Document\" OR type:\"Globe Document\" OR type:\"Scene Document\" OR type:\"Published Map\" OR type:\"Explorer Map\" OR type:\"ArcPad Package\" OR type:\"Map Template\")"
      },
      "scenes": {
        focus: "scenes",
        t: "content",
        f: "-type:\"CityEngine Web Scene\" (type:\"Web Scene\")"
      },
      "layers": {
        focus: "layers",
        t: "content",
        f: "-type:\"web mapping application\" -type:\"Geodata Service\" (type:\"Scene Service\" OR type: \"Feature Collection\" OR type: \"Route Layer\" OR type:\"Layer\" OR type: \"Explorer Layer\" OR type: \"Tile Package\" OR type:\"Vector Tile Package\" OR type: \"Scene Package\" OR type:\"Layer Package\" OR type:\"Feature Service\" OR type:\"Stream Service\" OR type:\"Map Service\" OR type:\"Vector Tile Service\" OR type:\"Image Service\" OR type:\"WMS\" OR type:\"WFS\" OR type:\"WMTS\"  OR type:\"KML\" OR typekeywords:\"OGC\" OR typekeywords:\"Geodata Service\" OR type:\"Globe Service\" OR type:\"CSV\" OR type: \"Shapefile\" OR type: \"GeoJson\" OR type: \"Service Definition\" OR type: \"File Geodatabase\" OR type: \"CAD Drawing\" OR type: \"Relational Database Connection\")"
      },
      "applications": {
        focus: "applications",
        t: "content",
        f: "(type:\"Code Sample\" OR type:\"Web Mapping Application\" OR type:\"Mobile Application\" OR type:\"Application\" OR type:\"Desktop Application Template\" OR type:\"Desktop Application\" OR type:\"Operation View\" OR type:\"Dashboard\" OR type:\"Operations Dashboard Extension\" OR type:\"Workforce Project\" OR type:\"Insights Workbook\" OR type:\"Insights Page\" OR type:\"Insights Model\" OR type:\"Hub Initiative\" OR type:\"Hub Site Application\" OR type:\"Hub Page\")"
      },
      "tools": {
        focus: "tools",
        t: "content",
        f: "-type:\"KML\" (typekeywords:\"tool\" OR type:\"Raster function template\" OR type:\"Geodata Service\" OR type: \"Workflow Manager Package\" OR type:\"Rule Package\" OR type:\"Operations Dashboard Add In\" OR type:\"Workflow Manager Service\" OR type:\"ArcGIS Pro Configuration\")"
      },
      "files": {
        focus: "files",
        t: "content",
        f: "(typekeywords:\"Document\" OR type:\"Image\" OR type:\"Layout\" OR type:\"Desktop Style\" OR type:\"Project Template\" OR type:\"Report Template\" OR type:\"Statistical Data Collection\" OR type:\"360 VR Experience\") -type:\"Map Document\" -type:\"Image Service\" -type:\"Explorer Document\" -type:\"Explorer Map\" -type:\"Globe Document\" -type:\"Scene Document\""
      },
      "maps-webmaps": {
        focus: "maps",
        t: "content",
        f: "(type:\"Web Map\" OR type:\"CityEngine Web Scene\") -type:\"Web Mapping Application\" -(owner:\"esri\" tags:\"basemap\")"
      },
      "maps-mapfiles": {
        focus: "maps",
        t: "content",
        f: "(type:\"Map Document\" OR type:\"Windows Mobile Package\" OR type:\"Globe Document\" OR type:\"Scene Document\"  OR type:\"Published Map\" OR type:\"Explorer Map\" OR type:\"ArcPad Package\" OR type:\"Map Package\" OR type:\"Basemap Package\" OR type:\"Mobile Basemap Package\" OR type:\"Mobile Map Package\" OR type:\"Pro Map\" OR type:\"Project Package\" OR type:\"Map Template\")"
      },
      "maps-mapservices": {
        focus: "maps",
        t: "content",
        f: "(type:\"WMS\" OR type:\"WMTS\" OR type:\"KML\" OR type:\"Map Service\" OR type:\"Image Service\" OR type:\"Feature Service\" OR type:\"Globe Service\")"
      },
      "maps-packages": {
        focus: "maps",
        t: "content",
        f: "(type:\"Layer Package\" OR type:\"Map Package\" OR type:\"Basemap Package\" OR type:\"Mobile Basemap Package\" OR type:\"Mobile Map Package\" OR type:\"Project Package\" OR type:\"Tile Package\" OR type:\"Scene Package\")"
      },
      "maps-others": {
        focus: "maps",
        t: "content",
        f: "(type:\"Shapefile\" OR type:\"GeoJson\" OR type:\"CSV\" OR type:\"Explorer Map\" OR type:\"Map Document\" OR type:\"Globe Document\" OR type:\"Scene Document\" OR type:\"Layer\" OR type:\"Explorer Layer\" OR type:\"Explorer Map\" OR type:\"Published Map\" OR type:\"CAD Drawing\") -type:\"Layer Package\""
      },
      "maps-packages-layer": {
        focus: "maps",
        t: "content",
        f: "type:\"Layer Package\""
      },
      "maps-packages-map": {
        focus: "maps",
        t: "content",
        f: "type:\"Map Package\""
      },
      "layers-weblayers": {
        focus: "layers",
        t: "content",
        f: "(type:\"Feature Collection\" OR type:\"Feature Service\" OR type:\"Image Service\" OR type:\"Map Service\" OR type:\"Vector Tile Service\" OR type:\"Scene Service\" OR type:\"Stream Service\" OR type: \"WMS\" OR type: \"WMTS\" OR type: \"WFS\"  OR type: \"KML\") -type:\"Web Map\" -type:\"Web Mapping Application\" -type:\"Shapefile\""
      },
      "layers-weblayers-features": {
        focus: "layers",
        t: "content",
        f: "(type:\"Feature Collection\" OR type:\"Feature Service\" OR type:\"Stream Service\" OR type:\"WFS\") -typekeywords:\"Table\""
      },
      "layers-weblayers-imagery": {
        focus: "layers",
        t: "content",
        f: "(type:\"Image Service\")"
      },
      "layers-weblayers-tiles": {
        focus: "layers",
        t: "content",
        f: "(type:\"WMTS\" OR type:\"Map Service\" OR type:\"Vector Tile Service\") (typekeywords: \"Hosted\" OR typekeywords:\"Tiled\")"
      },
      "layers-weblayers-mapimage": {
        focus: "layers",
        t: "content",
        f: "(type:\"Map Service\"  OR type: \"WMS\") -typekeywords:\"Tiled\" -typekeywords:\"Hosted\" -type:\"Web Map\" -type:\"Web Mapping Application\" -type:\"Shapefile\""
      },
      "layers-layerfiles": {
        focus: "layers",
        t: "content",
        f: "(type: \"Layer\" OR type: \"Explorer Layer\" OR type: \"Tile Package\" OR type:\"Vector Tile Package\" OR type: \"Scene Package\" OR type:\"Layer Package\" OR type:\"CSV\" OR type: \"Shapefile\" OR type: \"GeoJson\" OR type: \"Service Definition\" OR type: \"File Geodatabase\" OR type: \"CAD Drawing\") -type:\"Explorer Maps\" -type:\"Map Documents\""
      },
      "layers-weblayers-scenelayers": {
        focus: "layers",
        t: "content",
        f: "(type:\"Scene Service\")"
      },
      "layers-weblayers-tables": {
        focus: "layers",
        t: "content",
        f: "(typekeywords:\"Table\")"
      },
      "applications-web": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" OR type:\"Dashboard\")"
      },
      "applications-web-flex": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" typekeywords:\"Flex\")"
      },
      "applications-web-flex-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-web-flex-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Configurable\")"
      },
      "applications-web-flex-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Code Sample\")"
      },

      "applications-web-javascript": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Javascript\")"
      },
      "applications-web-javascript-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Javascript\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-web-javascript-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Javascript\" AND typekeywords:\"Configurable\")"
      },
      "applications-web-javascript-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Javascript\" AND typekeywords:\"Code Sample\")"
      },

      "applications-web-silverlight": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Silverlight\")"
      },
      "applications-web-silverlight-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Silverlight\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-web-silverlight-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Silverlight\" AND typekeywords:\"Configurable\")"
      },
      "applications-web-silverlight-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Web Mapping Application\" AND typekeywords:\"Silverlight\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile": {
        focus: "applications",
        t: "content",
        f: "type:\"Mobile Application\""
      },

      "applications-mobile-iphone": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for iPhone\")"
      },
      "applications-mobile-iphone-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for iPhone\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-iphone-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for iPhone\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-iphone-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"ArcGIS for iPhone\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-windowsmobile": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Mobile\")"
      },
      "applications-mobile-windowsmobile-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Mobile\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-windowsmobile-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Mobile\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-windowsmobile-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Mobile\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-windowsphone": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Phone\")"
      },
      "applications-mobile-windowsphone-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Phone\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-windowsphone-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Phone\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-windowsphone-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Windows Phone\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-android": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Android\")"
      },
      "applications-mobile-android-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Android\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-android-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Android\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-android-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Android\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-javascript": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"JavaScript\")"
      },
      "applications-mobile-javascript-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"JavaScript\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-javascript-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"JavaScript\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-javascript-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"JavaScript\" AND typekeywords:\"Code Sample\")"
      },

      "applications-mobile-flex": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Flex\")"
      },
      "applications-mobile-flex-readytouse": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Ready To Use\")"
      },
      "applications-mobile-flex-configurable": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Configurable\")"
      },
      "applications-mobile-flex-codesample": {
        focus: "applications",
        t: "content",
        f: "(type:\"Mobile Application\" AND typekeywords:\"Flex\" AND typekeywords:\"Code Sample\")"
      },

      "applications-desktop": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" -type:\"Desktop Application Template\")"
      },

      "applications-desktop-java": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" AND typekeywords:\"Java\")"
      },

      "applications-desktop-dotnet": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" AND typekeywords:\".NET-Windows Desktop\")"
      },

      "applications-desktop-osx": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" AND typekeywords:\"OS X\")"
      },

      "applications-desktop-qt": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" AND typekeywords:\"Qt\")"
      },

      "applications-desktop-wpf": {
        focus: "applications",
        t: "content",
        f: "(type:\"Desktop Application\" AND typekeywords:\"WPF\")"
      },

      "tools-locators": {
        focus: "tools",
        t: "content",
        f: "(type:\"Geocoding Service\" OR type:\"Locator Package\")"
      },
      "tools-geodatabase": {
        focus: "tools",
        t: "content",
        f: "type:\"Geodata Service\""
      },
      "tools-geometric": {
        focus: "tools",
        t: "content",
        f: "type:\"Geometry Service\""
      },
      "tools-geoprocessing": {
        focus: "tools",
        t: "content",
        f: "(type:\"Geoprocessing Service\" OR type:\"Geoprocessing Package\" OR type:\"Geoprocessing Sample\")"
      },
      "tools-network": {
        focus: "tools",
        t: "content",
        f: "type:\"Network Analysis Service\""
      },
      "files-document": {
        focus: "files",
        t: "content",
        f: "(typekeywords:\"Document\") -type:\"PDF\""
      },
      "files-pdf": {
        focus: "files",
        t: "content",
        f: "(type:\"PDF\")"
      },
      "files-image": {
        focus: "files",
        t: "content",
        f: "(type:\"Image\" OR type:\"360 VR Experience\") -type:\"Image Service\""
      }
    }
  };

  window.dojoConfig = {
    parseOnLoad: true,
    isDebug: false,
    addOnLoad: function () {
      var localeParts = window.dojoConfig.locale.split("-");
      document.documentElement.lang = window.dojoConfig.locale.indexOf("-") !== -1 ? [localeParts[0], localeParts[1].toUpperCase()].join("-") : localeParts[0];

      esriGeowConfig.cdnServerUrl = dojo.baseUrl.substring(0, dojo.baseUrl.indexOf("/js"));
      console.log("cdn server url: ", esriGeowConfig.cdnServerUrl);
    },
    has: {
      "dojo-bidi": true,
      "esri-featurelayer-webgl": 1
    },
    packages: [
      {
        name: "dojo",
        location: "../../jsapi/dojo"
      },
      {
        name: "dojox",
        location: "../../jsapi/dojox"
      },
      {
        name: "dijit",
        location: "../../jsapi/dijit"
      },
      {
        name: "esri",
        location: "../../jsapi/esri"
      },
      {
        name: "dgrid",
        location: "../../jsapi/dgrid"
      },
      {
        name: "dgrid1",
        location: "../../jsapi/dgrid1"
      },
      {
        name: "dstore",
        location: "../../jsapi/dstore"
      },
      {
        name: "put-selector",
        location: "../../jsapi/put-selector"
      },
      {
        name: "xstyle",
        location: "../../jsapi/xstyle"
      },
      {
        name: "arcgisonline",
        location: "../../arcgisonline"
      },
      {
        name: "moment",
        location: "../../jsapi/moment"
      },
      {
        name: "calcite-web",
        location: "../../calcite-web/dist"
      },
      {
        name: "telemetry",
        location: "../../arcgis-telemetry.js/dist"
      },
      {
        name: "esri-global-nav",
        location: "../../esri-global-nav/dist"
      },
      {
        name: "dragula",
        location: "../../dragula/dist"
      },
      {
        name: "arcgis-components",
        location: "../../arcgis-components/dist"
      },
      {
        name: "webpack-bundles",
        location: "../../webpack-bundles"
      },
      {
        name: "taginsert",
        location: "../../taginsert/dist"
      },
      {
        name: "preact",
        location: "../../preact",
        main: "preact"
      },
      {
        name: "markdown-it",
        location: "../../markdown-it/dist",
        main: "markdown-it.min"
      },
      {
        name: "arcgis-raster-function-editor",
        location: DEPLOY_ROOT + "../apps/rasterfunctioneditor/js"
      },
      {
        name: "azure-storage-blob",
        location: "../../azure-storage-blob",
        main: "index"
      }
    ]
  };
}());


(function () {

  function getUrlVars () {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split("=");
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }

  var nameEQ = "arcgisLocale" + "=";
  var localeCookie = "esri_locale" + "=";
  var ca = document.cookie.split(";");
  var qsLocale = getUrlVars()["lang"];
  var locale = qsLocale || (navigator.language ? navigator.language : navigator.userLanguage);
  var rtlLocales = ["ar", "he"];
  var i = 0;

  if (locale) {
    window.dojoConfig.locale = locale.toLowerCase();
  }
  loop1:
    for (i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(localeCookie) === 0) {
        locale = c.substring(localeCookie.length, c.length);
        if (locale) {
          window.dojoConfig.locale = locale.toLowerCase();
        }
        break loop1;
      }
      if (c.indexOf(nameEQ) === 0) {
        locale = c.substring(nameEQ.length, c.length);
        if (locale) {
          window.dojoConfig.locale = locale.toLowerCase();
        }
      }
    }

  if (document.URL.indexOf("locale") > -1) {
    var getValue = function (str, search) {
      var s = str.indexOf("&" + search + "=", 0);
      if (s === -1) {
        s = str.indexOf("?" + search + "=", 0);
      }
      if (s === -1) {
        return null;
      }
      var e = str.indexOf("&", s + 2);
      if (e === -1) {
        e = str.indexOf("#", s + 2);
      }
      if (e === -1) {
        e = str.length;
      }
      return str.substring(s + search.length + 2, e);
    };

    var val = getValue(document.URL, "locale");
    if (val) {
      window.dojoConfig.locale = locale = val.toLowerCase();
    }
  }

  for (i = 0; i < rtlLocales.length; i++) {
    var rLocale = rtlLocales[i];
    if (window.dojoConfig.locale && window.dojoConfig.locale.indexOf(rLocale) !== -1) {
      if (window.dojoConfig.locale.indexOf("-") !== -1) {
        if (window.dojoConfig.locale.indexOf(rLocale + "-") !== -1) {
          esriGeowConfig.isRightToLeft = true;
        }
      } else {
        esriGeowConfig.isRightToLeft = true;
      }
    }
  }

  var dirNode = document.documentElement;
  var localeParts = window.dojoConfig.locale.split("-");
  dirNode.lang = window.dojoConfig.locale.indexOf("-") !== -1 ? [localeParts[0], localeParts[1].toUpperCase()].join("-") : localeParts[0];
  if (esriGeowConfig.isRightToLeft) {
    dirNode.setAttribute("dir", "rtl");
    dirNode.className += " esriRtl";
  } else {
    dirNode.setAttribute("dir", "ltr");
    dirNode.className += " esriLtr";
  }
  dirNode.className += " " + window.dojoConfig.locale + " " + (window.dojoConfig.locale.indexOf("-") !== -1 ? localeParts[0] : "");

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) == variable) {
        return decodeURIComponent(pair[1]);
      }
    }
  }
  if (getQueryVariable("webgl") == "false") {
    window.dojoConfig.has["esri-featurelayer-webgl"] = 0;
  } else {
    var maxDrillLevel = Number(getQueryVariable("maxDrillLevel"));
    var maxRecordCountFactor = Number(getQueryVariable("maxRecordCountFactor"));
    var enablePBF = getQueryVariable("enablePBF") === "false" ? false : true;
    if (!isNaN(maxDrillLevel) && !isNaN(maxRecordCountFactor)) {
      window.dojoConfig.has["esri-featurelayer-webgl"] = {
        "maxDrillLevel": maxDrillLevel,
        "maxRecordCountFactor": maxRecordCountFactor,
        "enablePBFQuery": enablePBF
      };
    } else if (!isNaN(maxDrillLevel)) {
      window.dojoConfig.has["esri-featurelayer-webgl"] = {
        "maxDrillLevel": maxDrillLevel,
        "enablePBFQuery": enablePBF
      };
    } else if (!isNaN(maxRecordCountFactor)) {
      window.dojoConfig.has["esri-featurelayer-webgl"] = {
        "maxRecordCountFactor": maxRecordCountFactor,
        "enablePBFQuery": enablePBF
      };
    } else if (!enablePBF) {
      window.dojoConfig.has["esri-featurelayer-webgl"] = {
        "enablePBFQuery": false
      };
      window.dojoConfig.has["esri-featurelayer-pbf"] = false;
    }
  }

})();
