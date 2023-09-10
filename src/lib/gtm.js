export const googleTagMnagerId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || '';

function initializeDataLayer() {
    if (!window.dataLayer) {
        window.dataLayer = [];
    }
}

export { initializeDataLayer };
