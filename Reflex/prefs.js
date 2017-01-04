// deal with options
(function() {
  var console = chrome.extension.getBackgroundPage().console;
  window.reflex = window.reflex || {};

  reflex.Prefs = function() {
    this._settings = {
      options: {
        notifications: false
      }
    }
  };

  reflex.Prefs.prototype = {
    _get: function(key, cb) {
      chrome.storage.sync.get(this._settings, (store) => {
        cb(store.options[key]);
      });
    },
    _set: function(key, val) {
      chrome.storage.sync.get(this._settings, (store) => {
        store.options[key] = val;
        chrome.storage.sync.set(store);
      });
    },
    _getSync: function(key) {
      chrome.storage.sync.get(this._settings, (store) => {
        return (store.options[key]);
      });
    },
    checkSettings: function() {
      chrome.storage.sync.get(this._settings, (store) => {
        console.log(store);
      });
    }
  };
})();
