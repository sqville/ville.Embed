/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LinkAdd",
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

   var pathdregular = "M8.5 4.5A.5.5 0 0 0 8 4H5.78A4 4 0 0 0 6 12h2.09A.5.5 0 0 0 8 11H5.8A3 3 0 0 1 6 5h2.09a.5.5 0 0 0 .41-.5ZM18 8a4 4 0 0 0-4-4h-2.09A.5.5 0 0 0 12 5h2.2a3 3 0 0 1 2.44 4.43c.3.13.6.29.88.47.3-.56.48-1.21.48-1.9Zm-4-.5H5.91a.5.5 0 0 0 .09 1h8.09a.5.5 0 0 0-.09-1Zm5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z";
   var pathdfilled = "M18 8a4 4 0 0 0-4-4h-2.1a.75.75 0 0 0 .1 1.5h2.16a2.5 2.5 0 0 1 2 3.76c.49.15.94.37 1.36.64.3-.56.48-1.21.48-1.9ZM8.75 4.75A.75.75 0 0 0 8 4H5.8a4 4 0 0 0 .2 8h2.1a.75.75 0 0 0-.1-1.5H5.84a2.5 2.5 0 0 1 .16-5h2.1a.75.75 0 0 0 .65-.75Zm5 2.5h-7.6a.75.75 0 0 0 .1 1.5h7.6a.75.75 0 0 0-.1-1.5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z";
   
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