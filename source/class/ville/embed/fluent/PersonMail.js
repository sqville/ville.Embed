/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonMail",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18v-1a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h5.27A2 2 0 0 1 11 11H4Zm10.51 4.93-4.5-2.63c.1-.73.73-1.3 1.49-1.3h6c.83 0 1.5.67 1.5 1.5l-4.49 2.43Zm.23 1.01 4.26-2.3v2.86c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3.05l4.25 2.48c.15.09.33.1.49.01Z";
   var pathdfilled = "M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18v-5c0-1.1.9-2 2-2H4Zm10.51 4.93-4.5-2.63c.1-.73.73-1.3 1.49-1.3h6c.83 0 1.5.67 1.5 1.5l-4.49 2.43Zm.23 1.01 4.26-2.3v2.86c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3.05l4.25 2.48c.15.09.33.1.49.01Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});