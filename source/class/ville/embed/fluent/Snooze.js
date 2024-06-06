/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Snooze",
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

   var pathdregular = "M10.5 4a.5.5 0 0 0 0 1h4.03l-4.44 6.2a.5.5 0 0 0 .41.8h5a.5.5 0 0 0 0-1h-4.03l4.44-6.2a.5.5 0 0 0-.41-.8h-5Zm-6 6a.5.5 0 0 0 0 1h2.96l-3.35 4.19a.5.5 0 0 0 .39.81h4a.5.5 0 0 0 0-1H5.54l3.35-4.19A.5.5 0 0 0 8.5 10h-4Z";
   var pathdfilled = "M10.75 4a.75.75 0 0 0 0 1.5h3.88l-4.45 5.27a.75.75 0 0 0 .57 1.23h5.5a.75.75 0 0 0 0-1.5h-3.88l4.45-5.27A.75.75 0 0 0 16.25 4h-5.5Zm-7 6a.75.75 0 0 0 0 1.5h1.97l-2.56 3.29A.75.75 0 0 0 3.75 16h3.5a.75.75 0 0 0 0-1.5H5.28l2.56-3.29A.75.75 0 0 0 7.25 10h-3.5Z";
   
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