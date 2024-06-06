/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.StreetSign",
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

   var pathdregular = "M7 4a2 2 0 1 1 4 0v1h2.38a2 2 0 0 1 1.41.59l2.06 2.06a.5.5 0 0 1 0 .7l-2.06 2.06a2 2 0 0 1-1.41.59H11v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h2V4Zm1 1h2V4a1 1 0 0 0-2 0v1Zm0 6v6h2v-6H8ZM4 7v2a1 1 0 0 0 1 1h8.38a1 1 0 0 0 .7-.3L15.8 8l-1.7-1.7a1 1 0 0 0-.71-.3H5a1 1 0 0 0-1 1Z";
   var pathdfilled = "M7 4a2 2 0 1 1 4 0v1h2.38a2 2 0 0 1 1.41.59l2.06 2.06a.5.5 0 0 1 0 .7l-2.06 2.06a2 2 0 0 1-1.41.59H11v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h2V4Zm3 0a1 1 0 0 0-2 0v1h2V4ZM8 17h2v-6H8v6Z";
   
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