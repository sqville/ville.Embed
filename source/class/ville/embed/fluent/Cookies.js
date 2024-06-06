/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Cookies",
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

   var pathdregular = "M6 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-12a8 8 0 1 0 7.87 6.56.5.5 0 0 0-.87-.24A2 2 0 0 1 13.5 7c0-.26-.18-.5-.44-.55a2 2 0 0 1-.95-3.38.5.5 0 0 0-.24-.85A8.02 8.02 0 0 0 10 2Zm-7 8a7 7 0 0 1 7.87-6.95 2.99 2.99 0 0 0 1.65 4.29 3 3 0 0 0 4.47 2.26l.01.4a7 7 0 1 1-14 0Z";
   var pathdfilled = "M2 10a8 8 0 0 1 9.87-7.78.5.5 0 0 1 .24.85 2 2 0 0 0 .95 3.38c.26.06.44.29.44.55A2 2 0 0 0 17 8.32a.5.5 0 0 1 .87.24A8 8 0 1 1 2 10Zm5-2a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm3 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z";
   
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