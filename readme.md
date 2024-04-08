<!-- ABOUT THE PROJECT -->
## Ville.Embed

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

## Approach 1 - Each icon/embed is it's own Qooxdoo object
**To illustrate** - To create an icon using iConicss's CSS based icon set just create the icon's named object giving it a size (required) and color (optional). To use it in a button just include the ville.embed.MEmbed Mixin and set the Button's new embed property (example below): 
```js
  var cubeoicon = new ville.embed.iconicss.CubeO(3, "green");
  // Placed one-time at the top of your applicaition code
  qx.Class.include(qx.ui.basic.Atom, ville.embed.MEmbed);
  var btnFormButton = new qx.ui.form.Button('Embeded Cube').set({ embed : cubeoicon });
```

To create an icon using an SVG based icon set just create the icon's named object giving it a width (required), height (required) and color (optional):
```js
  var airticketsicon = new ville.embed.fluent.AirTickets().set({ width: 40, height: 40 });
  // Placed one-time at the top of your applicaition code
  qx.Class.include(qx.ui.basic.Atom, ville.embed.MEmbed); 
  var btnFormButton = new qx.ui.form.Button('Embeded SVG').set({ embed : airticketsicon });
```

## Approach 2 - Enable qx.ui.basic.Image, Qooxdoo object to accept HTML/SVG markup and Clip-path values.
```js
  // Placed one-time at the top of your applicaition code
  qx.Class.include(qx.ui.basic.Image, ville.embed.MImage); 
  // Appearance entry changes. Example: ComboBox
    "combobox/button": {
      ...
      return {
        icon: "",
        ...
      }
    },

    "combobox/button/icon" :
    {
    	include : "image",
    	
    	style : function(states)
    	{        
        
        // To use CSS clip-path, comment-out "html" and uncomment "clipPath"  
        
        return {
          html : wax.demo.theme.Image.ChevronDownRegular,
          width : 16,
          height : 16,
          backgroundColor : "transparent",
          // clipPath : "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%"
    		};
    	}
    },

```

<!-- DEMO -->
## Demo
[Demo](https://sqville.github.io/ville.Embed/published/)


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Chris Eskew (SQville) - email: sqville@gmail.com