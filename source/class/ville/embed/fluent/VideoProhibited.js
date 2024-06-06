/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoProhibited",
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

   var pathdregular = "M2 6.5A2.5 2.5 0 0 1 4.5 4h7A2.5 2.5 0 0 1 14 6.5v1l2.4-1.8a1 1 0 0 1 1.6.8v3.76a5.5 5.5 0 0 0-1-.66V6.5l-3 2.25v.27c-.34.03-.68.1-1 .19V6.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 5 3 5.67 3 6.5v7c0 .83.67 1.5 1.5 1.5h4.52c.03.34.1.68.19 1H4.5A2.5 2.5 0 0 1 2 13.5v-7Zm8 8a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm2.4 2.8 4.9-4.9a3.5 3.5 0 0 1-4.9 4.9Zm-.7-.7a3.5 3.5 0 0 1 4.9-4.9l-4.9 4.9Z";
   var pathdfilled = "M13 6.5A2.5 2.5 0 0 0 10.5 4h-6A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h4.7A5.5 5.5 0 0 1 13 9.2V6.5Zm5-.3v4.06a5.48 5.48 0 0 0-4-1.24V7.93l2.77-2.31a.75.75 0 0 1 1.23.57Zm-8 8.3a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z";
   
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