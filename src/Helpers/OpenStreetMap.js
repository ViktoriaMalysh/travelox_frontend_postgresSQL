import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "../assets/leaf-green.png";
import _ from "lodash";

const locationIcon = L.icon({
  iconUrl: icon,
  iconSize: [55, 55], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

function OpenStreetMap({ coordinates, type }) {
  useEffect(() => {
    if (type === "one-accomm") {
      //one-accomm
      const points = coordinates.split(/\s*, \s*/).map((item) => Number(item));
      var map = L.map("search-results-map-cover").setView(points, 10);
      L.circle(points, { radius: 10000 }).addTo(map);
    } else if (type === "list-accomm") {
      //list-accomm
      let lat = -100;
      let lng = -100;
      let parseCoordinates = _.compact(coordinates);
      parseCoordinates.forEach((item) => {
        const location = item.split(/\s*, \s*/).map((item) => Number(item));

        if (location[0] > lat) {
          lat = location[0];
        }
        if (location[1] > lng) {
          lng = location[1];
        }
      });

      var map = L.map("search-results-map-cover").setView([lat, lng], 5);

      parseCoordinates.forEach((item) => {
        const location = item.split(/\s*, \s*/).map((item) => Number(item));
        L.marker(location, { icon: locationIcon }).addTo(map);
      });
    }

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  }, []);

  return <div id="search-results-map-cover"></div>;
}

export default OpenStreetMap;
