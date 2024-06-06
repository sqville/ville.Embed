/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Tag",
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

   var pathdregular = "M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.43.58L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 2.83 0l6.63-6.63A2 2 0 0 0 18 8.98V4.03a2 2 0 0 0-1.99-2L11.12 2Zm-.72 1.3a1 1 0 0 1 .71-.3l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.29.7l-6.63 6.64a1 1 0 0 1-1.41 0l-4.95-4.95a1 1 0 0 1 0-1.41l6.68-6.67Z";
   var pathdfilled = "M18 4.03a2 2 0 0 0-1.98-2L11.12 2a2 2 0 0 0-1.42.59L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 2.83 0l6.63-6.63A2 2 0 0 0 18 8.98V4.03ZM14 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z";
   
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