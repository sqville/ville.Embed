/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FlipHorizontal",
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

   var pathdregular = "M17.92 15.77a.5.5 0 0 1-.42.23h-6a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .95-.2l6 13a.5.5 0 0 1-.03.47ZM12 4.77V15h4.72L12 4.78ZM2.5 16a.5.5 0 0 1-.45-.71l6-13A.5.5 0 0 1 9 2.5v13a.5.5 0 0 1-.5.5h-6Z";
   var pathdfilled = "M17.88 15.66a.75.75 0 0 1-.63.34h-5.5a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.44-.3l5.5 12.5c.1.23.08.5-.06.71ZM12.5 6.32v8.18h3.6l-3.6-8.18ZM2.5 16a.5.5 0 0 1-.45-.71l6-13A.5.5 0 0 1 9 2.5v13a.5.5 0 0 1-.5.5h-6Z";
   
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