//user_pref("browser.display.use_system_colors", true); // [DEFAULT: false NON-WINDOWS]
//user_pref("widget.non-native-theme.enabled", false); // [DEFAULT: true]
// * RFP also has a few side effects: mainly timezone is UTC, and websites will prefer light theme
user_pref("signon.rememberSignons", false);

// For Download Master Compatibility
user_pref("browser.download.start_downloads_in_tmp_dir", false); // [FF102+]

/** DOWNLOADS ***/
/* 2651: enable user interaction for security by always asking where to download
 * [SETUP-CHROME] On Android this blocks longtapping and saving images
 * [SETTING] General>Downloads>Always ask you where to save files ***/
user_pref("browser.download.useDownloadDir", true); // DEFAULT: false

/* 2652: disable downloads panel opening on every download [FF96+] ***/
//user_pref("browser.download.alwaysOpenPanel", true); // DEFAULT: false
/* 2653: disable adding downloads to the system's "recent documents" list ***/
//user_pref("browser.download.manager.addToRecentDocs", false);

/* 2654: enable user interaction for security by always asking how to handle new mimetypes [FF101+]
 * [SETTING] General>Files and Applications>What should Firefox do with other files ***/
user_pref("browser.download.always_ask_before_handling_new_types", false); // DEFAULT: true

// user_pref("extensions.enabledScopes", 31) // [DEFAULT: 5]
//user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]