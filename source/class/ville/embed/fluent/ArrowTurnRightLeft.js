/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTurnRightLeft",
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

   var pathdregular = "M4 14.57a.5.5 0 0 0 .31.4l5 2a.5.5 0 1 0 .38-.93L5.85 14.5l11.52-4.59a1 1 0 0 0 .03-1.85L5.7 3.04a.5.5 0 0 0-.4.92L17 8.98 5.53 13.55l1.92-3.83a.5.5 0 1 0-.9-.44l-2.49 4.98a.5.5 0 0 0-.06.3Z";
   var pathdfilled = "M4.47 15.45a.75.75 0 0 1-.4-1.03l2.5-5a.75.75 0 1 1 1.35.67L6.3 13.33 16.12 9 5.45 4.44a.75.75 0 0 1 .6-1.38l11.19 4.8c1 .43 1 1.85 0 2.29l-10.46 4.6 3.25 1.3a.75.75 0 1 1-.56 1.4l-5-2Z";
   
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