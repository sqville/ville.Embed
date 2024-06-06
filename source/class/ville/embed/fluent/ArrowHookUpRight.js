/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowHookUpRight",
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

   var pathdregular = "M4 11a5 5 0 0 0 5 5h4.5a.5.5 0 0 0 0-1H9a4 4 0 0 1 0-8h5.3l-2.7 2.7a.5.5 0 1 0 .7.7l3.54-3.53a.5.5 0 0 0 .13-.5.5.5 0 0 0-.14-.25L12.3 2.6a.5.5 0 1 0-.71.7L14.29 6H9a5 5 0 0 0-5 5Z";
   var pathdfilled = "M9 6c.06 0-.06 0 0 0h4.65l-2.27-2.27a.75.75 0 1 1 1.06-1.06l3.35 3.35c.17.18.24.42.21.64a.75.75 0 0 1-.21.45l-3.25 3.24a.75.75 0 1 1-1.06-1.06l1.8-1.79H9a3.5 3.5 0 1 0 0 7h4.25a.75.75 0 0 1 0 1.5H9A5 5 0 0 1 9 6Z";
   
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