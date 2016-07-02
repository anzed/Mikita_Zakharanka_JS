function getFromTags (text) {
    var reg = /<.*?>/gi;
    var result = text.replace(reg, '');

    return console.log(result);
}

getFromTags("<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>");
