/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShiftsTeam",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 6.5a.5.5 0 0 0-1 0v4c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1H10V6.5ZM6 3a3 3 0 0 0-3 3v4.1a2.75 2.75 0 0 1 1-.09V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.1a2.16 2.16 0 0 1 .08 1H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM3.75 14.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM4 19c2.14 0 3-1.1 3-2.19a1.3 1.3 0 0 0-1.29-1.31H2.3A1.3 1.3 0 0 0 1 16.81c0 1.1.86 2.19 3 2.19Zm3.5-.5h-.02c.35-.51.52-1.1.52-1.69 0-.48-.15-.93-.4-1.31h1.33c.6 0 1.07.5 1.07 1.13 0 .93-.71 1.87-2.5 1.87Zm.25-4a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    FILLED : "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3.02l.02-.38c0-.91-.59-1.75-1.45-2.02a2.25 2.25 0 0 0-3.31-3.01A2.75 2.75 0 0 0 3 10.1V6Zm7 .5a.5.5 0 0 0-1 0v4c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1H10V6.5Zm-6.25 8a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM4 19c2.14 0 3-1.1 3-2.19a1.3 1.3 0 0 0-1.29-1.31H2.3A1.3 1.3 0 0 0 1 16.81c0 1.1.86 2.19 3 2.19Zm3.5-.5h-.02c.35-.51.52-1.1.52-1.69 0-.48-.15-.93-.4-1.31h1.33c.6 0 1.07.5 1.07 1.13 0 .93-.71 1.87-2.5 1.87Zm.25-4a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
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
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});