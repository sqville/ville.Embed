/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowFlowUpRightRectangleMultiple",
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

   var pathdregular = "M11 12.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-4Zm8 2a.5.5 0 0 0-1 0V17a1 1 0 0 1-1 1h-3.5a.5.5 0 0 0 0 1H17a2 2 0 0 0 2-2v-2.5ZM14.31 3.15a.5.5 0 0 0-.7.7l2.64 2.65H12A2.5 2.5 0 0 0 9.5 9v2c0 .83-.67 1.5-1.5 1.5h-.04a3 3 0 1 0 0 1H8a2.5 2.5 0 0 0 2.5-2.5V9c0-.83.67-1.5 1.5-1.5h4.25l-2.64 2.65a.5.5 0 1 0 .7.7l3.5-3.5a.5.5 0 0 0 0-.7l-3.5-3.5ZM7 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z";
   var pathdfilled = "M11 12.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-4Zm8 2a.5.5 0 0 0-1 0V17a1 1 0 0 1-1 1h-3.5a.5.5 0 0 0 0 1H17a2 2 0 0 0 2-2v-2.5ZM14.31 3.15a.5.5 0 0 0-.7.7l2.64 2.65H12A2.5 2.5 0 0 0 9.5 9v2c0 .83-.67 1.5-1.5 1.5h-.04a3 3 0 1 0 0 1H8a2.5 2.5 0 0 0 2.5-2.5V9c0-.83.67-1.5 1.5-1.5h4.25l-2.64 2.65a.5.5 0 1 0 .7.7l3.5-3.5a.5.5 0 0 0 0-.7l-3.5-3.5Z";
   
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