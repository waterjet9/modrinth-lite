// Ads removed in this build. These stubs keep the old call sites working
// without ever creating the ad webview or talking to the ads plugin.

export async function init_ads_window() {}

export async function take_ads_window_hold() {}

export async function release_ads_window_hold() {}

export async function hide_ads_window() {}

export async function should_show_ads_consent_popup() {
	return false
}

export async function perform_ads_consent_action() {}

export async function open_ads_consent_preferences() {}

export async function record_ads_click() {}

export async function open_ads_link() {}

export async function get_ads_debug_state() {
	return null
}
