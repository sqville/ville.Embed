/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CameraSwitch",
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

   var pathdregular = "M14.85 2.15a.5.5 0 0 0-.7.7L15.29 4H4a2 2 0 0 0-2 2v6.5a.5.5 0 0 0 1 0V6a1 1 0 0 1 1-1h11.3l-1.15 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2ZM16 15a1 1 0 0 0 1-1V7.5a.5.5 0 0 1 1 0V14a2 2 0 0 1-2 2H4.7l1.15 1.15a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7L4.71 15H16Zm-3-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z";
   var pathdfilled = "M14.15 2.15c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L15.29 5H4a1 1 0 0 0-1 1v6.5a.5.5 0 0 1-1 0V6c0-1.1.9-2 2-2h11.3l-1.15-1.15a.5.5 0 0 1 0-.7ZM17 14a1 1 0 0 1-1 1H4.7l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L4.71 16H16a2 2 0 0 0 2-2V7.5a.5.5 0 0 0-1 0V14Zm-4-4a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z";
   
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