function getDecimal(value) {
  if (typeof value !== "undefined") {
    return parseFloat(value.toString());
  }
  return value;
}

var yekevs;
$.ajax({
  url: "/winery",
  type: "GET",
}).then((res) => {
  yekevs = res;
});

var map, clusterLayer, infobox;

function GetMap() {
  map = new Microsoft.Maps.Map("#myMap", {});
  infobox = new Microsoft.Maps.Infobox(map.getCenter(), { visible: false });
  infobox.setMap(map);

  Microsoft.Maps.loadModule("Microsoft.Maps.Clustering", function () {
    clusterLayer = new Microsoft.Maps.ClusterLayer(createPins(), {
      clusteredPinCallback: createPinsCluster,
      callback: createPinList,
    });

    Microsoft.Maps.Events.addHandler(clusterLayer, "click", pushpinClicked);

    map.layers.insert(clusterLayer);
  });
}

function createPins() {
  pins = [];
  yekevs.forEach((yekev) => {
    var lon = getDecimal(yekev.coordinates.lon["$numberDecimal"]);
    var lat = getDecimal(yekev.coordinates.lat["$numberDecimal"]);
    var pin = new Microsoft.Maps.Pushpin(
      new Microsoft.Maps.Location((latitude = lat), (longitude = lon)),
      {
        icon: "/images/wine.png",
        anchor: new Microsoft.Maps.Point(0, 0),
      }
    );
    pin.setOptions({ title: yekev.name });
    pins.push(pin);
  });

  return pins;
}

function createPinsCluster(cluster) {
  cluster.setOptions({
    title: "Cluster of " + cluster.containedPushpins.length + " wineries",
  });
}

function pushpinClicked(e) {
  popInfobox(e.target);
}

function createPinList() {
  if (clusterLayer != null) {
    infobox.setOptions({ visible: false });
    var data = clusterLayer.getDisplayedPushpins();
    var output = [];

    for (var i = 0; i < data.length; i++) {
      output.push(
        `<a href="javascript:void(0);" onclick="showInfoboxByGridKey(", data[i].gridKey, ");">`
      );
      output.push(data[i].getTitle(), "</a><br/>");
    }
  }
}

function showInfoboxByGridKey(gridKey) {
  var clusterPin = clusterLayer.getClusterPushpinByGridKey(gridKey);
  popInfobox(clusterPin);
}

function popInfobox(pin) {
  var description = [];
  if (pin.containedPushpins) {
    description.push(`<div style="max-height:75px;overflow-y:auto;"><ul>`);
    for (var i = 0; i < pin.containedPushpins.length; i++) {
      description.push("<li>", pin.containedPushpins[i].getTitle(), "</li>");
    }
    description.push("</ul></div>");
  } else {
    var selected_pin_obj = yekevs.filter(
      (wine) => wine.name === pin.getTitle()
    );
    if (selected_pin_obj.length === 1) {
      description.push("<div>");
      description.push(`<p>Country: ${selected_pin_obj[0].country}</p>`);
      description.push(`<a href="${selected_pin_obj[0].website}">Website</a>`);
      description.push("</div>");
    }
  }

  infobox.setOptions({
    title: pin.getTitle(),
    location: pin.getLocation(),
    description: description.join(""),
    visible: true,
  });
}

(async () => {
  let map_core = document.createElement("script");
  map_core.setAttribute(
    "src",
    `https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AspDHQTg89yBJv8vxkcY9Yl9N-rr-yMeDASQNxg48aQmCmunSPhGLsOewW4RHbdo`
  );
  document.body.appendChild(map_core);
})();
