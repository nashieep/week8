Boolean.prototype.toString = function() {
    return String(this.valueOf());
  };
  Number.prototype.toString = function() {
    return String(this.valueOf());
  };
  Array.prototype.toString = function() {
    return "[" + this.map(function(item) {
      return String(item);
    }).join(", ") + "]";
  };