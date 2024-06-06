/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingGovernment",
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

   var pathdregular = "M9 2.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5H10v1a5 5 0 0 1 5 5v1h1a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4c0-1.1.9-2 2-2h1v-1a5 5 0 0 1 4-4.9V2.5Zm7 9.5h-1.5a.5.5 0 0 1-.5-.5V10a4 4 0 0 0-8 0v1.5a.5.5 0 0 1-.5.5H4a1 1 0 0 0-1 1v4h5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2h5v-4a1 1 0 0 0-1-1ZM6 13.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm9 0a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM8.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm3.5.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM9 17h2v-2H9v2Z";
   var pathdfilled = "M9.5 2a.5.5 0 0 0-.5.5v2.6A5 5 0 0 0 5 10v1H4a2 2 0 0 0-2 2v4a1 1 0 0 0 1 1h4.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v2c0 .28.22.5.5.5H17a1 1 0 0 0 1-1v-4a2 2 0 0 0-2-2h-1v-1a5 5 0 0 0-5-5V4h2.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-3ZM6 13.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0Zm8.5-.5c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM9 9.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0Zm2.5-.5c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5Z";
   
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