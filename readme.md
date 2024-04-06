<!-- ABOUT THE PROJECT -->
## About The Project

**ville.Embed** is a [Qooxdoo](https://qooxdoo.org/) control designed to make images, icons and graphics more dynamic.

**Benefits**
* Use pure CSS icons in your project using the amazing [iConicss](https://github.com/Viglino/iconicss) icon set.
* Embed SVG icons in your project using code, and make them themable.
* Use ville.embed.MImage Mixin to make any qx.ui.basic.Image object accept SVG/HTML content. Use themes to define the SVG/HTML/Clip-path values.


<!-- GETTING STARTED -->
## Using the Control in your Application
To use the control in your application, go into the application root directory and install the library into your project:
```sh
$ qx package update
$ qx package list
$ qx package install sqville/ville.Embed
```

## APPROACH - Each icon/embed is it's own Qooxdoo object
**To illustrate** - To create an icon using iConicss's CSS based icon set just create the icon's named object giving it a size (required) and color (optional). To use it in a button just include the ville.embed.MEmbed Mixin and set the Button's new embed property (example below): 
```sh
  var cubeoicon = new ville.embed.iconicss.CubeO(3, "green");
  qx.Class.include(qx.ui.basic.Atom, ville.embed.MEmbed); //Placed one-time at the top of your applicaition code
  var btnFormButton = new qx.ui.form.Button('Embeded Cube').set({ embed : cubeoicon });
```

To create an icon using an SVG based icon set just create the icon's named object giving it a width (required), height (required) and color (optional):
```sh
  var airticketsicon = new ville.embed.fluent.AirTickets(60, 60, "blue");
  qx.Class.include(qx.ui.basic.Atom, ville.embed.MEmbed); //Placed one-time at the top of your applicaition code
  var btnFormButton = new qx.ui.form.Button('Embeded SVG').set({ embed : airticketsicon });
```

<!-- DEMO -->
## Demo
See this control in action using the ville [Wax Demo App](http://qooxdoo.org/qxl.packagebrowser/qxl.packagebrowser/demos/sqville/ville.Embed/waxdemo/)


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Chris Eskew (SQville) - email: sqville@gmail.com