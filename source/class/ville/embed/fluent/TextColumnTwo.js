/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextColumnTwo",
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

   var pathdregular = "M17 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Zm-8 0a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Zm8 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Zm-8 0a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Zm8 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Zm-8 0a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Zm8 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Zm-8 0a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Z";
   var pathdfilled = "M17 5.75a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Zm-8 0A.75.75 0 0 0 8.25 5h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Zm8 3a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Zm-8 0A.75.75 0 0 0 8.25 8h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Zm8 3a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Zm-8 0a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Zm8 3a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Zm-8 0a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h4.5c.41 0 .75-.34.75-.75Z";
   
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