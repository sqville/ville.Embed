/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CubeAdd",
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

   var pathdregular = "M9.07 16.59c.13.05.26.1.4.12.16.38.36.73.6 1.06a3.5 3.5 0 0 1-1.37-.25l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v4.08a5.5 5.5 0 0 0-1-.66V6.18a.5.5 0 0 0-.31-.47l-5.76-2.3a2.5 2.5 0 0 0-1.86 0L3.31 5.7a.5.5 0 0 0-.31.47v7.64c0 .2.12.4.31.47l5.76 2.3ZM5.7 6.04a.5.5 0 1 0-.4.92l4.2 1.86v3.39a5.5 5.5 0 0 1 1-1.49v-1.9l4.2-1.86a.5.5 0 1 0-.4-.92L10 7.95l-4.3-1.9ZM17 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.15-.35Z";
   var pathdfilled = "M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v4.08a5.48 5.48 0 0 0-7.5.46v-1.9l4.2-1.86a.5.5 0 1 0-.4-.92L10 7.95l-4.3-1.9a.5.5 0 1 0-.4.9l4.2 1.87v3.39a5.48 5.48 0 0 0 .58 5.56 3.5 3.5 0 0 1-1.38-.25l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3ZM17 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.15-.35Z";
   
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