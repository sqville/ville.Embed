/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookPulse",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 16V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2ZM15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10V4ZM9.46 6.3a.5.5 0 0 0-.9-.02L7.18 9H6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .45-.28l1.03-2.06 2.06 4.55a.5.5 0 0 0 .89.05L13.28 10h.22a.5.5 0 0 0 0-1H13a.5.5 0 0 0-.43.24l-1 1.69-2.11-4.64Z",
    FILLED : "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm5.46 2.3a.5.5 0 0 0-.9-.02L7.18 9H6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .45-.28l1.03-2.06 2.06 4.55a.5.5 0 0 0 .89.05L13.28 10h.22a.5.5 0 0 0 0-1H13a.5.5 0 0 0-.43.24l-1 1.69-2.11-4.64Z"
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