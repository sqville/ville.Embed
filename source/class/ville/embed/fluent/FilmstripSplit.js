/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FilmstripSplit",
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

   var pathdregular = "M10.5 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0v-15ZM2 6.5A2.5 2.5 0 0 1 4.5 4h4v1h-4C3.67 5 3 5.67 3 6.5v7c0 .83.67 1.5 1.5 1.5h4v1h-4A2.5 2.5 0 0 1 2 13.5v-7ZM11.5 5V4h4A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5h-4v-1h4c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-4ZM15 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm.5 5.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5ZM15 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1ZM4.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5ZM4 12.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1ZM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Z";
   var pathdfilled = "M10.5 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0v-15ZM2 7a3 3 0 0 1 3-3h3.5v12H5a3 3 0 0 1-3-3V7Zm2.5-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5ZM4 13.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1ZM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Zm7 7V4H15a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-3.5ZM15 7.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1Zm.5 4.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5ZM15 9.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0Z";
   
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