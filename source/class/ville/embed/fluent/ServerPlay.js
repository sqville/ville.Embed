/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ServerPlay",
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

   var pathdregular = "M14 9.02V4.5c0-.83-.67-1.5-1.5-1.5h-5C6.67 3 6 3.67 6 4.5v11c0 .83.67 1.5 1.5 1.5h2.1c.18.36.4.7.66 1H7.5A2.5 2.5 0 0 1 5 15.5v-11A2.5 2.5 0 0 1 7.5 2h5A2.5 2.5 0 0 1 15 4.5v4.52a5.57 5.57 0 0 0-1 0ZM7.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM7 12.5c0-.28.22-.5.5-.5h2.1c-.16.32-.3.65-.4 1H7.5a.5.5 0 0 1-.5-.5Zm2 2c0-.17 0-.34.02-.5H7.5a.5.5 0 0 0 0 1h1.52a5.57 5.57 0 0 1-.02-.5Zm10 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.29-.44-2.97-1.65a.5.5 0 0 0-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 0 0 0-.88Z";
   var pathdfilled = "M7.5 2A2.5 2.5 0 0 0 5 4.5v11A2.5 2.5 0 0 0 7.5 18h2.76a5.47 5.47 0 0 1-1.24-3H7.5a.5.5 0 0 1 0-1h1.52c.03-.34.1-.68.19-1H7.5a.5.5 0 0 1 0-1h2.1A5.5 5.5 0 0 1 15 9.02V4.5A2.5 2.5 0 0 0 12.5 2h-5ZM7 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm12 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.29-.44-2.97-1.65a.5.5 0 0 0-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 0 0 0-.88Z";
   
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