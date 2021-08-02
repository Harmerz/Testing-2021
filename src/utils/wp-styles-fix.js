const stylesheets = document.querySelectorAll('link[rel=stylesheet]');

// let count = 0;

stylesheets.forEach((element) => {
    if (/^(dt|the7)-/.test(element.id) && !element.id.includes('main')) {
        element.remove();
        // count += 1;
    }
});
// console.log(`Removed ${count} conflicting stylesheet tags!`);

// Finally, remove the way-too-many excess classnames from the body element
document.body.removeAttribute('class');
