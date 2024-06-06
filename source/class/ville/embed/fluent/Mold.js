/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Mold",
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

   var pathdregular = "M13.5 1.5a.5.5 0 0 0-1 0v1.56a3.8 3.8 0 0 0-2 1.06L9.16 5.45l-1.3-1.3a.5.5 0 1 0-.71.7l1.3 1.31-2.29 2.3-1.3-1.31a.5.5 0 1 0-.71.7l1.3 1.31-1.33 1.34a3.8 3.8 0 0 0-1.06 2H1.5a.5.5 0 0 0 0 1h1.51c.06.71.32 1.41.78 2l-1.65 1.65a.5.5 0 1 0 .71.7l1.64-1.64c.6.46 1.3.72 2.01.78v1.51a.5.5 0 0 0 1 0v-1.56a3.8 3.8 0 0 0 2-1.06l1.34-1.33 1.3 1.3a.5.5 0 0 0 .71-.7l-1.3-1.31 2.29-2.3 1.3 1.31a.5.5 0 0 0 .71-.7l-1.3-1.31 1.33-1.34a3.8 3.8 0 0 0 1.06-2h1.56a.5.5 0 0 0 0-1h-1.51a3.8 3.8 0 0 0-.78-2l1.64-1.65a.5.5 0 0 0-.7-.7L15.5 3.79A3.8 3.8 0 0 0 13.5 3V1.5ZM4 13.24v-.1c.01-.7.29-1.4.82-1.94l6.38-6.38a2.8 2.8 0 0 1 3.98 3.98l-6.39 6.38A2.8 2.8 0 0 1 4 13.24Zm2.75.76a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14 6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z";
   var pathdfilled = "M13 1c.28 0 .5.22.5.5v1.51a3.8 3.8 0 0 1 2 .78l1.65-1.64a.5.5 0 0 1 .7.7L16.21 4.5c.46.6.72 1.3.78 2.01h1.51a.5.5 0 0 1 0 1h-1.56a3.8 3.8 0 0 1-1.06 2l-1.33 1.34 1.3 1.3a.5.5 0 0 1-.7.71l-1.31-1.3-2.3 2.29 1.31 1.3a.5.5 0 0 1-.7.71l-1.31-1.3-1.34 1.33a3.8 3.8 0 0 1-2 1.06v1.56a.5.5 0 0 1-1 0v-1.51a3.8 3.8 0 0 1-2-.78l-1.65 1.65a.5.5 0 0 1-.7-.71l1.64-1.64A3.8 3.8 0 0 1 3 13.5H1.5a.5.5 0 0 1 0-1h1.56a3.8 3.8 0 0 1 1.06-2l1.33-1.34-1.3-1.3a.5.5 0 1 1 .7-.71l1.31 1.3 2.3-2.29-1.31-1.3a.5.5 0 1 1 .7-.71l1.31 1.3 1.34-1.33a3.8 3.8 0 0 1 2-1.06V1.5c0-.28.22-.5.5-.5ZM6.75 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14 6.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z";
   
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