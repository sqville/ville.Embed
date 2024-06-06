/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PaintBucket",
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

   var pathdregular = "M9 2.5a.5.5 0 0 0-1 0V4c-.2.07-.4.19-.56.35L2.35 9.44a1.5 1.5 0 0 0 0 2.12L6.7 15.9a1.5 1.5 0 0 0 2.12 0l5.09-5.09a1.5 1.5 0 0 0 0-2.12L9.56 4.35A1.5 1.5 0 0 0 9 4V2.5ZM8 5.2v1.3a.5.5 0 0 0 1 0V5.2l4.19 4.2a.5.5 0 0 1 .08.6H3.2L8 5.2Zm-.6 9.99L3.2 11h9.1l-4.2 4.19a.5.5 0 0 1-.7 0Zm8.62-3.8a.6.6 0 0 0-1.04 0l-1.65 2.83a2.51 2.51 0 1 0 4.34 0l-1.65-2.83Zm-1.82 3.34 1.3-2.24 1.3 2.24a1.51 1.51 0 1 1-2.6 0Z";
   var pathdfilled = "M9 2.5a.5.5 0 0 0-1 0V4c-.2.07-.4.19-.56.35L2.35 9.44a1.5 1.5 0 0 0 0 2.12L6.7 15.9a1.5 1.5 0 0 0 2.12 0l5.09-5.09a1.5 1.5 0 0 0 0-2.12L9.56 4.35A1.5 1.5 0 0 0 9 4V2.5Zm4.27 7.5H3.2L8 5.2v1.3a.5.5 0 0 0 1 0V5.2l4.19 4.2a.5.5 0 0 1 .08.6Zm2.75 1.4a.6.6 0 0 0-1.04 0l-1.65 2.82a2.51 2.51 0 1 0 4.34 0l-1.65-2.83Z";
   
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