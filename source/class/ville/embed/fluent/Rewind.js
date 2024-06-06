/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Rewind",
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

   var pathdregular = "M10 5.49a1 1 0 0 0-1.6-.8l-5.87 4.3c-.68.5-.68 1.52 0 2.02l5.88 4.31a1 1 0 0 0 1.59-.8v-3.17l5.4 3.97a1 1 0 0 0 1.6-.8V5.48a1 1 0 0 0-1.6-.8L10 8.64V5.49Zm-6.88 4.3L9 5.5v9.02l-5.88-4.3a.25.25 0 0 1 0-.41Zm7 0L16 5.5v9.02l-5.88-4.3a.25.25 0 0 1 0-.41Z";
   var pathdfilled = "M10 5.49a1 1 0 0 0-1.6-.8l-5.87 4.3c-.68.5-.68 1.52 0 2.02l5.88 4.31a1 1 0 0 0 1.59-.8v-3.17l5.4 3.97a1 1 0 0 0 1.6-.8V5.48a1 1 0 0 0-1.6-.8L10 8.64V5.49Zm-1.6-.8.3.39Z";
   
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