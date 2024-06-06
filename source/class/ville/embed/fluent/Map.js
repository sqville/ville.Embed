/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Map",
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

   var pathdregular = "M17.73 3.06a.5.5 0 0 1 .27.44V13a.5.5 0 0 1-.21.41l-5 3.5a.5.5 0 0 1-.58 0l-4.71-3.3-4.71 3.3A.5.5 0 0 1 2 16.5V7a.5.5 0 0 1 .21-.41l5-3.5a.5.5 0 0 1 .58 0l4.71 3.3 4.71-3.3a.5.5 0 0 1 .52-.03ZM12 7.26l-4-2.8v8.28l4 2.8V7.26Zm1 8.28 4-2.8V4.46l-4 2.8v8.28Zm-6-2.8V4.46l-4 2.8v8.28l4-2.8Z";
   var pathdfilled = "m12 6.04-4-2.8v10.72l4 2.8V6.04Zm1 10.72 4.79-3.35A.5.5 0 0 0 18 13V3.5a.5.5 0 0 0-.79-.41L13 6.04v10.72ZM2.21 6.59 7 3.24v10.72l-4.21 2.95A.5.5 0 0 1 2 16.5V7a.5.5 0 0 1 .21-.41Z";
   
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