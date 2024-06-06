/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Column",
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

   var pathdregular = "M16.5 17a.5.5 0 0 0 0-1H16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H16a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h.5ZM7 5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5Zm5 10V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1Zm-8 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 1 1 1v10.1a1 1 0 0 1-1 .9h-.5a.5.5 0 1 0 0 1H4Z";
   var pathdfilled = "M16.5 17a.5.5 0 0 0 0-1H16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H16a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h.5ZM7 5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5ZM4 17a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 1 1 1v10.1a1 1 0 0 1-1 .9h-.5a.5.5 0 1 0 0 1H4Z";
   
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