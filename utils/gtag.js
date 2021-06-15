export const GA_TRACKING_ID = 'G-K90QLYFF0M' // This is your GA Tracking ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}