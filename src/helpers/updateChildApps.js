import routes from '@/routes.json';

const appList = routes.appList
const allowedDomainList = appList.map(app => app.appDomain)

function updateChildAppsNonSecure(msg) {
  try {
    // getting childApp window element
    const childApp = document.getElementsByTagName("iframe")[0].contentWindow;

    // postmessage to all app url with no checking
    childApp.postMessage(msg, '*');
  } catch(e) {
    console.error('error posting message to child apps', e);
  }
}

function updateChildApps(msg) {
  try {
    // getting childApp window element
    const childApp = document.getElementsByTagName("iframe")[0].contentWindow;

    // postmessage to all child app url one by one
    allowedDomainList.forEach(childAppUrl => {
      childApp.postMessage(msg, childAppUrl);
    });
  } catch(e) {
    console.error('error posting message to stitcher app', e);
  }
}

export { updateChildAppsNonSecure, updateChildApps };