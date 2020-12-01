var zoom =100;
var x=0;
var lens_temp;

function removeElement(elementId) {
  // Removes an element from the document
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}

function imageZoom(imgID, resultID) {


    console.log(x);
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);

  /*create lens:*/
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  lens.setAttribute("id", "img-zoom-lens");

  if(x>0){
  lens.style.left = lens_temp.style.left;
  lens.style.top = lens_temp.style.top;
  lens.style.width=zoom + "px";
  lens.style.height=zoom + "px";
  }
  x++;
  lens_temp=lens;
  /*insert lens:*/
  img.parentElement.insertBefore(lens, img);

  /*calculate the ratio between result DIV and lens:*/
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;

  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = img.width * cx + "px " + img.height * cy + "px";

  
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  // lens.addEventListener("mousemove", moveLens);
  // img.addEventListener("mousemove", moveLens);

  lens.addEventListener("mouseover", moveLens);
  img.addEventListener("mouseover", moveLens);
  /*and also for touch screens:*/
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);

  function moveLens(e) {
    var pos, x, y;

    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();

    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);

    /*calculate the position of the lens:*/
    x = pos.x - lens.offsetWidth / 2;
    y = pos.y - lens.offsetHeight / 2;

    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {
      x = img.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > img.height - lens.offsetHeight) {
      y = img.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }

    /*set the position of the lens:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";

    
    /*display what the lens "sees":*/
    result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
  }
  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;

    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();

    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;

    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };

    
  }
}

function launch (ID, _ID2,_class){


 document.getElementById(_class).addEventListener("wheel", (event) => {
    const DIVIDE_AMOUNT = 4;
    console.log(event.deltaY);
    zoom += event.deltaY / DIVIDE_AMOUNT;
    console.log(zoom);


    removeElement("img-zoom-lens");
    imageZoom(ID, _ID2);

    lens_temp.style.width=zoom + "px";
    lens_temp.style.height=zoom + "px";

  });
  
  }
