
function searchLocation() {
    const apiKey = '558567e8d5f04bc68b1e2668a2572681';
    const locationInput = document.getElementById('locationInput').value;

    // Construct the Geoapify Geocoding API URL
    const apiUrl = `https://api.geoapify.com/v1/geocoding/search?text=${encodeURIComponent(locationInput)}&apiKey=${apiKey}`;

    // Make a request to the Geoapify Geocoding API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.features && data.features.length > 0) {
          const result = data.features[0];
          const formattedAddress = result.properties.formatted;
          const location = result.geometry.coordinates;

          // Display the formatted address and location on the map
          document.getElementById('map').innerHTML = `<p>Formatted Address: ${formattedAddress}</p>`;
          initMap(location);
        } else {
          alert('Make sure your location is turned on!!');
        }
      })
      .catch(error => console.error('Error:', error));
  }

  function initMap(location) {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: location[1], lng: location[0] },
      zoom: 12
    });

    // Add a marker to the map
    new google.maps.Marker({
      position: { lat: location[1], lng: location[0] },
      map: map,
      title: 'Location'
    });
  }

