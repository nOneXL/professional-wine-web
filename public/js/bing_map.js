const yekevs = [
    {
        name: "Lotem Winery",
        country: "Israel",
        coordinates: [35.35764, 32.87994], 
        website: "https://lotemwinery.co.il/"
    },
    {
        name: "Amphorae Winery",
        country: "Israel",
        coordinates: [34.99382, 32.63958], 
        website: "https://amphoraewines.com/"
    },
    {
        name: "Berenice Winery",
        country: "Israel",
        coordinates: [35.53807, 32.79001], 
        website: "https://www.berenicewinery.com/"
    }, 
    {
        name: "Vitkin Winery",
        country: "Israel",
        coordinates: [34.89183, 32.38432], 
        website: "https://vitkin-winery.co.il/"
    },
    {
        name: "Champagne Météyer Winery",
        country: "France",
        coordinates: [3.61060, 49.07643], 
        website: "https://www.champagne-meteyer.com/vin-de-champagne-cuvees-Exclusif-uk-34.html"
    },
    {
        name: "Bodegas Campo Viejo Winery",
        country: "Spain",
        coordinates: [-2.47980, 42.47206], 
        website: "https://www.campoviejo.com/es/"
    }
]
var map, clusterLayer, infobox;

function GetMap() {
    map = new Microsoft.Maps.Map('#myMap', {});
    infobox = new Microsoft.Maps.Infobox(map.getCenter(), { visible: false });
    infobox.setMap(map);

    Microsoft.Maps.loadModule("Microsoft.Maps.Clustering", function () {
        clusterLayer = new Microsoft.Maps.ClusterLayer(createPins(), {
            clusteredPinCallback: createPinsCluster,
            callback: createPinList
        });

        Microsoft.Maps.Events.addHandler(clusterLayer, 'click', pushpinClicked);

        map.layers.insert(clusterLayer);
    });
}

function createPins() {
pins = []
for (var i = 0; i < yekevs.length; i++) {
    var lon = yekevs[i].coordinates[0]
    var lat = yekevs[i].coordinates[1]
    var pin = new Microsoft.Maps.Pushpin(
        new Microsoft.Maps.Location(latitude=lat, longitude=lon), {
            icon: '/images/wine.png',
            anchor: new Microsoft.Maps.Point(0, 0)
        });
    pins.push(pin)
}

for (var i = 0; i < yekevs.length; i++) {
    pins[i].setOptions({ title: yekevs[i].name});
}

return pins;
}

function createPinsCluster(cluster) {
    cluster.setOptions({
        title: 'Cluster of ' + cluster.containedPushpins.length + ' wineries'
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
            output.push("<a href='javascript:void(0);' onclick='showInfoboxByGridKey(", data[i].gridKey, ");'>");
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
        description.push('<div style="max-height:75px;overflow-y:auto;"><ul>');
        for (var i = 0; i < pin.containedPushpins.length; i++) {
            description.push('<li>', pin.containedPushpins[i].getTitle(), '</li>');
        }
        description.push('</ul></div>');
    } else {
        var selected_pin_obj = yekevs.filter(wine => wine.name == pin.getTitle())
        if (selected_pin_obj.length == 1) {
            description.push('<div>'); 
            description.push(`<p>Country: ${selected_pin_obj[0].country}</p>`);
            description.push(`<a href="${selected_pin_obj[0].website}">Website</a>`);
            description.push('</div>');
        }
    }

    infobox.setOptions({
        title: pin.getTitle(),
        location: pin.getLocation(),
        description: description.join(''),
        visible: true
    });
}

(async () => {
    let map_core = document.createElement("script");
    let bingKey = "AspDHQTg89yBJv8vxkcY9Yl9N-rr-yMeDASQNxg48aQmCmunSPhGLsOewW4RHbdo"
    map_core.setAttribute("src", `https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=${bingKey}`);
    document.body.appendChild(map_core);
})();