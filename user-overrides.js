//user_pref("browser.display.use_system_colors", true); // [DEFAULT: false NON-WINDOWS]
//user_pref("widget.non-native-theme.enabled", false); // [DEFAULT: true]
// * RFP also has a few side effects: mainly timezone is UTC, and websites will prefer light theme
user_pref("signon.rememberSignons", false);

// For Download Master Compatibility
//user_pref("browser.download.start_downloads_in_tmp_dir", false); // [FF102+]

/** DOWNLOADS ***/
/* 2651: enable user interaction for security by always asking where to download
 * [SETUP-CHROME] On Android this blocks longtapping and saving images
 * [SETTING] General>Downloads>Always ask you where to save files ***/
//user_pref("browser.download.useDownloadDir", true); // DEFAULT: false

/* 2652: disable downloads panel opening on every download [FF96+] ***/
//user_pref("browser.download.alwaysOpenPanel", true); // DEFAULT: false
/* 2653: disable adding downloads to the system's "recent documents" list ***/
//user_pref("browser.download.manager.addToRecentDocs", false);

/* 2654: enable user interaction for security by always asking how to handle new mimetypes [FF101+]
 * [SETTING] General>Files and Applications>What should Firefox do with other files ***/
//user_pref("browser.download.always_ask_before_handling_new_types", false); // DEFAULT: true

// user_pref("extensions.enabledScopes", 31) // [DEFAULT: 5]
//user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]

/* 1212: set OCSP fetch failures (non-stapled, see 1211) to hard-fail
 * [SETUP-WEB] SEC_ERROR_OCSP_SERVER_ERROR
 * When a CA cannot be reached to validate a cert, Firefox just continues the connection (=soft-fail)
 * Setting this pref to true tells Firefox to instead terminate the connection (=hard-fail)
 * It is pointless to soft-fail when an OCSP fetch fails: you cannot confirm a cert is still valid (it
 * could have been revoked) and/or you could be under attack (e.g. malicious blocking of OCSP servers)
 * [1] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
 * [2] https://www.imperialviolet.org/2014/04/19/revchecking.html ***/
// user_pref("security.OCSP.require", false); // DEFAULT: true
user_pref("browser.display.use_system_colors", true); // [DEFAULT: false NON-WINDOWS]
