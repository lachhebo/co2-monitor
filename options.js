// Saves options to chrome.storage
function save_options() {
  var country = document.getElementById('country').value;
  var region = document.getElementById('region').value;
  chrome.storage.sync.set({
    country: country,
    region: region
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    country: 'France',
    region: 'Europe'
  }, function(items) {
    document.getElementById('country').value = items.favoriteColor;
    document.getElementById('region').checked = items.likesColor;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);