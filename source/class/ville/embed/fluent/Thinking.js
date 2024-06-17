/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Thinking",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2a3.55 3.55 0 0 0-3.52 2.1c-.33.7-.43 1.44-.46 1.92-.65.05-1.31.2-1.86.56C3.44 7.06 3 7.85 3 9s.44 1.94 1.16 2.42c.68.45 1.55.58 2.34.58h7c.78 0 1.65-.11 2.34-.56C16.56 10.97 17 10.17 17 9c0-1.15-.44-1.94-1.16-2.42a3.84 3.84 0 0 0-1.86-.56 5.53 5.53 0 0 0-.46-1.92A3.56 3.56 0 0 0 10 2ZM7 6.5c0-.24 0-1.15.4-1.98.18-.4.46-.78.86-1.05A3 3 0 0 1 10 3a3 3 0 0 1 1.74.47c.4.27.68.65.87 1.05.39.83.39 1.74.39 1.98 0 .28.22.5.5.5.71 0 1.34.12 1.79.42.4.27.71.73.71 1.58 0 .89-.31 1.34-.71 1.6-.44.3-1.07.4-1.79.4h-7c-.71 0-1.34-.12-1.79-.42C4.31 10.31 4 9.85 4 9c0-.85.3-1.31.71-1.58C5.16 7.12 5.8 7 6.5 7a.5.5 0 0 0 .5-.5ZM8 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-4.5 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z",
    FILLED : "M7.7 2.64A4 4 0 0 1 10 2a3.56 3.56 0 0 1 3.52 2.1c.33.7.43 1.44.46 1.92.65.05 1.31.2 1.86.56C16.56 7.06 17 7.85 17 9c0 1.17-.44 1.97-1.16 2.44-.69.45-1.56.56-2.34.56h-7c-.79 0-1.66-.13-2.34-.58C3.44 10.94 3 10.15 3 9s.44-1.94 1.16-2.42c.55-.36 1.2-.51 1.86-.56.03-.48.13-1.21.46-1.92.25-.53.63-1.06 1.21-1.46ZM10 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
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