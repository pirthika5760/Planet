




// function planetDetailsFetch(planetname, section, activeButton) {
//     fetch(`/api/${planetname}/${section}`).then(res => res.json()).then(
//         data => {
//             document.getElementById("title").innerText = data.title;
//             document.getElementById("desc").innerText = data.details;
//             document.getElementById("rotation").innerText = data.states.rotation;
//             document.getElementById("revolution").innerText = data.states.revolution;
//             document.getElementById("radius").innerText = data.states.radius;
//             document.getElementById("temprature").innerText = data.states.temp;
//             document.getElementById("img").src = "/images/" + data.image
//             console.log(planetname);
//             if (section == "surface") {
//                 document.getElementById("img1").style.display = "block";
//                 document.getElementById("img").src = "/images/" + data.image.first;

//                 document.getElementById("img1").src = "/images/" + data.image.surface2;
//             }
//             else {
//                 document.getElementById("img1").style.display = "none";

//             }


//         }


//     )
//     color(planetname, section);


// }
// // let count = 0;
// // function color() {
// //     document.querySelectorAll("button").forEach(btn => {
// //       btn.style.backgroundColor = "transparent";
// //     });

// //     document.getElementById().style.backgroundColor = "red";
// //   }


// function color(p, sec) {
//     document.querySelectorAll("button").forEach(btn => {
//         btn.style.backgroundColor = "transparent";
//     });

//     const el = document.getElementById(sec);
//     if (sec && p === "mercury") {
//         el.style.backgroundColor = "#419EBB";
//     }
//     else if ( p === "venus") {
//         el.style.backgroundColor = "#EDA249";

//     }
//     else if (sec && p === "earth") {
//         el.style.backgroundColor = "#6F2ED6";

//     }
//     else if (sec && p === "mars") {
//         el.style.backgroundColor = "#D14C32";

//     }
//     else if (sec && p === "jupiter") {
//         el.style.backgroundColor = "#D83A34";

//     }
//     else if (sec && p === "saturn") {
//         el.style.backgroundColor = "#CD5120";

//     }
//     else if (sec && p === "uranus") {
//         el.style.backgroundColor = "#1EC2A4";

//     }
//     else if (sec && p === "neptune") {
//         el.style.backgroundColor = "#2D68F0";

//     }



// }

function changeDetails(currentData, src, color,part) {
    currentData = JSON.parse(currentData);
    src = JSON.parse(src);

    //    color=JSON.parse(color);

    console.log(currentData)
    console.log(src.content)
    document.getElementById("title").innerText = currentData.name;
    document.getElementById("desc").innerText = src.content;
    document.getElementById("rotation").innerText = currentData.rotation;
    document.getElementById("revolution").innerText = currentData.revolution;
    document.getElementById("radius").innerText = currentData.radius;
    document.getElementById("temprature").innerText = currentData.temperature;

    if (part === "overview") {
        document.getElementById("img").src = "/images/" + currentData.images.planet;
        document.getElementById("imggeo").style.display = "none";
        document.getElementById("structure").style.backgroundColor = "transparent";
        document.getElementById("geology").style.backgroundColor = "transparent";

        document.getElementById("overview").style.backgroundColor = color;
    }
    else if (part === "structure") {
        document.getElementById("imggeo").style.display = "none";

        document.getElementById("img").src = "/images/" + currentData.images.internal;
        document.getElementById("overview").style.backgroundColor = "transparent";

        document.getElementById("geology").style.backgroundColor = "transparent";

        document.getElementById("structure").style.backgroundColor = color;
    }
    else if (part === "geology") {
        document.getElementById("imggeo").src = "/images/" + currentData.images.geology;
        document.getElementById("imggeo").style.display = "block";

        document.getElementById("img").src = "/images/" + currentData.images.planet;
        document.getElementById("geology").style.backgroundColor = color;

        document.getElementById("overview").style.backgroundColor = "transparent";
        document.getElementById("structure").style.backgroundColor = "transparent";
    }

}
function colorchange(color) {
    document.getElementById("overview").addEventListener("click", () => {
        document.getElementById("structure").style.backgroundColor = "transparent";
        document.getElementById("geology").style.backgroundColor = "transparent";

        document.getElementById("overview").style.backgroundColor = color;
    })
    document.getElementById("structure").addEventListener("click", () => {
        document.getElementById("overview").style.backgroundColor = "transparent";

        document.getElementById("geology").style.backgroundColor = "transparent";

        document.getElementById("structure").style.backgroundColor = color;
    })
    document.getElementById("geology").addEventListener("click", () => {
        document.getElementById("geology").style.backgroundColor = color;

        document.getElementById("overview").style.backgroundColor = "transparent";
        document.getElementById("structure").style.backgroundColor = "transparent";

    })
}




