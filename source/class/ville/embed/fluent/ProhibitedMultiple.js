/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ProhibitedMultiple",
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

   var pathdregular = "M4.76 4.76a6 6 0 0 1 8.11-.34l-8.45 8.45a6 6 0 0 1 .34-8.11Zm.37 8.82 8.45-8.45a6 6 0 0 1-8.45 8.45Zm8.82-9.53a7 7 0 1 0-9.9 9.9 7 7 0 0 0 9.9-9.9ZM17 9c0 1.37-.34 2.66-.95 3.79a6.02 6.02 0 0 1-3.26 3.26 7.97 7.97 0 0 1-5.17.83 7 7 0 0 0 9.26-9.26c.08.45.12.9.12 1.38Z";
   var pathdfilled = "M5.11 5.11a5.5 5.5 0 0 1 7.21-.5l-7.7 7.71a5.5 5.5 0 0 1 .5-7.2Zm.57 8.27 7.7-7.7a5.5 5.5 0 0 1-7.7 7.7Zm8.27-9.33a7 7 0 1 0-9.9 9.9 7 7 0 0 0 9.9-9.9ZM17 9a8 8 0 0 1-9.77 7.8 7 7 0 0 0 9.57-9.57c.13.57.2 1.16.2 1.77Z";
   
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