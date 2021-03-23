let fingerprintjs;
function initFingerprintJS() {
    FingerprintJS.load().then(fp => {
        // The FingerprintJS agent is ready.
        // Get a visitor identifier when you'd like to.
        fp.get().then(result => {
            // This is the visitor identifier:
            const visitorId = result.visitorId;
            console.log(visitorId);
            fingerprints = visitorId
        });
    });
}

let referrer = document.referrer;
let useragent = navigator.userAgent;
let current_page_name = window.location.href;
let page_source = document.referrer;
initFingerprintJS();

const postTrackUser = async () => {
    try {
        const resPost = await axios.post(urlcualquieraquenotienequeexistir, { useragent, referrer, fingerprints, page_source })
        //const post = await resPost.json()
        const postData = resPost.data;
        console.log(postData)
    } catch (err) {
        console.log(err);
    }
}