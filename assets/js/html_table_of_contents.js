/**
 * Generates a table of contents for your document based on the headings
 *  present (edit: the heading in the id "content").
 *  Anchors are injected into the document and the
 *  entries in the table of contents are linked to them. The table of
 *  contents will be generated inside of the first element with the id `table_of_content`.
 * @param {HTMLDOMDocument} documentRef Optional A reference to the document
 *  object. Defaults to `document`.
 * @author Matthew Christopher Kastor-Inare III Darenn Keller
 * @version 20130726
 * @example
 * // call this after the page has loaded
 * htmlTableOfContents();
 */
function htmlTableOfContents (documentRef) {
    var documentRef = documentRef || document;
    var toc = documentRef.getElementById('table_of_content');
    toc.parentNode.style.visibility = "visible";
    var content = documentRef.getElementById('content');
    var headings = [].slice.call(content.querySelectorAll('h1, h2, h3, h4, h5, h6'));

    headings.forEach(function (heading, index) {

        // Add an anchor to the header
        var anchor = documentRef.createElement('a');
        anchor.classList.add("anchor");
        anchor.setAttribute('name', heading.innerHTML.replace(/\s/g, '-'));
        anchor.setAttribute('id', heading.innerHTML.replace(/\s/g, '-'));
        heading.parentNode.insertBefore(anchor, heading);

        // Create a link pointing to the anchor
        var link = documentRef.createElement('a');
        link.setAttribute('href', '#'+ heading.innerHTML.replace(/\s/g, '-'));
        link.textContent = heading.textContent;

        var div = documentRef.createElement('div');
        div.setAttribute('class', heading.tagName.toLowerCase());

        div.appendChild(link);
        toc.appendChild(div);
        
    });
}

try {
     module.exports = htmlTableOfContents;
} catch (e) {
    // module.exports is not defined
}
