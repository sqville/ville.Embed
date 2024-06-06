/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowBounce",
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

   var pathdregular = "M2.5 6a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0V7.7l7.15 7.15c.2.2.5.2.7 0l7-7a.5.5 0 0 0-.7-.7l-6.65 6.64L3.7 7h5.8a.5.5 0 0 0 0-1h-7Z";
   var pathdfilled = "M2.75 6a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0V8.56l6.47 6.47c.3.3.77.3 1.06 0l6.75-6.75a.75.75 0 0 0-1.06-1.06l-6.22 6.22L4.56 7.5h4.69a.75.75 0 0 0 0-1.5h-6.5Z";
   
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