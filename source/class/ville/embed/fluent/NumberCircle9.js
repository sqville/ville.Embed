/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NumberCircle9",
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

   var pathdregular = "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm8-7a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8 .5a2 2 0 1 0 0-4c-1.2 0-2 .88-2 2s.8 2 2 2Zm0-5c.86 0 1.76.29 2.43 1.04.68.75 1.07 1.88 1.07 3.46a5.5 5.5 0 0 1-.84 3.11A3.12 3.12 0 0 1 10 14.5a3.02 3.02 0 0 1-2.68-1.56.5.5 0 1 1 .87-.5c.19.34.72 1.06 1.81 1.06.83 0 1.43-.36 1.84-.96.4-.58.63-1.4.66-2.38A3 3 0 0 1 10 11.5c-1.8 0-3-1.36-3-3s1.2-3 3-3Z";
   var pathdfilled = "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 8.5c-1.2 0-2-.88-2-2s.8-2 2-2a2 2 0 1 1 0 4Zm2.5-.34A3 3 0 0 1 10 11.5c-1.8 0-3-1.36-3-3s1.2-3 3-3c.86 0 1.76.29 2.43 1.04.68.75 1.07 1.88 1.07 3.46a5.5 5.5 0 0 1-.84 3.11A3.12 3.12 0 0 1 10 14.5a3.02 3.02 0 0 1-2.68-1.56.5.5 0 1 1 .87-.5c.19.34.72 1.06 1.81 1.06.83 0 1.43-.36 1.84-.96.4-.58.63-1.4.66-2.38Z";
   
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