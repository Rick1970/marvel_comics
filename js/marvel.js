function Comic(testComic) {
  this.comic = testComic;
}

Comic.prototype.test=function(test) {
  return test;
};

exports.comicModule = Comic;
