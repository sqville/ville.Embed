/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonBoard",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6.5 9C5.67 9 5 9.67 5 10.5c0 .33.04 1.05.62 1.68.59.63 1.63 1.07 3.38 1.07s2.79-.43 3.37-1.06A2.4 2.4 0 0 0 13 10.5c0-.83-.67-1.5-1.5-1.5h-5ZM6 10.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5 0 .25-.03.66-.36 1-.32.35-1.04.75-2.64.75s-2.32-.4-2.64-.75a1.41 1.41 0 0 1-.36-1ZM3 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Zm2 13a3 3 0 0 1-2.24-1h6.74a3.5 3.5 0 0 0 3.5-3.5V5.76A3 3 0 0 1 17 8v4.5a4.5 4.5 0 0 1-4.5 4.5H8Z",
    FILLED : "M6 3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm4.75 3.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm1.75 4c0 .59-.15 2.5-3.5 2.5-3.36 0-3.5-1.93-3.5-2.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1ZM5.76 16A3 3 0 0 0 8 17h4.5a4.5 4.5 0 0 0 4.5-4.5V8a3 3 0 0 0-1-2.24v6.74a3.5 3.5 0 0 1-3.5 3.5H5.76Z"
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